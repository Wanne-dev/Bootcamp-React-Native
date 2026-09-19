import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import useStore from '../store';
import { Header, Button } from '../components';
import { theme } from '../theme';
import { formatPrice } from '../data/productos';

const catColors = {
  escolar: { bg: '#1B3A5C', light: '#F0F4F8', abbr: 'ESC', icon: 'school' },
  oficina: { bg: '#059669', light: '#ECFDF5', abbr: 'OFC', icon: 'briefcase' },
  arte: { bg: '#E8654A', light: '#FFF0EC', abbr: 'ART', icon: 'color-palette' },
  tecnologia: { bg: '#7C3AED', light: '#F5F3FF', abbr: 'TEC', icon: 'hardware-chip' },
};

const ProductDetailScreen = ({ route, navigation }) => {
  const { producto } = route.params;
  const { addToCart, toggleFavorite, isFavorite, getCartCount } = useStore();
  const [selectedVariante, setSelectedVariante] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const isFav = isFavorite(producto.sku);
  const cat = catColors[producto.categoria] || catColors.escolar;
  const hasVariantes = producto.variantes.length > 0;
  const maxStock = producto.stock;

  const handleAddToCart = () => {
    if (hasVariantes && !selectedVariante) return;
    addToCart(producto, selectedVariante, quantity);
    navigation.navigate('CartTab');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="" showBack onBack={() => navigation.goBack()} cartCount={getCartCount()} onCartPress={() => navigation.navigate('CartTab')} transparent={true} style={styles.header} />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          {producto.imagen ? (
            <Image source={producto.imagen} style={styles.productImage} resizeMode="cover" />
          ) : (
            <View style={[styles.iconContainer, { backgroundColor: cat.light }]}>
              <Ionicons name={cat.icon} size={48} color={cat.bg} />
            </View>
          )}
          <TouchableOpacity onPress={() => toggleFavorite(producto.sku)} style={styles.favButton} activeOpacity={0.8}>
            <View style={[styles.favCircle, isFav && styles.favCircleActive]}>
              <Ionicons name={isFav ? 'heart' : 'heart-outline'} size={22} color={isFav ? '#FFFFFF' : '#6B7280'} />
            </View>
          </TouchableOpacity>
          <View style={styles.skuBadge}><Text style={styles.skuText}>{producto.sku}</Text></View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.headerRow}>
            <View style={styles.nameContainer}>
              <Text style={styles.name} numberOfLines={3}>{producto.nombre}</Text>
              <Text style={styles.unit}>por {producto.unidad}</Text>
            </View>
            <Text style={styles.price}>{formatPrice(producto.precio)}</Text>
          </View>
          <Text style={styles.description}>{producto.descripcion}</Text>
          <View style={styles.infoCards}>
            <View style={styles.infoCard}>
              <Ionicons name="pricetag" size={18} color={cat.bg} />
              <Text style={styles.infoCardLabel}>Categoria</Text>
              <Text style={styles.infoCardValue}>{producto.categoria.charAt(0).toUpperCase() + producto.categoria.slice(1)}</Text>
            </View>
            <View style={styles.infoCard}>
              <Ionicons name="folder" size={18} color={cat.bg} />
              <Text style={styles.infoCardLabel}>Tipo</Text>
              <Text style={styles.infoCardValue}>{producto.tipo}</Text>
            </View>
            <View style={styles.infoCard}>
              <Ionicons name="archive" size={18} color={maxStock <= 10 ? '#D97706' : cat.bg} />
              <Text style={styles.infoCardLabel}>Stock</Text>
              <Text style={[styles.infoCardValue, maxStock <= 10 && maxStock > 0 && { color: '#D97706' }, maxStock === 0 && { color: '#DC2626' }]}>{maxStock}</Text>
            </View>
          </View>
          {hasVariantes && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Ionicons name="options" size={18} color={theme.colors.onSurface} />
                <Text style={styles.sectionTitle}>Variantes</Text>
              </View>
              <View style={styles.variantesContainer}>
                {producto.variantes.map((variante, index) => {
                  const key = Object.keys(variante)[0];
                  const value = variante[key];
                  const isSelected = selectedVariante && selectedVariante[key] === value;
                  return (
                    <TouchableOpacity key={`${key}-${value}-${index}`} onPress={() => setSelectedVariante(variante)} style={[styles.varianteChip, isSelected && { backgroundColor: cat.bg, borderColor: cat.bg }]} activeOpacity={0.85}>
                      <Text style={[styles.varianteChipText, isSelected && { color: '#FFFFFF', fontWeight: '600' }]}>{value}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons name="calculator" size={18} color={theme.colors.onSurface} />
              <Text style={styles.sectionTitle}>Cantidad</Text>
            </View>
            <View style={styles.quantitySelector}>
              <TouchableOpacity onPress={() => setQuantity(prev => Math.max(prev - 1, 1))} disabled={quantity <= 1} style={[styles.quantityButton, quantity <= 1 && styles.quantityButtonDisabled]} activeOpacity={0.7}>
                <Ionicons name="remove" size={20} color={theme.colors.onSurface} />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity(prev => Math.min(prev + 1, maxStock))} disabled={quantity >= maxStock} style={[styles.quantityButton, quantity >= maxStock && styles.quantityButtonDisabled]} activeOpacity={0.7}>
                <Ionicons name="add" size={20} color={theme.colors.onSurface} />
              </TouchableOpacity>
            </View>
          </View>
          <Button
            title={maxStock > 0 ? (hasVariantes && !selectedVariante ? 'Selecciona variante' : 'Agregar al carrito') : 'Agotado'}
            onPress={handleAddToCart}
            disabled={maxStock === 0 || (hasVariantes && !selectedVariante)}
            fullWidth size="lg"
            iconName={maxStock > 0 && (!hasVariantes || selectedVariante) ? 'cart' : undefined}
            variant={maxStock > 0 && (!hasVariantes || selectedVariante) ? 'primary' : 'ghost'}
          />
          {hasVariantes && !selectedVariante && maxStock > 0 && (
            <View style={styles.hintContainer}>
              <Ionicons name="information-circle" size={14} color={theme.colors.onSurfaceVariant} />
              <Text style={styles.hintText}>Selecciona una variante arriba</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  header: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 },
  scrollView: { flex: 1 },
  content: { paddingBottom: theme.spacing.xxl },
  imageContainer: { height: 320, position: 'relative', backgroundColor: theme.colors.surfaceVariant },
  productImage: { width: '100%', height: '100%' },
  iconContainer: { width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' },
  favButton: { position: 'absolute', top: theme.spacing.lg, right: theme.layout.screenPadding },
  favCircle: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', ...theme.shadows.md },
  favCircleActive: { backgroundColor: theme.colors.primary },
  skuBadge: { position: 'absolute', bottom: theme.spacing.md, left: theme.spacing.md, backgroundColor: 'rgba(255,255,255,0.9)', paddingHorizontal: theme.spacing.sm, paddingVertical: 4, borderRadius: theme.borderRadius.sm },
  skuText: { ...theme.typography.labelSmall, color: '#6B7280', fontFamily: 'monospace' },
  infoContainer: { paddingHorizontal: theme.layout.screenPadding, paddingTop: theme.spacing.lg, gap: theme.spacing.lg },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  nameContainer: { flex: 1, marginRight: theme.spacing.md },
  name: { fontSize: 22, fontWeight: '700', color: theme.colors.onSurface, lineHeight: 28 },
  unit: { ...theme.typography.bodySmall, color: theme.colors.onSurfaceVariant, marginTop: 4 },
  price: { fontSize: 24, fontWeight: '800', color: theme.colors.primary },
  description: { ...theme.typography.bodyLarge, color: theme.colors.onSurfaceVariant, lineHeight: 24 },
  infoCards: { flexDirection: 'row', gap: theme.spacing.sm },
  infoCard: { flex: 1, backgroundColor: theme.colors.surfaceContainer, borderRadius: theme.borderRadius.md, padding: theme.spacing.md, alignItems: 'center', gap: 4 },
  infoCardLabel: { ...theme.typography.labelSmall, color: theme.colors.onSurfaceVariant },
  infoCardValue: { ...theme.typography.titleSmall, color: theme.colors.onSurface, fontWeight: '600' },
  section: { gap: theme.spacing.sm },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  sectionTitle: { ...theme.typography.titleMedium, color: theme.colors.onSurface, fontWeight: '600' },
  variantesContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing.sm },
  varianteChip: { paddingHorizontal: theme.spacing.lg, paddingVertical: theme.spacing.sm, borderRadius: theme.borderRadius.full, borderWidth: 1.5, borderColor: theme.colors.outlineVariant, backgroundColor: theme.colors.surface },
  varianteChipText: { ...theme.typography.labelLarge, color: theme.colors.onSurfaceVariant, fontWeight: '500' },
  quantitySelector: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: theme.spacing.xl },
  quantityButton: { width: 48, height: 48, borderRadius: 24, backgroundColor: theme.colors.surfaceContainer, borderWidth: 1, borderColor: theme.colors.outlineVariant, alignItems: 'center', justifyContent: 'center' },
  quantityButtonDisabled: { opacity: 0.4 },
  quantityText: { fontSize: 20, fontWeight: '700', color: theme.colors.onSurface, minWidth: 40, textAlign: 'center' },
  hintContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: theme.spacing.sm },
  hintText: { ...theme.typography.bodySmall, color: theme.colors.onSurfaceVariant },
});

export default ProductDetailScreen;
