import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProjectsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meus Projetos </Text>
            <View style={styles.projectCard}>
                <Text style={styles.projectName}>• AI Agent Manager (Python/React)</Text>
                <Text style={styles.projectName}>• Performance Dashboard (TypeScript)</Text>
                <Text style={styles.projectName}>• Abarth Telemetry App (React Native)</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    projectCard: { alignItems: 'flex-start' },
    projectName: { fontSize: 18, marginBottom: 10 }
});