import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { HomeScreen, ProductDetailScreen, CartScreen, FiltersScreen, FavoritesScreen } from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabIcon = ({ iconName, color, focused }) => (
  <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
    <Ionicons name={iconName} size={22} color={focused ? '#FFFFFF' : color} />
  </View>
);

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: theme.colors.background } }}>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    <Stack.Screen name="Filters" component={FiltersScreen} />
  </Stack.Navigator>
);

const FavoritesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: theme.colors.background } }}>
    <Stack.Screen name="FavoritesMain" component={FavoritesScreen} />
    <Stack.Screen name="ProductDetailFav" component={ProductDetailScreen} />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: theme.colors.background } }}>
    <Stack.Screen name="CartMain" component={CartScreen} />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
      tabBarStyle: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 0,
        height: theme.layout.tabBarHeight,
        paddingBottom: 10,
        paddingTop: 8,
        elevation: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
      },
      tabBarLabelStyle: { fontSize: 11, fontWeight: '500', marginTop: 4 },
      tabBarIconStyle: { marginBottom: 0 },
    }}
  >
    <Tab.Screen name="HomeTab" component={HomeStack} options={{ tabBarLabel: 'Inicio', tabBarIcon: ({ color, focused }) => <TabIcon iconName="home" color={color} focused={focused} /> }} />
    <Tab.Screen name="FavoritesTab" component={FavoritesStack} options={{ tabBarLabel: 'Favoritos', tabBarIcon: ({ color, focused }) => <TabIcon iconName="heart" color={color} focused={focused} /> }} />
    <Tab.Screen name="CartTab" component={CartStack} options={{ tabBarLabel: 'Carrito', tabBarIcon: ({ color, focused }) => <TabIcon iconName="cart" color={color} focused={focused} /> }} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  iconContainer: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' },
  iconContainerActive: { backgroundColor: theme.colors.primary },
});

export default AppNavigator;