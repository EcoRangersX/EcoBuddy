import { View } from 'react-native';
import EcoTip from './EcoTip';

interface EcoTipProps {
    title: string;
    description: string;
}

interface EcoTipsSectionProps {
  ecoTips: EcoTipProps[];
}

const EcoTipsSection = ({ ecoTips }: EcoTipsSectionProps) => {
  return (
    <View className="flex flex-col">
      {ecoTips.map((tip, index) => (
        <EcoTip key={index} title={tip.title} description={tip.description} />
      ))}
    </View>
  );
};

export default EcoTipsSection;
