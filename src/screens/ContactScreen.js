import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContactScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contato </Text>
            <Text style={styles.info}>E-mail: lfbruckmattos@gmail.com</Text>
            <Text style={styles.info}>LinkedIn:https://www.linkedin.com/in/luizfbruck/ </Text>
            <Text style={styles.info}>GitHub: https://github.com/LFbruck</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    info: { fontSize: 18, marginBottom: 10 }
});