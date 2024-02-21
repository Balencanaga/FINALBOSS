exports.list = (req, res, next) => {
  res.status(200).json([
    {
      id: 1,
      title: 'Introduction to Programming',
      slug: 'Introduction-to-Programming',
      description:
        'Discussing the basics of programming languages and concepts.',
      date_created: '2024-02-16T12:15:15',
    },
    {
      id: 2,
      title: 'Web Development Frameworks',
      slug: 'Web-Development-Frameworks',
      description:
        'Exploring popular web development frameworks like React, Angular, and Vue.',
      date_created: '2024-01-16T12:15:15',
    },
    {
      id: 3,
      title: 'Machine Learning Algorithms',
      slug: 'Machine-Learning-Algorithms',
      description:
        'Deep dive into various machine learning algorithms and their applications.',
      date_created: '2023-02-05T12:15:15',
    },
  ]);
};

exports.create = (req, res, next) => {
  const topic = req.body.topic;
  res.status(200).json(topic);
};

exports.get_by_slug = (req, res, next) => {
  const topicSlug = req.params.topicSlug;

  const topic = {
    id: 1,
    title: 'Introduction to Programming',
    slug: topicSlug,
    description: 'Discussing the basics of programming languages and concepts.',
    date_created: '2024-02-16T12:15:15',
    created_by: 'jonas007',
  };

  res.status(200).json(topic);
};
