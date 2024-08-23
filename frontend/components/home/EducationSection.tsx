import { View, Text } from 'react-native';
import QuizList from './QuizList';

interface EducationSectionProps {
  title: string;
  items: string[];
  elementTextColor?: string;
  elementBgColor?: string;
  titleSectionColor?: string;
  bgColor?: string;
  loading: boolean;
  errorMsg: string | null;
}

/**
 * Renders the EducationSection component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the section.
 * @param {Array} props.items - The items to be displayed in the section.
 * @param {string} [props.elementTextColor='black'] - The text color of the section items.
 * @param {string} [props.elementBgColor='#d4fbdc'] - The background color of the section items.
 * @param {string} [props.titleSectionColor='green'] - The color of the section title.
 * @param {string} [props.bgColor='#c1facd'] - The background color of the section.
 * @param {boolean} props.loading - Indicates if the section is in a loading state.
 * @param {string} props.errorMsg - The error message to be displayed if there is an error.
 * @returns {JSX.Element} The rendered EducationSection component.
 */
const EducationSection = ({
  title,
  items,
  elementTextColor = 'black',
  elementBgColor = '#d4fbdc',
  titleSectionColor = 'green',
  bgColor = '#c1facd',
  loading,
  errorMsg,
}: EducationSectionProps) => {
  return (
    <View className="p-6">
      {loading ? (
        <Text>Loading...</Text>
      ) : errorMsg ? (
        <Text>{errorMsg}</Text>
      ) : (
        <QuizList
          title={title}
          items={items}
          elementTextColor={elementTextColor}
          elementBgColor={elementBgColor}
          titleSectionColor={titleSectionColor}
          bgColor={bgColor}
        />
      )}
    </View>
  );
};

export default EducationSection;
