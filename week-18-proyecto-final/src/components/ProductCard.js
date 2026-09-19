import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import Card from './Card';
import Badge from './Badge';
import { formatPrice } from '../data/productos';

const categoryIcons = {
  escolar: 'school',
  oficina: 'briefcase',
  arte: 'color-palette',
  tecnologia: 'hardware-chip',
};

const ProductCard = ({ producto, onPress, onAddToCart, showAddButton = true, isFavorite = false, onToggleFavorite }) => {
  const cat = theme.categoryColors[producto.categoria] || theme.categoryColors.escolar;

  return (
    <TouchableOpacity onPress={() => onPress?.(producto)} activeOpacity={0.95} style={styles.cardWrapper}>
      <Card variant="elevated" style={styles.card} padding="none" borderRadius="lg">
        <View style={styles.imageContainer}>
          {producto.imagen ? (
            <Image source={producto.imagen} style={styles.productImage} resizeMode="cover" />
          ) : (
            <View style={[styles.iconCircle, { backgroundColor: cat.light }]}>
              <Ionicons name={categoryIcons[producto.categoria] || 'cube'} size={32} color={cat.bg} />
            </View>
          )}
          <TouchableOpacity onPress={() => onToggleFavorite?.(producto.sku)} style={styles.favButton} activeOpacity={0.8}>
            <View style={[styles.favCircle, isFavorite && styles.favCircleActive]}>
              <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={16} color={isFavorite ? '#FFFFFF' : '#6B7280'} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.nameRow}>
            <Text style={styles.name} numberOfLines={2}>{producto.nombre}</Text>
          </View>
          <Text style={styles.price}>{formatPrice(producto.precio)}</Text>
          <View style={styles.footer}>
            <Text style={styles.unit}>/{producto.unidad}</Text>
            {showAddButton && (
              <TouchableOpacity
                onPress={(e) => { e.stopPropagation(); onAddToCart?.(producto); }}
                disabled={producto.stock <= 0}
                style={[styles.addButton, producto.stock <= 0 && styles.addButtonDisabled]}
                activeOpacity={0.8}
              >
                <Ionicons name={producto.stock > 0 ? 'add' : 'close-circle'} size={18} color="#FFFFFF" />
              </TouchableOpacity>
            )}
          </View>
          {producto.stock > 0 && producto.stock <= 10 && (
            <Badge variant="warning" size="sm" iconName="alert-circle" style={styles.stockBadge}>
              Solo {producto.stock}
            </Badge>
          )}
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: { marginBottom: theme.spacing.md },
  card: { overflow: 'hidden', ...theme.shadows.sm },
  imageContainer: { height: 160, position: 'relative', backgroundColor: theme.colors.surfaceVariant },
  productImage: { width: '100%', height: '100%' },
  iconCircle: { width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' },
  favButton: { position: 'absolute', top: theme.spacing.sm, right: theme.spacing.sm },
  favCircle: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', ...theme.shadows.sm },
  favCircleActive: { backgroundColor: theme.colors.primary },
  content: { padding: theme.spacing.md, gap: 4 },
  nameRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  name: { ...theme.typography.bodyMedium, color: theme.colors.onSurface, fontWeight: '500', flex: 1, lineHeight: 18 },
  price: { fontSize: 18, fontWeight: '700', color: theme.colors.primary, marginTop: 4 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: theme.spacing.xs },
  unit: { ...theme.typography.bodySmall, color: theme.colors.onSurfaceVariant },
  addButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: theme.colors.primary, alignItems: 'center', justifyContent: 'center', ...theme.shadows.sm },
  addButtonDisabled: { backgroundColor: theme.colors.surfaceContainerHigh },
  stockBadge: { alignSelf: 'flex-start', marginTop: 4 },
});

export default ProductCard;
