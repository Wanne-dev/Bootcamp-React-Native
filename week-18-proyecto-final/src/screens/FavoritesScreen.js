import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import useStore from '../store';
import { Header, ProductCard, EmptyState } from '../components';
import { theme } from '../theme';
import { getProductoBySku } from '../data/productos';

const FavoritesScreen = ({ navigation }) => {
  const { 
    favorites, 
    toggleFavorite, 
    isFavorite, 
    addToCart, 
    getCartCount,
  } = useStore();

  const favoriteProducts = favorites.map(sku => getProductoBySku(sku)).filter(Boolean);

  const handleProductPress = (producto) => {
    navigation.navigate('ProductDetailFav', { producto });
  };

  const handleAddToCart = (producto) => {
    addToCart(producto);
  };

  const handleToggleFavorite = (sku) => {
    toggleFavorite(sku);
  };

  if (favoriteProducts.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Header 
          title="Favoritos" 
          showBack
          onBack={() => navigation.goBack()}
          cartCount={getCartCount()}
          onCartPress={() => navigation.navigate('CartTab')}
        />
        <View style={styles.emptyContainer}>
          <Ionicons name="heart-outline" size={64} color={theme.colors.outlineVariant} />
          <EmptyState
            title="No tienes favoritos aún"
            message="Toca el corazón en los productos que te gusten para guardarlos aquí"
            iconName="heart"
            actionTitle="Explorar productos"
            onAction={() => navigation.navigate('HomeTab')}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header 
        title="Favoritos" 
        showBack
        onBack={() => navigation.goBack()}
        cartCount={getCartCount()}
        onCartPress={() => navigation.navigate('CartTab')}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.countText}>
          {favoriteProducts.length} producto{favoriteProducts.length !== 1 ? 's' : ''} guardado{favoriteProducts.length !== 1 ? 's' : ''}
        </Text>
        {favoriteProducts.map((producto) => (
          <ProductCard
            key={producto.sku}
            producto={producto}
            onPress={handleProductPress}
            onAddToCart={handleAddToCart}
            isFavorite={isFavorite(producto.sku)}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
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
    gap: theme.spacing.md,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.layout.screenPadding,
    gap: theme.spacing.md,
  },
  countText: {
    ...theme.typography.bodyMedium,
    color: theme.colors.onSurfaceVariant,
    marginBottom: theme.spacing.sm,
  },
  bottomSpacer: {
    height: theme.spacing.xxl,
  },
});

export default FavoritesScreen;
