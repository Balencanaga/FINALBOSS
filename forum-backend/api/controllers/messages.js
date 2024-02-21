exports.contacts = (req, res, next) => {
  res.status(200).json([
    {
      username: 'jonas007',
      avatar:
        'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
    },
    {
      username: 'Petras456',
      avatar:
        'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
    },
    {
      username: 'Mindaugas789',
      avatar:
        'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
    },
    {
      username: 'Bronius852',
      avatar:
        'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
    },
  ]);
};

exports.chat = (req, res, next) => {
  const usernme = req.params.username;
  res.status(200).json([
    {
      message: 'a sdfsg df dgh gfhgfh fgh gfh f',
      date_created: '2024-02-16',
      created_by: {
        username: 'jonas007',
        avatar:
          'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
      },
    },
    {
      message: 'a sdfsg df dgh gfhgfh fgh gfh f',
      date_created: '2024-02-16',
      created_by: {
        username: 'Petras7852',
        avatar:
          'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
      },
    },
    {
      message: 'a sdfsg df dgh gfhgfh fgh gfh f',
      date_created: '2024-02-16',
      created_by: {
        username: 'jonas007',
        avatar:
          'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
      },
    },
    {
      message: 'a sdfsg df dgh gfhgfh fgh gfh f',
      date_created: '2024-02-16',
      created_by: {
        username: 'Petras7852',
        avatar:
          'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
      },
    },
    {
      message: 'a sdfsg df dgh gfhgfh fgh gfh f',
      date_created: '2024-02-16',
      created_by: {
        username: 'Petras7852',
        avatar:
          'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
      },
    },
  ]);
};
