import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>

            <Image
                source={{ uri: 'https://github.com/LFBruck.png' }}
                style={styles.image}
            />

            <Text style={styles.name}>Luiz Filipe Bruck</Text>
            <Text style={styles.subtitle}>Estudante de Engenharia de Software</Text>

            <View style={styles.bioContainer}>
                <Text style={styles.bioTitle}>Sobre</Text>
                <Text style={styles.bioText}>
                    Desenvolvedor FullStack - Aluno Faculdade InfNet -
                    Interessado em automação e inteligência artificial.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: '#cc0000',
        marginBottom: 15,
        marginTop: 30,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
    },
    bioContainer: {
        width: '100%',
        padding: 15,
        backgroundColor: '#f4f4f4',
        borderRadius: 10,
    },
    bioTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bioText: {
        fontSize: 14,
        lineHeight: 20,
    }
});