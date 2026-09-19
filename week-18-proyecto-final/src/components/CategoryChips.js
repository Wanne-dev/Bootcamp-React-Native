import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { categorias } from '../data/productos';

const categoryInfo = {
  todos: { label: 'Todos', color: theme.colors.primary, icon: 'grid' },
  escolar: { label: 'Escolar', color: '#1B3A5C', icon: 'school' },
  oficina: { label: 'Oficina', color: '#059669', icon: 'briefcase' },
  arte: { label: 'Arte', color: '#E8654A', icon: 'color-palette' },
  tecnologia: { label: 'Tecnologia', color: '#7C3AED', icon: 'hardware-chip' },
};

const CategoryChips = ({ selectedCategory, onCategoryChange, style }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={[styles.container, style]} style={styles.scrollView}>
      {categorias.map((categoria) => {
        const isSelected = selectedCategory === categoria.id;
        const info = categoryInfo[categoria.id] || { label: categoria.nombre, color: theme.colors.primary, icon: 'grid' };
        return (
          <TouchableOpacity key={categoria.id} onPress={() => onCategoryChange(categoria.id)} style={[styles.chip, isSelected && { backgroundColor: info.color, borderColor: info.color }]} activeOpacity={0.85}>
            <Ionicons name={info.icon} size={16} color={isSelected ? '#FFFFFF' : info.color} style={styles.chipIcon} />
            <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>{info.label}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: { marginHorizontal: -theme.layout.screenPadding, paddingHorizontal: theme.layout.screenPadding },
  container: { flexDirection: 'row', gap: theme.spacing.sm, paddingVertical: theme.spacing.sm },
  chip: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: theme.spacing.md, paddingVertical: 10, borderRadius: theme.borderRadius.full, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: theme.colors.outlineVariant, ...theme.shadows.sm },
  chipIcon: { marginRight: 6 },
  chipText: { ...theme.typography.labelLarge, color: theme.colors.onSurfaceVariant, fontWeight: '500' },
  chipTextSelected: { color: '#FFFFFF', fontWeight: '600' },
});

export default CategoryChips;
