import React from 'react'
import {View,Text,Button, StyleSheet} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Luiz Filipe Bruck Reis Mattos - Desenvolvedor Full Stack</Text>
            <Text style={styles.summary}>Engenheiro de Software em formação pelo Instituo Infnet, com foco em desenvolvimento Full Stack (React, TypeScript e Python) e construção de soluções escaláveis com AI Agents. </Text>
            <Button  title={"Ver perfil Completo"}   onPress={() => navigation.navigate("Profile")}></Button>


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
        summary: {
            textAlign: 'center',
            marignBottom: 20,
            fontSize: 16,
        }
    })

