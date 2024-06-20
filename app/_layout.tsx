import React, {useState} from 'react';
import { Stack } from "expo-router";
import Header from "./components/header";
import { Colors } from '../constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';



export default function RootLayout() {
  const [visible, setVisible] = useState<boolean>(false);
  
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="(tabs)"  options={{
         headerTitle: (props) => <Header visible={visible} setVisible={setVisible} />,
         headerStyle: {
          height: 60,
          backgroundColor: Colors[colorScheme==='light' ? 'light':'dark'].headerBackground,
         }
      }}/>

    </Stack>
  );
}
