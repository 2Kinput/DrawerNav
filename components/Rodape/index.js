import React from 'react'
import { View, Text } from 'react-native';

import styles from './styles';

export default function Rodape(){
    return(
        <View style={ styles.container }>
            <View style={ styles.boxText }>
            <Text style={ styles.desc }>By BruninhoDevs</Text>
            </View>
            
        </View>
    );
}