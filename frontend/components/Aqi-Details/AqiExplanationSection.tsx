// frontend/components/AqiExplanationSection.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AqiExplanationSection: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>What Is AQI?</Text>
            <Text style={styles.explanation}>
                The Air Quality Index (AQI) is a tool used to communicate how polluted the air currently is or how polluted it is forecasted to become. It provides a clear and simple way to understand air quality levels and their potential impact on health. The AQI ranges from 0 to 500, where higher values indicate poorer air quality and a greater potential for adverse health effects.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#E0F7FA',
        marginTop: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00796B',
        marginBottom: 10,
    },
    explanation: {
        fontSize: 16,
        color: '#00796B',
    },
});

export default AqiExplanationSection;
