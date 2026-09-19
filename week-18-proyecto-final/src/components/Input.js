import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  helperText,
  leftIcon,
  rightIcon,
  onRightIconPress,
  secureTextEntry = false,
  keyboardType = 'default',
  disabled = false,
  required = false,
  style,
  inputStyle,
  containerStyle,
  autoCapitalize = 'sentences',
  returnKeyType = 'done',
  onSubmitEditing,
  maxLength,
  multiline = false,
  numberOfLines = 1,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const hasError = !!error;

  return (
    <View style={[styles.container, hasError && styles.containerError, disabled && styles.containerDisabled, containerStyle]}>
      {label && (
        <Text style={[styles.label, required && styles.labelRequired, isFocused && styles.labelFocused, hasError && styles.labelError]}>
          {label}
          {required && <Text style={styles.asterisk}> *</Text>}
        </Text>
      )}
      <View style={[styles.inputWrapper, isFocused && styles.inputWrapperFocused, hasError && styles.inputWrapperError, disabled && styles.inputWrapperDisabled]}>
        {leftIcon && <Ionicons name={leftIcon} size={20} color={theme.colors.onSurfaceVariant} style={styles.icon} />}
        <TextInput
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.outline}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          disabled={disabled}
          autoCapitalize={autoCapitalize}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress} style={styles.iconWrapper}>
            <Ionicons name={rightIcon} size={20} color={theme.colors.onSurfaceVariant} />
          </TouchableOpacity>
        )}
      </View>
      {(error || helperText) && (
        <Text style={[styles.helperText, error && styles.errorText]}>
          {error || helperText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.xs,
    width: '100%',
  },
  containerError: {},
  containerDisabled: { opacity: 0.6 },
  label: {
    ...theme.typography.labelMedium,
    color: theme.colors.onSurfaceVariant,
  },
  labelRequired: {},
  labelFocused: { color: theme.colors.primary },
  labelError: { color: theme.colors.error },
  asterisk: { color: theme.colors.error },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    minHeight: theme.layout.inputHeight,
  },
  inputWrapperFocused: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
    ...theme.shadows.sm,
  },
  inputWrapperError: {
    borderColor: theme.colors.error,
    borderWidth: 2,
  },
  inputWrapperDisabled: {
    backgroundColor: theme.colors.surfaceContainer,
    borderColor: theme.colors.outlineVariant,
  },
  input: {
    flex: 1,
    ...theme.typography.bodyLarge,
    color: theme.colors.onSurface,
    paddingVertical: 0,
  },
  icon: {
    marginRight: theme.spacing.xs,
  },
  iconWrapper: {
    padding: theme.spacing.xs,
  },
  helperText: {
    ...theme.typography.bodySmall,
    color: theme.colors.onSurfaceVariant,
  },
  errorText: {
    color: theme.colors.error,
  },
});

export default Input;