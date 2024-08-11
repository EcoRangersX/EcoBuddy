export interface StartQuizProps {
  quiz_id: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  questionsCount: number;
  bgColor?: string;
  titleBgColor?: string;
  title: string;
  description: string[] | string;
  quizOfTheDay?: boolean;
}
