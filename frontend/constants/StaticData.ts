import { StartQuizProps } from '@/types/quizzes';

const airQualityTipsStatic = [
  'Change Filters Regularly',
  'Invest In An Air Purifier',
  'Get Plants',
  'Avoid Smoking Inside',
  'Use Natural Cleaning Products',
];

const filteredArticlesStatic = [
  {
    id: 1,
    title: 'Article One',
    previewImageUrl: 'https://example.com/image1.jpg',
  },
  {
    id: 2,
    title: 'Article Two',
    previewImageUrl: 'https://example.com/image2.jpg',
  },
  {
    id: 3,
    title: 'Article Three',
    previewImageUrl: 'https://example.com/image3.jpg',
  },
];

const quizzesStatic: StartQuizProps[] = [
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

const quizOfTheDayStatic: StartQuizProps = {
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

const takenQuizzesStatic = [
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

const leaderboardUsersStatic = [
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

const ecoFriendlyArticlesStatic = [
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
    title: 'Introduction to Renewable Energy Sources',
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

const weatherDataStatic = [
  { weatherElement: 'temp.', value: 32, unit: '°C' },
  { weatherElement: 'wind', value: 8, unit: 'km/h' },
  { weatherElement: 'humidity', value: 17, unit: '%RH' },
  { weatherElement: 'pressure', value: 1011, unit: 'hPa' },
];

const quizTitlesStatic = [
  'Biodiversity Basics',
  'Sustainable Living',
  'Climate Change Awareness',
  'Water Conservation',
];

const aiQuestionsStatic = [
  'What is the main cause of biodiversity loss?',
  'Why are decomposers important?',
  'How does deforestation impact carbon levels?',
  'What factors determine biome distribution?',
];

const articleTitlesStatic = [
  'The Role of Urban Green Spaces in Promoting Biodiversity',
  'The Impact of Plastic Pollution on Marine Life',
  ' Sustainable Agriculture: Practices and Benefits',
  'Water Conservation',
];

const ecoTipsStatic = [
  {
    title: 'Bring Your Own Reusable Bags When Shopping',
    description:
      'Reduce plastic waste by carrying reusable shopping bags. They are sturdier, hold more, and are better for the environment.',
  },
  {
    title: 'Use a Reusable Water Bottle',
    description:
      'Avoid single-use plastic bottles by using a reusable water bottle. It saves money and reduces plastic waste.',
  },
  {
    title: 'Turn Off Lights When Not in Use',
    description:
      'Save energy by turning off lights when you leave a room. It reduces electricity consumption and your carbon footprint.',
  },
  {
    title: 'Unplug Electronics When Not in Use',
    description:
      'Even when turned off, electronics use energy. Unplugging them saves energy and reduces your electricity bill.',
  },
  {
    title: 'Use Public Transportation or Carpool',
    description:
      'Reduce carbon emissions by using public transportation or carpooling. It decreases the number of vehicles on the road.',
  },
];

const ChemicalElementsStatic = [
  { chemElement: 'PM2.5', value: 20.1, bgColor: '#c0facc' },
  { chemElement: 'PM10', value: 3.9, bgColor: '#bff1f9' },
  { chemElement: 'O3', value: 85.6, bgColor: '#8be89f' },
  { chemElement: 'CO', value: 1.41, bgColor: '#74c6d4' },
  { chemElement: 'NO2', value: 12.8, bgColor: '#96d6e1' },
  { chemElement: 'SO2', value: 0.9, bgColor: '#37e9ca' },
  { chemElement: 'NO', value: 12, bgColor: '#19b6f8' },
  { chemElement: 'NH3', value: 51.3, bgColor: '#0affc0' },
];

export {
  airQualityTipsStatic,
  quizzesStatic,
  takenQuizzesStatic,
  quizOfTheDayStatic,
  leaderboardUsersStatic,
  ecoFriendlyArticlesStatic,
  weatherDataStatic,
  quizTitlesStatic,
  aiQuestionsStatic,
  articleTitlesStatic,
  ecoTipsStatic,
  ChemicalElementsStatic,
  filteredArticlesStatic,
};
