import { View } from 'react-native';
import AqiChemicalItem from './AqiChemicalItem';

const AqiChemicalList = () => {
    const chemicals = [
        { name: 'PM2.5', description: 'Particles that are 2.5 micrometers or smaller, which can penetrate deep into the lungs.' },
        { name: 'PM10', description: 'Particles that are 10 micrometers or smaller.' },
        { name: 'O3', description: 'A harmful air pollutant formed when sunlight reacts with pollutants like VOCs and NOx.' },
        { name: 'CO', description: 'A colorless, odorless gas produced by burning fossil fuels.' },
        { name: 'SO2', description: 'A gas produced by burning fossil fuels containing sulfur, such as coal or oil.' },
        { name: 'NO2', description: 'A gas that is part of the group of nitrogen oxides (NOx) produced by vehicles and industrial processes.' },
    ];

    return (
        <View className="p-2 rounded-lg">
            {chemicals.map((chemical, index) => (
                <AqiChemicalItem
                    key={index}
                    name={chemical.name}
                    description={chemical.description}
                />
            ))}
        </View>
    );
};

export default AqiChemicalList;

