import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcome}>Bem-vindo ao meu App</Text>
                <Text style={styles.title}>Luiz Filipe Bruck Reis Mattos</Text>
            </View>

            <View style={styles.summaryContainer}>
                <Text style={styles.summaryText}>
                    Engenheiro de Software em formação pelo Instituto Infnet.
                    Focado em Full Stack e soluções inteligentes com AI Agents.
                </Text>
            </View>

            <View style={styles.buttonWrapper}>
                <Button
                    title="Ver Perfil Completo"
                    color="#cc0000"
                    onPress={() => navigation.navigate("Profile")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'center' },
    header: { alignItems: 'center', marginBottom: 30 },
    welcome: { fontSize: 16, color: '#666', textTransform: 'uppercase', letterSpacing: 1 },
    title: { fontSize: 28, fontWeight: 'bold', color: '#333', textAlign: 'center' },
    summaryContainer: { backgroundColor: '#f9f9f9', padding: 20, borderRadius: 12, marginBottom: 30 },
    summaryText: { fontSize: 16, color: '#444', textAlign: 'center', lineHeight: 24 },
    buttonWrapper: { paddingHorizontal: 40 }
});