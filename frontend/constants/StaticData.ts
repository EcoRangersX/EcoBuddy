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

export { airQualityTips, quizzes, quizOfTheDay };
