import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import KILLJOY from '../../src/img/Killjoy.png';

export default function Killjoy(){
    return(
        <View style={ styles.container }>
            <Image source={ KILLJOY } style={ styles.img }/>

            <Text style={ styles.titulo }>KILLJOY</Text>

            <Text style={ styles.desc }>
                <Text style={ { fontWeight: 'bold' } }>Killjoy</Text>, uma alemã genial,
                defende posições-chave no campo de batalha facilmente com seu arsenal de invenções.
                Se o dano causado por seu equipamento não der cabo dos inimigos,
                os efeitos negativos de seus queridos robôs darão conta do recado.
            </Text>
        </View>
    );
}