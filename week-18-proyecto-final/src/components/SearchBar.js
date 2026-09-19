import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

const SearchBar = ({ value, onChangeText, onSubmitEditing, onFocus, onBlur, placeholder = 'Buscar productos...', showFilter = false, onFilterPress, filterCount = 0, transparent = false, style }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.wrapper, transparent && styles.wrapperTransparent, isFocused && styles.wrapperFocused]}>
        <Ionicons name="search" size={18} color={transparent ? '#FFFFFF' : theme.colors.onSurfaceVariant} style={styles.searchIcon} />
        <TextInput style={[styles.input, transparent && styles.inputTransparent]} value={value} onChangeText={onChangeText} onFocus={() => { setIsFocused(true); onFocus?.(); }} onBlur={() => { setIsFocused(false); onBlur?.(); }} onSubmitEditing={onSubmitEditing} placeholder={placeholder} placeholderTextColor={transparent ? 'rgba(255,255,255,0.7)' : theme.colors.outline} autoCapitalize="none" autoCorrect={false} />
        {value.length > 0 && (
          <TouchableOpacity onPress={() => { onChangeText(''); onSubmitEditing?.(); }} style={styles.clearButton} activeOpacity={0.7}>
            <Ionicons name="close-circle" size={20} color={transparent ? 'rgba(255,255,255,0.7)' : theme.colors.onSurfaceVariant} />
          </TouchableOpacity>
        )}
      </View>
      {showFilter && (
        <TouchableOpacity onPress={onFilterPress} style={[styles.filterButton, transparent && styles.filterButtonTransparent, filterCount > 0 && styles.filterButtonActive]} activeOpacity={0.85}>
          <Ionicons name="options" size={18} color={filterCount > 0 ? '#FFFFFF' : transparent ? '#FFFFFF' : theme.colors.primary} />
          {filterCount > 0 && <View style={styles.filterBadge}><Text style={styles.filterBadgeText}>{filterCount}</Text></View>}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: theme.spacing.sm, width: '100%' },
  wrapper: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: theme.colors.outlineVariant, borderRadius: theme.borderRadius.full, paddingHorizontal: theme.spacing.md, height: theme.layout.searchBarHeight, ...theme.shadows.sm },
  wrapperTransparent: { backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: 'rgba(255, 255, 255, 0.5)' },
  wrapperFocused: { borderColor: theme.colors.primary, borderWidth: 1.5 },
  searchIcon: { marginRight: theme.spacing.sm },
  input: { flex: 1, ...theme.typography.bodyLarge, color: theme.colors.onSurface, height: '100%' },
  inputTransparent: { color: '#FFFFFF' },
  clearButton: { padding: theme.spacing.xs },
  filterButton: { width: 48, height: theme.layout.searchBarHeight, borderRadius: theme.borderRadius.full, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: theme.colors.outlineVariant, alignItems: 'center', justifyContent: 'center', position: 'relative', ...theme.shadows.sm },
  filterButtonTransparent: { backgroundColor: 'rgba(255, 255, 255, 0.9)', borderColor: 'rgba(255, 255, 255, 0.5)' },
  filterButtonActive: { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary },
  filterBadge: { position: 'absolute', top: -4, right: -4, minWidth: 18, height: 18, borderRadius: 9, backgroundColor: theme.colors.secondary, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4, borderWidth: 2, borderColor: '#FFFFFF' },
  filterBadgeText: { ...theme.typography.labelSmall, color: '#FFFFFF', fontSize: 10, fontWeight: '700' },
});

export default SearchBar;
