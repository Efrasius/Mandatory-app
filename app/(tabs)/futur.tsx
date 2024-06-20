import { Text, View, Image, SafeAreaView } from "react-native";
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '../../constants/Colors';

export default function Futur() {
    const colorScheme = useColorScheme();
    const colorsPage = Colors[colorScheme==='light' ? 'light':'dark'];

    return(
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colorsPage.background,
        }}>
            
        </SafeAreaView>
    )
}