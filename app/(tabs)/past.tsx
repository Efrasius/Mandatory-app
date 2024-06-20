import { Text, View, Image } from "react-native";
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '../../constants/Colors';

export default function Futur() {
    const colorScheme = useColorScheme();
    const colorsPage = Colors[colorScheme==='light' ? 'light':'dark'];

    return(
        <View
            style={{
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
      <Text>Under construction. Past.</Text>
    </View>
    )
}