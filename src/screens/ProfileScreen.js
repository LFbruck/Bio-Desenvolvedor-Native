import React from "react";
import {View, Text, StyleSheet} from "react-native";



export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Helloo world</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontsize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})