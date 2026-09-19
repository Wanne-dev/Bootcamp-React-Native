import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import Button from './Button';

const EmptyState = ({
  title = 'No hay contenido',
  message = 'Intenta cambiar los filtros o busca algo diferente',
  iconName = 'file-tray-outline',
  actionTitle,
  onAction,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconCircle}>
        <Ionicons name={iconName} size={32} color={theme.colors.primary} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      {actionTitle && onAction && (
        <Button title={actionTitle} onPress={onAction} variant="primary" style={styles.actionButton} />
      )}
    </View>
  );
};

const Loading = ({ message = 'Cargando...', size = 'large', style }) => {
  return (
    <View style={[styles.loadingContainer, style]}>
      <ActivityIndicator size={size} color={theme.colors.primary} />
      {message && <Text style={styles.loadingText}>{message}</Text>}
    </View>
  );
};

const ErrorState = ({
  title = 'Algo salio mal',
  message = 'Intenta de nuevo mas tarde',
  onRetry,
  retryTitle = 'Reintentar',
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.iconCircle, styles.iconCircleError]}>
        <Ionicons name="warning" size={32} color={theme.colors.error} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry && (
        <Button title={retryTitle} onPress={onRetry} variant="primary" style={styles.actionButton} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xl,
    gap: theme.spacing.md,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.md,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: theme.colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleError: {
    backgroundColor: theme.colors.errorContainer,
  },
  title: {
    ...theme.typography.headlineSmall,
    color: theme.colors.onSurface,
    textAlign: 'center',
    fontWeight: '700',
  },
  message: {
    ...theme.typography.bodyLarge,
    color: theme.colors.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 24,
  },
  loadingText: {
    ...theme.typography.bodyMedium,
    color: theme.colors.onSurfaceVariant,
  },
  actionButton: {
    marginTop: theme.spacing.sm,
    minWidth: 200,
  },
});

export { EmptyState, Loading, ErrorState };