import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'

import ISO from '../../src/img/Iso.png';

export default function Iso(){
    return(
        <View style={ styles.container }>
            <Image source={ ISO } style={ styles.img }/>

            <Text style={ styles.titulo }>ISO</Text>
            <Text style={ styles.desc }>
                <Text style={ { fontWeight: 'bold' } }> Iso </Text>é um mercenário chinês que entra em estado de fluxo para desmantelar os oponentes.
                Ele reconfigura a energia do ambiente para se proteger de balas e avança totalmente focado
                em direção ao próximo duelo até a morte.
            </Text>
        </View>

    );
}