import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import ContactScreen from "../screens/ContactScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BioStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeMain"
                component={HomeScreen}
                options={{ title: 'Início', headerShown: false }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: 'Perfil Detalhado' }}
            />
        </Stack.Navigator>
    );
}
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Bio') {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (route.name === 'Projetos') {
                            iconName = focused ? 'code-working' : 'code-working-outline';
                        } else if (route.name === 'Contato') {
                            iconName = focused ? 'mail' : 'mail-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#cc0000',
                    tabBarInactiveTintColor: 'gray',
                    headerStyle: { backgroundColor: '#f4f4f4' },
                })}
            >

                <Tab.Screen name="Bio" component={BioStack} />
                <Tab.Screen name="Projetos" component={ProjectsScreen} />
                <Tab.Screen name="Contato" component={ContactScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}