import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, Modal } from "react-native";
import { Colors } from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import {Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Header {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  }

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: "center",
        width: windowWidth - 32,
        justifyContent: 'space-between'
    },
    logo: {
        width: 160,
    },

});

export default function Header({visible, setVisible}: Header) {
    

    return (
        <View style={styles.header}>
            <Image
                style={styles.logo}
                resizeMode="contain"
                source={require('../assets/logos/Logo_Full.png')}
            />
        </View>
    );
}