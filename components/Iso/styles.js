import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        width: 320,
        height: 220,
        borderRadius: 20,
        marginBottom: 20
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },

    desc: {
        fontSize: 14,
        fontStyle: 'italic',
        textAlign: 'center',
        padding: 5

    }
})

export default styles;