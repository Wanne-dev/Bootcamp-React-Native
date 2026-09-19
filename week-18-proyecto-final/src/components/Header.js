import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

const Header = ({ title, showBack = false, onBack, showCart = true, cartCount = 0, onCartPress, actions, style, transparent = false }) => {
  return (
    <View style={[styles.container, transparent && styles.transparent, style]}>
      <View style={styles.content}>
        {showBack ? (
          <TouchableOpacity onPress={onBack} style={styles.backButton} activeOpacity={0.8}>
            <View style={styles.backCircle}>
              <Ionicons name="chevron-back" size={20} color={theme.colors.onSurface} />
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/logo.png')} style={styles.headerLogo} resizeMode="contain" />
          </View>
        )}
        {title ? (
          <View style={styles.titleContainer}>
            <Text style={[styles.title, transparent && styles.titleTransparent]} numberOfLines={1}>{title}</Text>
          </View>
        ) : (
          <View style={styles.spacer} />
        )}
        <View style={styles.actionsContainer}>
          {actions?.map((action, index) => (
            <TouchableOpacity key={index} onPress={action.onPress} style={styles.actionButton} activeOpacity={0.8}>
              <View style={styles.actionCircle}>
                <Ionicons name={action.icon || 'ellipsis-horizontal'} size={18} color={theme.colors.onSurface} />
              </View>
            </TouchableOpacity>
          ))}
          {showCart && (
            <TouchableOpacity onPress={onCartPress} style={styles.cartButton} activeOpacity={0.8}>
              <View style={styles.cartCircle}>
                <Ionicons name="cart" size={18} color="#FFFFFF" />
              </View>
              {cartCount > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{cartCount > 99 ? '99+' : cartCount}</Text>
                </View>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: theme.layout.headerHeight, backgroundColor: theme.colors.surface, borderBottomWidth: 1, borderBottomColor: theme.colors.divider, paddingHorizontal: theme.layout.screenPadding, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 3, zIndex: 100 },
  transparent: { backgroundColor: 'transparent', borderBottomWidth: 0, elevation: 0, shadowOpacity: 0 },
  content: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  logoContainer: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  headerLogo: { width: 36, height: 36, borderRadius: 18 },
  backButton: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  backCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: theme.colors.surfaceContainer, alignItems: 'center', justifyContent: 'center' },
  spacer: { flex: 1 },
  titleContainer: { flex: 1, paddingHorizontal: theme.spacing.sm },
  title: { ...theme.typography.titleLarge, color: theme.colors.onSurface, fontWeight: '800', textAlign: 'center' },
  titleTransparent: { color: '#FFFFFF' },
  actionsContainer: { flexDirection: 'row', alignItems: 'center', gap: theme.spacing.xs },
  actionButton: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  actionCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: theme.colors.surfaceContainer, alignItems: 'center', justifyContent: 'center' },
  cartButton: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  cartCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: theme.colors.primary, alignItems: 'center', justifyContent: 'center' },
  cartBadge: { position: 'absolute', top: -4, right: -4, minWidth: 18, height: 18, borderRadius: 9, backgroundColor: theme.colors.secondary, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4, borderWidth: 2, borderColor: '#FFFFFF' },
  cartBadgeText: { ...theme.typography.labelSmall, color: '#FFFFFF', fontSize: 10, fontWeight: '700' },
});

export default Header;
