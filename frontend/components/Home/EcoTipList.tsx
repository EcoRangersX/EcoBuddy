import { View } from 'react-native';
import EcoTip from './EcoTip';

interface EcoTipProps {
  title: string;
  description: string;
}

interface EcoTipListProps {
  ecoTips: EcoTipProps[];
  loading: boolean;
  errorMsg: string;
}

const EcoTipList = ({ ecoTips, loading, errorMsg }: EcoTipListProps) => {
  return (
    <View className="flex flex-col">
      {ecoTips?.map((tip, index) => (
        <EcoTip key={index} title={tip.title} description={tip.description} />
      ))}
    </View>
  );
};

export default EcoTipList;
