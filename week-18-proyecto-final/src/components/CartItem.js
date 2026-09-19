import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { formatPrice, getProductoBySku } from '../data/productos';

const catColors = { escolar: '#1B3A5C', oficina: '#059669', arte: '#E8654A', tecnologia: '#7C3AED' };
const catIcons = { escolar: 'school', oficina: 'briefcase', arte: 'color-palette', tecnologia: 'hardware-chip' };

const CartItem = ({ item, onUpdateQuantity, onRemove, onPress }) => {
  const varianteText = item.variante ? Object.values(item.variante).join(', ') : '';
  const catColor = catColors[item.categoria] || '#1B3A5C';
  const producto = getProductoBySku(item.sku);
  const imagen = producto?.imagen || null;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.imagePlaceholder, { backgroundColor: catColor + '10' }]}>
          {imagen ? (
            <Image source={imagen} style={styles.productImage} resizeMode="cover" />
          ) : (
            <Ionicons name={catIcons[item.categoria] || 'cube'} size={24} color={catColor} />
          )}
        </View>
        <View style={styles.details}>
          <View style={styles.header}>
            <Text style={styles.name} numberOfLines={1}>{item.nombre}</Text>
            <TouchableOpacity onPress={() => onRemove(item.sku, item.variante)} style={styles.removeButton}>
              <Ionicons name="close" size={16} color={theme.colors.onSurfaceVariant} />
            </TouchableOpacity>
          </View>
          {varianteText ? <Text style={styles.variant}>{varianteText}</Text> : null}
          <View style={styles.priceRow}>
            <Text style={styles.price}>{formatPrice(item.precio)}</Text>
            <Text style={styles.subtotal}> = {formatPrice(item.precio * item.cantidad)}</Text>
          </View>
        </View>
        <View style={styles.quantityControls}>
          <TouchableOpacity onPress={() => onUpdateQuantity(item.sku, item.variante, item.cantidad - 1)} disabled={item.cantidad <= 1} style={[styles.quantityButton, item.cantidad <= 1 && styles.quantityButtonDisabled]} activeOpacity={0.7}>
            <Ionicons name="remove" size={16} color={theme.colors.onSurface} />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.cantidad}</Text>
          <TouchableOpacity onPress={() => onUpdateQuantity(item.sku, item.variante, item.cantidad + 1)} disabled={item.cantidad >= item.stock} style={[styles.quantityButton, item.cantidad >= item.stock && styles.quantityButtonDisabled]} activeOpacity={0.7}>
            <Ionicons name="add" size={16} color={theme.colors.onSurface} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: theme.spacing.sm },
  content: { flexDirection: 'row', alignItems: 'center', gap: theme.spacing.md },
  imagePlaceholder: { width: 60, height: 60, borderRadius: theme.borderRadius.md, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  productImage: { width: '100%', height: '100%' },
  details: { flex: 1, gap: 4 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  name: { ...theme.typography.bodyMedium, color: theme.colors.onSurface, fontWeight: '500', flex: 1, marginRight: theme.spacing.sm },
  removeButton: { width: 28, height: 28, borderRadius: 14, backgroundColor: theme.colors.surfaceContainer, alignItems: 'center', justifyContent: 'center' },
  variant: { ...theme.typography.bodySmall, color: theme.colors.onSurfaceVariant },
  priceRow: { flexDirection: 'row', alignItems: 'center' },
  price: { ...theme.typography.titleSmall, color: theme.colors.primary, fontWeight: '600' },
  subtotal: { ...theme.typography.bodySmall, color: theme.colors.onSurfaceVariant },
  quantityControls: { flexDirection: 'row', alignItems: 'center', gap: theme.spacing.xs, backgroundColor: theme.colors.surfaceContainer, borderRadius: theme.borderRadius.full, paddingHorizontal: theme.spacing.xs, paddingVertical: 4 },
  quantityButton: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
  quantityButtonDisabled: { opacity: 0.4 },
  quantityText: { ...theme.typography.bodyMedium, color: theme.colors.onSurface, fontWeight: '600', minWidth: 24, textAlign: 'center' },
  divider: { height: 1, backgroundColor: theme.colors.divider, marginTop: theme.spacing.sm },
});

export default CartItem;
