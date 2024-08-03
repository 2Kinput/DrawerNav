import React from "react";
import { View, Text, Image } from 'react-native';

import styles from './styles';

import LOGO from '../../src/img/LogoValorant.png';

import Rodape from '../Rodape';

export default function Home(){

    return(
        <View style={ styles.container }>

            <View style={ styles.card }>
            <Image source={ LOGO } style={ styles.img }/>
            <Text style={ styles.titulo }>Personagens Game Valorant</Text>
            </View>
            
            <Rodape />
        </View>

        

    );
}