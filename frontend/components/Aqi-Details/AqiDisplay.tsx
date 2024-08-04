// frontend/components/AqiDisplay.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AqiDisplay: React.FC<{ aqi: number }> = ({ aqi }) => {
    const getStatus = (aqi: number) => {
        if (aqi <= 50) return 'good';
        // Add more conditions as needed
        return 'unhealthy';
    };

    return (
        <View style={styles.container}>
            <Text style={styles.aqi}>{aqi}</Text>
            <Text style={styles.status}>{getStatus(aqi)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#00E676', // Adjust color based on AQI
    },
    aqi: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },
    status: {
        fontSize: 18,
        color: '#fff',
    },
});

export default AqiDisplay;
