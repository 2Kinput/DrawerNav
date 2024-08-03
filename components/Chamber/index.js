import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import CHAMBER from '../../src/img/Chamber.png'

export default function Chamber(){
    return(
        <View style={ styles.container }>

            <Image source={ CHAMBER } style={ styles.img }/>

            <Text style={ styles.titulo }>CHAMBER</Text>

            <Text style={ styles.desc }>
            Bem-vestido e armado até os dentes,
            o criador de armas francês <Text style={ { fontWeight: 'bold' } }>Chamber</Text> coloca os inimigos para correr com precisão mortal.
            Use e abuse do arsenal personalizado dele para segurar posições e abater inimigos de longe,
            criando a defesa perfeita para qualquer plano.
            </Text>
        </View>
    );
}