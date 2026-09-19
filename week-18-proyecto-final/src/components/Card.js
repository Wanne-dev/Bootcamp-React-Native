import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

const Card = ({
  children,
  style,
  variant = 'elevated',
  onPress,
  padding = 'md',
  borderRadius = 'md',
}) => {
  const variantStyles = styles[variant];
  const paddingStyles = styles[`padding_${padding}`];
  const radiusStyles = styles[`radius_${borderRadius}`];

  const Content = onPress ? TouchableOpacity : View;

  return (
    <Content
      style={[styles.base, variantStyles, paddingStyles, radiusStyles, style]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {children}
    </Content>
  );
};

const CardHeader = ({ title, subtitle, action, style }) => (
  <View style={[styles.header, style]}>
    <View style={styles.headerContent}>
      <Text style={styles.headerTitle}>{title}</Text>
      {subtitle && <Text style={styles.headerSubtitle}>{subtitle}</Text>}
    </View>
    {action}
  </View>
);

const CardContent = ({ children, style }) => (
  <View style={[styles.content, style]}>{children}</View>
);

const CardFooter = ({ children, style }) => (
  <View style={[styles.footer, style]}>{children}</View>
);

const styles = StyleSheet.create({
  base: {
    backgroundColor: theme.colors.surface,
  },
  elevated: {
    ...theme.shadows.sm,
  },
  outlined: {
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
  },
  filled: {
    backgroundColor: theme.colors.surfaceContainer,
  },
  padding_xs: { padding: theme.spacing.xs },
  padding_sm: { padding: theme.spacing.sm },
  padding_md: { padding: theme.spacing.md },
  padding_lg: { padding: theme.spacing.lg },
  padding_none: { padding: 0 },
  radius_xs: { borderRadius: theme.borderRadius.xs },
  radius_sm: { borderRadius: theme.borderRadius.sm },
  radius_md: { borderRadius: theme.borderRadius.md },
  radius_lg: { borderRadius: theme.borderRadius.lg },
  radius_xl: { borderRadius: theme.borderRadius.xl },
  radius_full: { borderRadius: theme.borderRadius.full },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  headerContent: { flex: 1 },
  headerTitle: {
    ...theme.typography.titleLarge,
    color: theme.colors.onSurface,
  },
  headerSubtitle: {
    ...theme.typography.bodySmall,
    color: theme.colors.onSurfaceVariant,
    marginTop: theme.spacing.xs,
  },
  content: {},
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.md,
    paddingTop: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.divider,
  },
});

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
