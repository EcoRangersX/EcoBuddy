// frontend/components/AqiInfoBox.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AqiInfoBox: React.FC<{ info: string }> = ({ info }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.info}>{info}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#E0F7FA',
        marginTop: 10,
    },
    info: {
        fontSize: 16,
        color: '#00796B',
    },
});

export default AqiInfoBox;
