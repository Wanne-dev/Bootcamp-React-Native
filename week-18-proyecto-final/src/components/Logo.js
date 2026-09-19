import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Logo = ({ size = 'md', showText = true, style }) => {
  const sizes = {
    sm: { img: 48, text: 16, sub: 10 },
    md: { img: 72, text: 22, sub: 12 },
    lg: { img: 120, text: 32, sub: 16 },
  };
  const s = sizes[size] || sizes.md;

  return (
    <View style={[styles.container, style]}>
      <Image source={require('../../assets/logo.png')} style={[styles.image, { width: s.img, height: s.img }]} resizeMode="contain" />
      {showText && (
        <View style={styles.textContainer}>
          <Text style={[styles.titleText, { fontSize: s.text }]}>PAPELERIA</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', gap: 4 },
  image: { borderRadius: 999 },
  textContainer: { alignItems: 'center' },
  titleText: { fontFamily: 'Georgia', fontWeight: '700', color: '#1B3A5C', letterSpacing: 2 },
});

export default Logo;
