import { StartQuizProps } from '@/types/quizzes';

const airQualityTips = [
  'Change Filters Regularly',
  'Invest In An Air Purifier',
  'Get Plants',
  'Avoid Smoking Inside',
  'Use Natural Cleaning Products',
];

const quizzes: StartQuizProps[] = [
  {
    quiz_id: 1,
    level: 'Beginner',
    questionsCount: 10,
    title: 'Ecology basics',
    description:
      'Questions about ecosystems, biodiversity, and basic ecological concepts',
  },
  {
    quiz_id: 2,
    level: 'Intermediate',
    questionsCount: 15,
    title: 'Climate Change',
    description:
      'Questions about the causes, impacts, and solutions to climate change',
  },
  {
    quiz_id: 3,
    level: 'Intermediate',
    questionsCount: 20,
    title: 'Sustainable Development',
    description: 'Questions about sustainable development goals and strategies',
  },
  {
    quiz_id: 4,
    level: 'Advanced',
    questionsCount: 25,
    title: 'Conservation Biology',
    description:
      'Questions about conservation strategies and endangered species',
  },
];

const quizOfTheDay: StartQuizProps = {
  quiz_id: 1,
  level: 'Beginner',
  questionsCount: 5,
  title: 'Human Impact on the Environment',
  description: [
    'How human activities like deforestation, urbanization, and agriculture affect the environment.',
    'The concept of ecological footprints and how to reduce them.',
    'Case studies of significant environmental changes caused by human actions.',
  ],
};

const takenQuizzes = [
  {
    title: 'Ecology basics',
    correctAnswers: 8,
    quizQuestions: 10,
  },
  {
    title: 'Climate Change',
    correctAnswers: 12,
    quizQuestions: 15,
  },
  {
    title: 'Sustainable Development',
    correctAnswers: 17,
    quizQuestions: 20,
  },
  {
    title: 'Conservation Biology',
    correctAnswers: 21,
    quizQuestions: 25,
  },
];

const leaderboardUsers = [
  {
    user_id: 1,
    username: 'alice_wonder',
    score: 120,
    profile_image_url: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    user_id: 2,
    username: 'bob_builder',
    score: 250,
    profile_image_url: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    user_id: 3,
    username: 'charlie_chaplin',
    score: 180,
    profile_image_url: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    user_id: 4,
    username: 'diana_prince',
    score: 300,
    profile_image_url: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    user_id: 5,
    username: 'edward_snow',
    score: 220,
    profile_image_url: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    user_id: 6,
    username: 'fiona_apple',
    score: 150,
    profile_image_url: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
];

export {
  airQualityTips,
  quizzes,
  takenQuizzes,
  quizOfTheDay,
  leaderboardUsers,
};
