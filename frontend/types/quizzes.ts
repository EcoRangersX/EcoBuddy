export interface StartQuizProps {
  id: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  "amount-of-questions": number;
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
