import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

const Chip = ({
  label,
  selected = false,
  onPress,
  disabled = false,
  leadingIcon,
  trailingIcon,
  style,
  variant = 'filter',
}) => {
  const variantStyles = styles[variant];
  const selectedStyles = selected ? styles.selected : styles.unselected;
  const disabledStyles = disabled ? styles.disabled : {};

  return (
    <TouchableOpacity
      style={[styles.base, variantStyles, selectedStyles, disabledStyles, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
    >
      {leadingIcon && <Ionicons name={leadingIcon} size={14} color={selected ? theme.colors.primary : theme.colors.onSurfaceVariant} style={styles.icon} />}
      <Text style={[styles.label, selected && styles.labelSelected]}>{label}</Text>
      {trailingIcon && <Ionicons name={trailingIcon} size={14} color={selected ? theme.colors.primary : theme.colors.onSurfaceVariant} style={styles.icon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.full,
    gap: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    minHeight: 32,
  },
  filter: {
    borderWidth: 1,
  },
  input: {
    backgroundColor: theme.colors.surfaceContainer,
  },
  selected: {
    backgroundColor: theme.colors.chipSelected,
    borderColor: theme.colors.primary,
  },
  unselected: {
    backgroundColor: theme.colors.chipUnselected,
    borderColor: theme.colors.outlineVariant,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    ...theme.typography.labelMedium,
    color: theme.colors.onSurfaceVariant,
  },
  labelSelected: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
});

export default Chip;