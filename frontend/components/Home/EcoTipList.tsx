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

/**
 * Renders a list of eco tips.
 *
 * @component
 * @param {Object[]} ecoTips - The array of eco tips to render.
 * @param {boolean} loading - Indicates whether the eco tips are currently being loaded.
 * @param {string} errorMsg - The error message to display if there was an error loading the eco tips.
 * @returns {JSX.Element} The rendered eco tip list.
 */
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
