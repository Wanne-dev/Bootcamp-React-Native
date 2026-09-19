import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  iconName,
  style,
}) => {
  const variantStyles = styles[variant];
  const sizeStyles = styles[size];

  return (
    <View style={[styles.base, variantStyles, sizeStyles, style]}>
      {iconName && <Ionicons name={iconName} size={size === 'lg' ? 14 : 12} color={variant === 'outline' ? theme.colors.outline : theme.colors.onSurface} style={styles.icon} />}
      <Text style={[styles.text, sizeStyles.text]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.full,
  },
  default: {
    backgroundColor: theme.colors.surfaceContainerHigh,
  },
  primary: {
    backgroundColor: theme.colors.primaryContainer,
  },
  secondary: {
    backgroundColor: theme.colors.secondaryContainer,
  },
  success: {
    backgroundColor: theme.colors.secondaryContainer,
  },
  warning: {
    backgroundColor: theme.colors.tertiaryContainer,
  },
  error: {
    backgroundColor: theme.colors.errorContainer,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.outline,
  },
  sm: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    minHeight: 18,
    text: { ...theme.typography.labelSmall, fontSize: 10 },
  },
  md: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: 4,
    minHeight: 22,
    text: { ...theme.typography.labelSmall },
  },
  lg: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: 6,
    minHeight: 28,
    text: { ...theme.typography.labelMedium },
  },
  text: {
    fontWeight: '600',
  },
  icon: {
    marginRight: 4,
  },
});

export default Badge;