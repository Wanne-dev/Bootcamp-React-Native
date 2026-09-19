import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl, Animated, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import useStore from '../store';
import { productos, categorias, getProductosByCategoria, searchProductos } from '../data/productos';
import { Header, SearchBar, CategoryChips, ProductCard, EmptyState } from '../components';
import { theme } from '../theme';
import { useStaggeredAnimation } from '../hooks/useAnimations';

const HomeScreen = ({ navigation }) => {
  const { 
    searchQuery, setSearchQuery, selectedCategory, setSelectedCategory,
    addToCart, isFavorite, toggleFavorite, getCartCount,
  } = useStore();
  
  const [filteredProducts, setFilteredProducts] = useState(productos);
  const [refreshing, setRefreshing] = useState(false);
  const animations = useStaggeredAnimation(filteredProducts.length, 80);

  const filterProducts = useCallback(() => {
    let results = getProductosByCategoria(selectedCategory);
    if (searchQuery.trim()) {
      results = searchProductos(searchQuery).filter(p => 
        selectedCategory === 'todos' || p.categoria === selectedCategory
      );
    }
    setFilteredProducts(results);
  }, [searchQuery, selectedCategory]);

  useEffect(() => { filterProducts(); }, [filterProducts]);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  if (filteredProducts.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Header cartCount={getCartCount()} onCartPress={() => navigation.navigate('CartTab')} />
        <View style={styles.emptyContainer}>
          <EmptyState
            title="No se encontraron productos"
            message={searchQuery 
              ? `No hay productos que coincidan con "${searchQuery}"`
              : `No hay productos en la categoria ${categorias.find(c => c.id === selectedCategory)?.nombre}`}
            iconName="search"
            actionTitle="Limpiar filtros"
            onAction={() => { setSearchQuery(''); setSelectedCategory('todos'); }}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header cartCount={getCartCount()} onCartPress={() => navigation.navigate('CartTab')} />
      <ScrollView
        style={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.bannerWrapper}>
          <Image source={require('../../assets/Banner.png')} style={styles.bannerImage} resizeMode="cover" />
          <View style={styles.searchBarOverlay}>
            <SearchBar
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Buscar productos..."
              showFilter={true}
              onFilterPress={() => navigation.navigate('Filters')}
              filterCount={searchQuery ? 1 : 0}
              transparent
            />
          </View>
        </View>
        <CategoryChips
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsCount}>
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
          </Text>
        </View>
        {filteredProducts.map((producto, index) => {
          const anim = animations[index] || { translateY: new Animated.Value(0), opacity: new Animated.Value(1) };
          return (
            <Animated.View key={producto.sku} style={{ opacity: anim.opacity, transform: [{ translateY: anim.translateY }] }}>
              <ProductCard
                producto={producto}
                onPress={(p) => navigation.navigate('ProductDetail', { producto: p })}
                onAddToCart={addToCart}
                isFavorite={isFavorite(producto.sku)}
                onToggleFavorite={toggleFavorite}
              />
            </Animated.View>
          );
        })}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  scrollView: { flex: 1 },
  content: { paddingHorizontal: theme.layout.screenPadding, paddingBottom: theme.spacing.xxl },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.layout.screenPadding,
    paddingVertical: theme.spacing.xxl,
    gap: theme.spacing.md,
  },
  bannerWrapper: {
    marginHorizontal: -theme.layout.screenPadding,
    marginTop: -1,
    marginBottom: theme.spacing.lg,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 220,
  },
  searchBarOverlay: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    paddingHorizontal: theme.layout.screenPadding,
  },
  resultsHeader: { marginBottom: theme.spacing.sm, marginTop: theme.spacing.xs },
  resultsCount: { ...theme.typography.bodyMedium, color: theme.colors.onSurfaceVariant, fontWeight: '500' },
  bottomSpacer: { height: theme.spacing.xxl },
});

export default HomeScreen;
