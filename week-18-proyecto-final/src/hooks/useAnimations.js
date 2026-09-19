import { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

export const useFadeIn = (duration = 300, delay = 0) => {
  const opacity = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start();
    }, delay);
    
    return () => clearTimeout(timer);
  }, [opacity, duration, delay]);
  
  return opacity;
};

export const useSlideUp = (duration = 300, delay = 0, initialY = 30) => {
  const translateY = useRef(new Animated.Value(initialY)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
      ]).start();
    }, delay);
    
    return () => clearTimeout(timer);
  }, [translateY, opacity, duration, delay]);
  
  return { translateY, opacity };
};

export const useStaggeredAnimation = (count, delayBetween = 100) => {
  const animations = useRef(
    Array.from({ length: count }, () => ({
      translateY: new Animated.Value(30),
      opacity: new Animated.Value(0),
    }))
  ).current;
  
  useEffect(() => {
    animations.forEach((anim, index) => {
      const timer = setTimeout(() => {
        Animated.parallel([
          Animated.timing(anim.translateY, {
            toValue: 0,
            duration: 400,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: false,
          }),
          Animated.timing(anim.opacity, {
            toValue: 1,
            duration: 300,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: false,
          }),
        ]).start();
      }, index * delayBetween);
      
      return () => clearTimeout(timer);
    });
  }, [animations, delayBetween]);
  
  return animations;
};

export const useSpring = (initialValue = 0) => {
  const value = useRef(new Animated.Value(initialValue)).current;
  
  const animate = (toValue, config = {}) => {
    return Animated.spring(value, {
      toValue,
      damping: 15,
      stiffness: 150,
      useNativeDriver: false,
      ...config,
    }).start();
  };
  
  return { value, animate };
};

export const usePressAnimation = () => {
  const scale = useRef(new Animated.Value(1)).current;
  
  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.96,
      damping: 20,
      stiffness: 200,
      useNativeDriver: false,
    }).start();
  };
  
  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      damping: 15,
      stiffness: 150,
      useNativeDriver: false,
    }).start();
  };
  
  return { scale, onPressIn, onPressOut };
};