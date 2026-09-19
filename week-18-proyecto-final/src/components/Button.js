import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

const Button = ({ title, onPress, variant = 'primary', size = 'md', disabled = false, loading = false, fullWidth = false, iconName, style, titleStyle }) => {
  const isDisabledStyle = disabled || loading;
  const textColor = variant === 'primary' || variant === 'danger'
    ? '#FFFFFF'
    : disabled
      ? theme.colors.onSurfaceVariant
      : theme.colors.primary;

  return (
    <TouchableOpacity
      style={[styles.base, styles[variant], styles[size], fullWidth && styles.fullWidth, isDisabledStyle && styles.disabled, style]}
      onPress={onPress}
      disabled={isDisabledStyle}
      activeOpacity={0.85}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#FFFFFF' : theme.colors.primary} size="small" />
      ) : (
        <>
          {iconName && <Ionicons name={iconName} size={size === 'lg' ? 20 : 16} color={textColor} style={styles.icon} />}
          <Text style={[styles.title, styles[size + 'Title'], { color: textColor }, titleStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: theme.borderRadius.full, gap: theme.spacing.xs },
  primary: { backgroundColor: theme.colors.primary, ...theme.shadows.sm },
  secondary: { backgroundColor: theme.colors.secondaryContainer, borderWidth: 1, borderColor: theme.colors.secondary },
  outline: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: theme.colors.primary },
  ghost: { backgroundColor: theme.colors.surfaceContainer, borderWidth: 1, borderColor: theme.colors.outlineVariant },
  danger: { backgroundColor: theme.colors.error },
  disabled: { opacity: 0.6 },
  sm: { paddingHorizontal: theme.spacing.md, paddingVertical: theme.spacing.xs, minHeight: 36 },
  md: { paddingHorizontal: theme.spacing.lg, paddingVertical: theme.spacing.sm, minHeight: 44 },
  lg: { paddingHorizontal: theme.spacing.xl, paddingVertical: theme.spacing.md, minHeight: 52 },
  fullWidth: { width: '100%' },
  title: { fontWeight: '600', fontSize: 14 },
  smTitle: { fontSize: 12 },
  mdTitle: { fontSize: 14 },
  lgTitle: { fontSize: 16 },
  icon: { marginRight: 4 },
});

export default Button;
