import { View, Text } from 'react-native';
import { StartQuizIcon } from '../icons/QuizzesIcons';
import { StartQuizProps } from '@/types/quizzes';

/**
 * Renders a quiz card to start a quiz.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.quiz_id - The ID of the quiz.
 * @param {string} props.level - The level of the quiz.
 * @param {number} props.questionsCount - The number of questions in the quiz.
 * @param {string} [props.bgColor='white'] - The background color of the card.
 * @param {string} [props.titleBgColor='#74c6d4'] - The background color of the title section.
 * @param {string} props.title - The title of the quiz.
 * @param {(string[]|string)} props.description - The description of the quiz. Can be a string or an array of strings.
 * @param {boolean} [props.quizOfTheDay=false] - Indicates if the quiz is the quiz of the day.
 * @returns {JSX.Element} The rendered quiz card.
 */
const StartQuiz = ({
  quiz_id,
  level,
  questionsCount,
  bgColor = 'white',
  titleBgColor = '#74c6d4',
  title,
  description,
  quizOfTheDay = false,
}: StartQuizProps) => {
  return (
    <View
      style={{ backgroundColor: bgColor }}
      className="p-4 mb-4 rounded-[30px] shadow-md shadow-black border-2 border-[#4ac965]">
      <View className="flex-row gap-2 mb-3">
        <Text className="bg-white text-black py-1 px-2 shadow-md shadow-black rounded-full text-xs">
          {level}
        </Text>
        <Text className="bg-white text-black px-2 py-1 shadow-md shadow-black rounded-full text-xs">
          Questions: {questionsCount}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: titleBgColor,
        }}
        className="flex-row items-center justify-between px-4 py-2 rounded-[30px]">
        <Text className="text-white font-bold mr-2">{title}</Text>
        <StartQuizIcon quiz_id={quiz_id} />
      </View>
      {/* Description as a Bullet List */}
      {quizOfTheDay ? (
        <View className="m-2">
          { Array.isArray(description) && description.map((point, index) => (
            <View key={index} className="flex-row items-start my-1">
              <Text className="text-lg leading-5 mr-1">{'\u2022'}</Text>
              <Text className="flex-1 text-base leading-5">{point}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text className="text-gray-600 mt-1">{description}</Text>
      )}
    </View>
  );
};

export default StartQuiz;
