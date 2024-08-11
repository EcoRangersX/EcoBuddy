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

const ecoFriendlyArticles = [
  {
    title: 'The Basics of Sustainable Living',
    article_id: 1,
    description:
      'Learn simple and effective ways to reduce your environmental impact through everyday habits. This guide covers everything from energy conservation to eco-friendly shopping tips.',
    image_url: 'https://i.postimg.cc/ry0TvfG4/article-image.png',
  },
  {
    title: '10 Ways to Reduce Your Carbon Footprint Today',
    article_id: 2,
    description:
      'A practical guide to minimizing your carbon emissions, from energy-efficient home improvements to sustainable travel choices.',
    image_url: 'https://i.postimg.cc/8PNyh5CC/image-1.png',
  },
  {
    title: 'The Impact of Plastic Pollution on Oceans',
    article_id: 3,
    description:
      'Explore the devastating effects of plastic waste on marine life and what you can do to help reduce ocean pollution.',
    image_url: 'https://i.postimg.cc/yxBTXQsG/image.png',
  },
  {
    title: 'The Impact of Plastic Pollution on Oceans',
    article_id: 4,
    description:
      'An introduction to renewable energy sources like solar, wind, and hydroelectric power, and their role in combating climate change.',
    image_url: 'https://i.postimg.cc/P5NQ48nd/image.png',
  },
  {
    title: 'How Climate Change is Affecting Global Biodiversity',
    article_id: 5,
    description:
      'Understand the connection between climate change and the loss of species around the world, and what actions are being taken to protect biodiversity.',
    image_url: 'https://i.postimg.cc/8kHdgb11/image.png',
  },
  {
    title: 'What You Need to Know About Pollen and Air Quality',
    article_id: 6,
    description:
      'An overview of how pollen levels affect air quality and health, especially for those with allergies, and tips for managing exposure.',
    image_url: 'https://i.postimg.cc/2894V8bM/image.png',
  },
];

export {
  airQualityTips,
  quizzes,
  takenQuizzes,
  quizOfTheDay,
  leaderboardUsers,
  ecoFriendlyArticles
};
