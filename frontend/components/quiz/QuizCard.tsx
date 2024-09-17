import { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import AnswerOption from './AnswerOption';
import QuizHeader from './QuizHeader';
import QuizNavigationBottom from './QuizNavigationBottom';

interface QuestionProps {
  id: number;
  question: string;
  options: { id: number; text: string };
  'correct-answer': number;
}

interface QuizScreenProps {
  quiz_id: number;
  questions: QuestionProps[];
  totalQuestions: number;
}

interface AnswerProps {
  question_id: number;
  selected_option: number;
}

const QuestionCard = ({ question }: { question: string }) => (
  <View className="bg-blue-500 rounded-lg p-2 m-4">
    <Text className="text-white text-xl text-center">{question}</Text>
  </View>
);

const QuizCard = ({ quiz_id, totalQuestions, questions }: QuizScreenProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerProps[] | null>(
    null,
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleBookmarkQuiz = () => {
    // TODO: Implement hook to bookmark quiz by quiz_id
    console.log(`Bookmarking quiz with id: ${quiz_id}`);
  };

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleOnSkip = () => {
    nextQuestion();
  };

  const handleOnSubmit = () => {
    // Implement logic to submit the current question
    console.log('Submitting the answers');
  };

  const currentQuestion = questions[currentIndex];

  console.log(`Current Question: ${currentQuestion.id}`);
  console.log(`The selected answers: ${JSON.stringify(selectedAnswers)}`);

  return (
    <ScrollView className="bg-cyan-300 p-3">
      <View className="mb-3">
        <QuizHeader
          questionNumber={currentIndex + 1}
          totalQuestions={totalQuestions}
          onBack={previousQuestion}
          onBookmark={handleBookmarkQuiz}
        />
      </View>
      <View className="bg-[#e1f3f7] rounded-md mb-8">
        <QuestionCard question={currentQuestion.question} />
        {currentQuestion.options.map(option => (
          <AnswerOption
            key={option.id}
            label={option.id + 1}
            option={option.text}
            isSelected={
              selectedAnswers?.some(
                answer =>
                  answer.question_id === currentQuestion.id &&
                  answer.selected_option === option.id,
              ) ?? false
            }
            onSelect={() => {
              const updatedAnswers = selectedAnswers
                ? [
                    ...selectedAnswers.filter(
                      answer => answer.question_id !== currentQuestion.id,
                    ),
                    {
                      question_id: currentQuestion.id,
                      selected_option: option.id,
                    },
                  ]
                : [
                    {
                      question_id: currentQuestion.id,
                      selected_option: option.id,
                    },
                  ];
              setSelectedAnswers(updatedAnswers);
            }}
          />
        ))}
        <QuizNavigationBottom
          onSkip={handleOnSkip}
          onNext={nextQuestion}
          onSubmit={handleOnSubmit}
          totalQuestions={totalQuestions}
          currentIndex={currentIndex}
        />
      </View>
    </ScrollView>
  );
};

export default QuizCard;
