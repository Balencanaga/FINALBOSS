exports.list = (req, res, next) => {
  res.status(200).json([
    {
      id: 1,
      title: 'Introduction to Programming',
      slug: 'excited-to-learn-programming-Any-tips-for-beginner-1212',
      post: "I'm excited to learn programming! Any tips for beginners?",
      date_created: '2024-02-16',
      created_by: 'jonas007',
      answers: 666,
    },
    {
      id: 2,
      title: 'Introduction to Programming',
      slug: 'excited-to-learn-programming-Any-tips-for-beginner-1212',
      post: "I recommend starting with Python. It's beginner-friendly and widely used!",
      date_created: '2024-02-16',
      created_by: 'jonas007',
      answers: 9,
    },
    {
      id: 3,
      title: 'Web Development Frameworks',
      slug: 'excited-to-learn-programming-Any-tips-for-beginner-1212',
      post: "I prefer React for web development. What's your favorite framework?",
      date_created: '2024-02-15',
      created_by: 'jonas007',
      answers: 8,
    },
    {
      id: 4,
      title: 'Web Development Frameworks',
      slug: 'excited-to-learn-programming-Any-tips-for-beginner-1212',
      post: 'Angular has been my go-to choice for large-scale projects.',
      date_created: '2024-02-15',
      created_by: 'jonas007',
      answers: 45645,
    },
    {
      id: 5,
      title: 'Machine Learning Algorithms',
      slug: 'excited-to-learn-programming-Any-tips-for-beginner-1212',
      post: 'Support vector machines are quite powerful for classification tasks.',
      date_created: '2024-02-14',
      created_by: 'jonas007',
      answers: 6,
    },
    {
      id: 6,
      title: 'Machine Learning Algorithms',
      slug: 'excited-to-learn-programming-Any-tips-for-beginner-1212',
      post: "I'm interested in neural networks. Any resources to get started?",
      date_created: '2024-02-14',
      created_by: 'jonas007',
      answers: 1,
    },
  ]);
};

exports.create = (req, res, next) => {
  const discussion = req.body.discussion;
  res.status(200).json(discussion);
};

exports.get_by_id = (req, res, next) => {
  const id = req.params.dicussionId;
  const discussion = {
    id: id,
    title: 'Introduction to Programming',
    slug: 'excited-to-learn-programming-Any-tips-for-beginner-1212',
    post: "I recommend starting with Python. It's beginner-friendly and widely used!",
    date_created: '2024-02-16',
    created_by: {
      username: 'jonas007',
      avatar:
        'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
    },
  };

  res.status(200).json(discussion);
};
