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

export interface QuizResultProps {
  title: string;
  correctAnswers: number;
  quizQuestions: number;
  bgColor?: string;
}

export interface LeaderboardUserItemProps {
  username: string;
  user_id: number;
  profile_image_url: string;
  score: number;
}
