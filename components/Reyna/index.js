import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import REYNA from '../../src/img/Reyna.jpg';

export default function Reyna(){
    return(
        <View style={ styles.container }>
            <Image source={ REYNA } style={ styles.img }/>
            <Text style={ styles.titulo }>REYNA</Text>
            <Text style={ styles.desc }>
            Criada no coração do México,
            <Text style={ { fontWeight: 'bold' } }> Reyna</Text> domina o combate individual,
            destacando-se a cada abate efetuado.
            Sua capacidade só é limitada por sua própria perícia,
            tornando-a bastante dependente de desempenho.
            </Text>
        </View>
    );
}