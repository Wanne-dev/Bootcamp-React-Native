import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import useStore from '../store';
import { Header, Button, Card, Chip } from '../components';
import { theme } from '../theme';
import { categorias } from '../data/productos';

const categoryIcons = {
  todos: 'grid',
  escolar: 'school',
  oficina: 'briefcase',
  arte: 'color-palette',
  tecnologia: 'hardware-chip',
};

const FiltersScreen = ({ navigation }) => {
  const { 
    selectedCategory, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery,
    getCartCount,
  } = useStore();
  
  const [priceRange, setPriceRange] = React.useState({ min: 0, max: 200000 });
  const [onlyAvailable, setOnlyAvailable] = React.useState(true);
  const [sortBy, setSortBy] = React.useState('relevance');

  const sortOptions = [
    { id: 'relevance', label: 'Relevancia' },
    { id: 'price_asc', label: 'Precio: menor a mayor' },
    { id: 'price_desc', label: 'Precio: mayor a menor' },
    { id: 'name_asc', label: 'Nombre A-Z' },
    { id: 'name_desc', label: 'Nombre Z-A' },
    { id: 'newest', label: 'Más recientes' },
  ];

  const clearFilters = () => {
    setSelectedCategory('todos');
    setSearchQuery('');
    setPriceRange({ min: 0, max: 200000 });
    setOnlyAvailable(true);
    setSortBy('relevance');
  };

  const hasActiveFilters = selectedCategory !== 'todos' || searchQuery || priceRange.min > 0 || priceRange.max < 200000 || !onlyAvailable || sortBy !== 'relevance';

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title="Filtros"
        showBack
        onBack={() => navigation.goBack()}
        cartCount={getCartCount()}
        onCartPress={() => navigation.navigate('CartTab')}
        actions={hasActiveFilters ? [{ icon: 'close-circle', onPress: clearFilters }] : []}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Card variant="elevated" style={styles.sectionCard} padding="md" borderRadius="lg">
          <View style={styles.sectionHeader}>
            <Ionicons name="pricetag" size={18} color={theme.colors.onSurface} />
            <Text style={styles.sectionTitle}>Categoría</Text>
          </View>
          <View style={styles.chipsContainer}>
            {categorias.map((cat) => (
              <Chip
                key={cat.id}
                label={cat.nombre}
                selected={selectedCategory === cat.id}
                onPress={() => setSelectedCategory(cat.id)}
                leadingIcon={categoryIcons[cat.id]}
                variant="filter"
                style={styles.filterChip}
              />
            ))}
          </View>
        </Card>

        <Card variant="elevated" style={styles.sectionCard} padding="md" borderRadius="lg">
          <View style={styles.sectionHeader}>
            <Ionicons name="cash" size={18} color={theme.colors.onSurface} />
            <Text style={styles.sectionTitle}>Rango de precio</Text>
          </View>
          <View style={styles.priceRangeContainer}>
            <View style={styles.priceInputGroup}>
              <Text style={styles.priceLabel}>Mín</Text>
              <Text style={styles.priceValue}>
                ${priceRange.min.toLocaleString('es-CO')}
              </Text>
            </View>
            <View style={styles.priceInputGroup}>
              <Text style={styles.priceLabel}>Máx</Text>
              <Text style={styles.priceValue}>
                ${priceRange.max.toLocaleString('es-CO')}
              </Text>
            </View>
          </View>
          <View style={styles.sliderContainer}>
            <View style={styles.sliderTrack}>
              <View style={[
                styles.sliderFill,
                { width: `${(priceRange.max - priceRange.min) / 200000 * 100}%` }
              ]} />
            </View>
          </View>
        </Card>

        <Card variant="elevated" style={styles.sectionCard} padding="md" borderRadius="lg">
          <View style={styles.sectionHeader}>
            <Ionicons name="checkmark-circle" size={18} color={theme.colors.onSurface} />
            <Text style={styles.sectionTitle}>Disponibilidad</Text>
          </View>
          <View style={styles.toggleRow}>
            <Text style={styles.toggleLabel}>Solo productos disponibles</Text>
            <Switch
              value={onlyAvailable}
              onValueChange={setOnlyAvailable}
              trackColor={{ false: theme.colors.outlineVariant, true: theme.colors.primary }}
              thumbColor={onlyAvailable ? '#FFFFFF' : theme.colors.outline}
            />
          </View>
        </Card>

        <Card variant="elevated" style={styles.sectionCard} padding="md" borderRadius="lg">
          <View style={styles.sectionHeader}>
            <Ionicons name="swap-vertical" size={18} color={theme.colors.onSurface} />
            <Text style={styles.sectionTitle}>Ordenar por</Text>
          </View>
          <View style={styles.sortOptions}>
            {sortOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => setSortBy(option.id)}
                style={[
                  styles.sortOption,
                  sortBy === option.id && styles.sortOptionSelected
                ]}
                activeOpacity={0.85}
              >
                <Text style={[
                  styles.sortOptionText,
                  sortBy === option.id && styles.sortOptionTextSelected
                ]}>
                  {option.label}
                </Text>
                {sortBy === option.id && (
                  <Ionicons name="checkmark" size={18} color={theme.colors.primary} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </Card>

        {hasActiveFilters && (
          <Button
            title="Limpiar todos los filtros"
            onPress={clearFilters}
            variant="outline"
            iconName="refresh"
            fullWidth
            style={styles.clearButton}
          />
        )}
        
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
    paddingHorizontal: theme.layout.screenPadding,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xxl,
    gap: theme.spacing.lg,
  },
  sectionCard: {},
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    ...theme.typography.titleMedium,
    color: theme.colors.onSurface,
    fontWeight: '600',
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  filterChip: {
    minWidth: 'auto',
  },
  priceRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  priceInputGroup: {
    flex: 1,
  },
  priceLabel: {
    ...theme.typography.labelSmall,
    color: theme.colors.onSurfaceVariant,
    marginBottom: theme.spacing.xs,
  },
  priceValue: {
    ...theme.typography.titleMedium,
    color: theme.colors.onSurface,
    fontWeight: '600',
  },
  sliderContainer: {
    height: 40,
  },
  sliderTrack: {
    height: 4,
    backgroundColor: theme.colors.outlineVariant,
    borderRadius: 2,
    position: 'relative',
  },
  sliderFill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleLabel: {
    ...theme.typography.bodyLarge,
    color: theme.colors.onSurface,
  },
  sortOptions: {
    gap: theme.spacing.sm,
  },
  sortOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.surfaceContainer,
  },
  sortOptionSelected: {
    backgroundColor: theme.colors.primaryContainer,
  },
  sortOptionText: {
    ...theme.typography.bodyLarge,
    color: theme.colors.onSurface,
  },
  sortOptionTextSelected: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
  clearButton: {
    marginTop: theme.spacing.md,
  },
  bottomSpacer: {
    height: theme.spacing.xxl,
  },
});

export default FiltersScreen;
