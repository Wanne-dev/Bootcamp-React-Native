export const colors = {
  primary: '#E8654A',
  primaryLight: '#F08B72',
  primaryDark: '#D14E33',
  primaryContainer: '#FFF0EC',
  secondary: '#1B3A5C',
  secondaryLight: '#2A5580',
  secondaryContainer: '#E8F0F8',
  tertiary: '#FFB366',
  tertiaryContainer: '#FFF8F0',
  error: '#DC2626',
  errorContainer: '#FEE2E2',
  surface: '#FFFFFF',
  surfaceVariant: '#F9FAFB',
  surfaceContainer: '#F5F7FA',
  surfaceContainerHigh: '#E8ECF0',
  outline: '#94A3B8',
  outlineVariant: '#E8ECF0',
  onPrimary: '#FFFFFF',
  onSecondary: '#FFFFFF',
  onSurface: '#1A1A2E',
  onSurfaceVariant: '#6B7280',
  onError: '#FFFFFF',
  background: '#FAFBFC',
  backdrop: 'rgba(15, 23, 42, 0.5)',
  shadow: '#000000',
  success: '#059669',
  warning: '#D97706',
  divider: '#F3F4F6',
  chipSelected: '#FFF0EC',
  chipUnselected: '#F9FAFB',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

export const typography = {
  displayLarge: { fontSize: 57, fontWeight: '700', lineHeight: 64, letterSpacing: -0.25 },
  displayMedium: { fontSize: 45, fontWeight: '700', lineHeight: 52 },
  displaySmall: { fontSize: 36, fontWeight: '700', lineHeight: 44 },
  headlineLarge: { fontSize: 32, fontWeight: '700', lineHeight: 40, fontFamily: 'Georgia' },
  headlineMedium: { fontSize: 28, fontWeight: '700', lineHeight: 36, fontFamily: 'Georgia' },
  headlineSmall: { fontSize: 24, fontWeight: '600', lineHeight: 32, fontFamily: 'Georgia' },
  titleLarge: { fontSize: 20, fontWeight: '700', lineHeight: 28, letterSpacing: 0.15 },
  titleMedium: { fontSize: 16, fontWeight: '600', lineHeight: 24, letterSpacing: 0.15 },
  titleSmall: { fontSize: 14, fontWeight: '600', lineHeight: 20, letterSpacing: 0.1 },
  bodyLarge: { fontSize: 16, fontWeight: '400', lineHeight: 24, letterSpacing: 0.5 },
  bodyMedium: { fontSize: 14, fontWeight: '400', lineHeight: 20, letterSpacing: 0.25 },
  bodySmall: { fontSize: 12, fontWeight: '400', lineHeight: 16, letterSpacing: 0.4 },
  labelLarge: { fontSize: 14, fontWeight: '600', lineHeight: 20, letterSpacing: 0.1 },
  labelMedium: { fontSize: 12, fontWeight: '500', lineHeight: 16, letterSpacing: 0.5 },
  labelSmall: { fontSize: 11, fontWeight: '500', lineHeight: 16, letterSpacing: 0.5 },
};

export const shadows = {
  sm: { shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.04, shadowRadius: 3, elevation: 1 },
  md: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 8, elevation: 3 },
  lg: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 12, elevation: 5 },
  xl: { shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.1, shadowRadius: 16, elevation: 8 },
};

export const categoryColors = {
  escolar: { bg: '#1B3A5C', text: '#FFFFFF', light: '#F0F4F8', abbr: 'ESC' },
  oficina: { bg: '#059669', text: '#FFFFFF', light: '#ECFDF5', abbr: 'OFC' },
  arte: { bg: '#E8654A', text: '#FFFFFF', light: '#FFF0EC', abbr: 'ART' },
  tecnologia: { bg: '#7C3AED', text: '#FFFFFF', light: '#F5F3FF', abbr: 'TEC' },
};

export const layout = {
  screenPadding: spacing.md,
  cardPadding: spacing.md,
  headerHeight: 56,
  tabBarHeight: 72,
  searchBarHeight: 48,
  buttonHeight: 48,
  inputHeight: 48,
};

export const theme = {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
  categoryColors,
  layout,
};

export default theme;
