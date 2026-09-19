import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import useStore from '../store';
import { Header, CartItem, Button, EmptyState, Card } from '../components';
import { theme } from '../theme';
import { formatPrice } from '../data/productos';

const CartScreen = ({ navigation }) => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    getFormattedCartTotal, 
    getCartCount,
    clearCart,
  } = useStore();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    alert(`¡Pedido confirmado!\nTotal: ${getFormattedCartTotal()}\n\nGracias por tu compra en Papelería Digital`);
    clearCart();
    navigation.navigate('HomeTab');
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 100000 ? 0 : 8900;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Header 
          title="Mi Carrito" 
          showBack
          onBack={() => navigation.goBack()}
          cartCount={getCartCount()}
          onCartPress={() => {}}
        />
        <View style={styles.emptyContainer}>
          <Ionicons name="cart-outline" size={64} color={theme.colors.outlineVariant} />
          <EmptyState
            title="Tu carrito está vacío"
            message="Agrega productos increíbles para comenzar tu compra"
            actionTitle="Ir a comprar"
            onAction={() => navigation.navigate('HomeTab')}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header 
        title="Mi Carrito" 
        showBack
        onBack={() => navigation.goBack()}
        cartCount={getCartCount()}
        onCartPress={() => {}}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.itemsContainer}>
          {cart.map((item, index) => (
            <CartItem
              key={`${item.sku}-${index}`}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
              onPress={() => {}}
            />
          ))}
        </View>
        
        <Card variant="elevated" style={styles.summaryCard} padding="lg" borderRadius="lg">
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal ({cart.reduce((a, b) => a + b.cantidad, 0)} items)</Text>
            <Text style={styles.summaryValue}>{formatPrice(subtotal)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Envío</Text>
            <Text style={[
              styles.summaryValue, 
              shipping === 0 && styles.summaryValueFree
            ]}>
              {shipping === 0 ? 'Gratis' : formatPrice(shipping)}
            </Text>
          </View>
          {shipping > 0 && (
            <View style={styles.shippingInfoContainer}>
              <Ionicons name="information-circle" size={14} color={theme.colors.primary} />
              <Text style={styles.shippingInfo}>
                Envío gratis en compras mayores a $100.000
              </Text>
            </View>
          )}
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>{formatPrice(total)}</Text>
          </View>
        </Card>
        
        <Button
          title={`Pagar ${formatPrice(total)}`}
          onPress={handleCheckout}
          fullWidth
          size="lg"
          variant="primary"
          iconName="card"
          style={styles.checkoutButton}
        />
        
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.layout.screenPadding,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xxl,
    gap: theme.spacing.lg,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.layout.screenPadding,
    gap: theme.spacing.md,
  },
  itemsContainer: {
    gap: 0,
  },
  summaryCard: {
    marginTop: theme.spacing.sm,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
  },
  summaryLabel: {
    ...theme.typography.bodyLarge,
    color: theme.colors.onSurfaceVariant,
  },
  summaryValue: {
    ...theme.typography.titleMedium,
    color: theme.colors.onSurface,
    fontWeight: '600',
  },
  summaryValueFree: {
    color: theme.colors.success,
  },
  shippingInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: -theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  shippingInfo: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.divider,
    marginVertical: theme.spacing.sm,
  },
  totalLabel: {
    ...theme.typography.titleLarge,
    color: theme.colors.onSurface,
    fontWeight: '700',
  },
  totalValue: {
    fontSize: 22,
    color: theme.colors.primary,
    fontWeight: '800',
  },
  checkoutButton: {
    marginTop: theme.spacing.md,
  },
  bottomSpacer: {
    height: theme.spacing.xxl,
  },
});

export default CartScreen;
