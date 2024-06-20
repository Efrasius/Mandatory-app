import { useCallback } from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '../../constants/Colors';


const styles = StyleSheet.create({

});

export default function Index() {
  const [fontsLoaded, fontError] = useFonts({
    'compctan': require('../assets/fonts/Compctan.ttf'),
  });

  const colorScheme = useColorScheme();
  const colorsPage = Colors[colorScheme==='light' ? 'light':'dark'];




  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colorsPage.background,
    }}>
      <Image
        style={{ width: 300 }}
        resizeMode='contain'
        source={require('../assets/logos/Logo_Full.png')}
      />
      <Text style={{
        color: colorsPage.text,
      }}>
        Under construction. Index
      </Text>
    </View>
  );
}
