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
    image_url: 'https://example.com/path_to_image1.png',
  },
  {
    title: '10 Tips for Reducing Plastic Waste',
    article_id: 2,
    description:
      'Discover practical tips for minimizing plastic waste in your daily life, from reusable bags to plastic-free packaging alternatives.',
    image_url: 'https://example.com/path_to_image2.png',
  },
  {
    title: 'How to Start a Home Garden',
    article_id: 3,
    description:
      'A beginner’s guide to starting your own home garden, including tips on choosing the right plants, soil preparation, and sustainable gardening practices.',
    image_url: 'https://example.com/path_to_image3.png',
  },
  {
    title: 'The Benefits of Composting',
    article_id: 4,
    description:
      'Learn about the environmental and personal benefits of composting, and get started with our easy-to-follow composting guide.',
    image_url: 'https://example.com/path_to_image4.png',
  },
  {
    title: 'Eco-Friendly Travel Tips',
    article_id: 5,
    description:
      'Explore ways to reduce your carbon footprint while traveling, from choosing sustainable accommodations to minimizing waste on the go.',
    image_url: 'https://example.com/path_to_image5.png',
  },
  {
    title: 'Green Energy Solutions for Your Home',
    article_id: 6,
    description:
      'Discover various green energy solutions that can help you reduce your home’s carbon footprint, including solar panels, wind turbines, and energy-efficient appliances.',
    image_url: 'https://example.com/path_to_image6.png',
  },
  {
    title: 'Sustainable Fashion: How to Build an Eco-Friendly Wardrobe',
    article_id: 7,
    description:
      'Learn how to make more sustainable fashion choices, from buying second-hand clothing to choosing eco-friendly fabrics and supporting ethical brands.',
    image_url: 'https://example.com/path_to_image7.png',
  },
  {
    title: 'The Importance of Water Conservation',
    article_id: 8,
    description:
      'Understand the importance of water conservation and discover practical tips for reducing water usage in your home and garden.',
    image_url: 'https://example.com/path_to_image8.png',
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
