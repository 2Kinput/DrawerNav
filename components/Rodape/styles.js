import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 400,
    },

    boxText: {
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'dotted',
        marginBottom: 8

    },

    desc: {
        color: '#000',
        textAlign: 'center',
        
    }
})

export default styles;