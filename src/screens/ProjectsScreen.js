import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

export default function ProjectsScreen() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);


    const githubUser = "LFBruck";

    useEffect(() => {
        fetch(`https://api.github.com/users/${githubUser}/repos`)
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#cc0000" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meus Repositórios GitHub </Text>
            <FlatList
                data={projects}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.projectName}>{item.name}</Text>
                        <Text style={styles.projectDesc}>
                            {item.description || "Sem descrição disponível"}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, marginTop: 40 },
    card: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginBottom: 15,
        borderLeftWidth: 5,
        borderLeftColor: '#cc0000',
    },
    projectName: { fontSize: 18, fontWeight: 'bold' },
    projectDesc: { fontSize: 14, color: '#666' }
});