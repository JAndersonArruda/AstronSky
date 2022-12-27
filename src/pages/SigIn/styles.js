import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        marginBottom: 70,
    },
    imagem: {
        alignItems: 'center',
        width: 215,
        height: 74.11,
        marginTop: 90,
        marginBottom: 100,
    },
    form: {
        borderBottomColor: '#A0A0A0',
        borderBottomWidth: 0.5,
    },
    inputs: {
        backgroundColor: '#D9D9D9',
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 17,
        paddingHorizontal: 10,
        marginBottom: 8.5,
        width: 280,
        color: '#717F7F',
    },
    botao: {
        backgroundColor: '#19BFB7',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 30,
        marginBottom: 151,
    },
    nextSigUp: {
        flexDirection: 'row',
        marginTop: 13,
    },
    nextText: {
        fontSize: 15,
        fontFamily: 'Inter',
        color: '#717F7F',
        fontStyle: 'italic',
    },
    nextTextAction: {
        fontSize: 15,
        fontFamily: 'Inter',
        color: '#19BFB7',
        fontStyle: 'italic',
    }
})