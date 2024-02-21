import React, { FC } from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Card,
  Badge,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChatFill,
  ChatTextFill,
  Icon,
} from 'react-bootstrap-icons';

interface DiscussionProps {}

const post = {
  id: 2,
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

const forumPostAnswers = [
  {
    id: 2,
    content:
      'balbalbalablablab sdfsgsdg fgfdg fdg fhdjdjhgjhfjfgjdtr dgssdfdgdsgdh y j',
    date_created: '2024-02-16',
    created_by: {
      username: 'jonas007',
      avatar:
        'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
    },
  },
  {
    id: 2,
    content:
      'balbalbalablablab sdfsgsdg fgfdg fdg fhdjdjhgjhfjfgjdtr dgssdfdgdsgdh y j',
    date_created: '2024-02-16',
    created_by: {
      username: 'jonas007',
      avatar:
        'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
    },
  },
  {
    id: 2,
    content:
      'balbalbalablablab sdfsgsdg fgfdg fdg fhdjdjhgjhfjfgjdtr dgssdfdgdsgdh y j',
    date_created: '2024-02-16',
    created_by: {
      username: 'jonas007',
      avatar:
        'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
    },
  },
  {
    id: 2,
    content:
      'balbalbalablablab sdfsgsdg fgfdg fdg fhdjdjhgjhfjfgjdtr dgssdfdgdsgdh y j',
    date_created: '2024-02-16',
    created_by: {
      username: 'jonas007',
      avatar:
        'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
    },
  },
  {
    id: 2,
    content:
      'balbalbalablablab sdfsgsdg fgfdg fdg fhdjdjhgjhfjfgjdtr dgssdfdgdsgdh y j',
    date_created: '2024-02-16',
    created_by: {
      username: 'jonas007',
      avatar:
        'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
    },
  },
  {
    id: 2,
    content:
      'balbalbalablablab sdfsgsdg fgfdg fdg fhdjdjhgjhfjfgjdtr dgssdfdgdsgdh y j',
    date_created: '2024-02-16',
    created_by: {
      username: 'jonas007',
      avatar:
        'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
    },
  },
];

const renderedAnswers = forumPostAnswers.map((answer) => (
  <Card className='mb-2'>
    <Card.Body>
      <div className='mb-3'>
        <Image
          src={answer.created_by.avatar}
          roundedCircle
          style={{ width: 50 + 'px', height: 50 + 'px' }}
        />
        <span style={{ padding: 10 + 'px' }}>{answer.created_by.username}</span>
        <Link
          style={{ float: 'right' }}
          to={'/messages?username=' + answer.created_by.username}
          title='Send message'
        >
          <ChatTextFill size={30} />
        </Link>
      </div>
      <Card.Text style={{ position: 'relative' }}>
        {answer.content}
        <span
          className='text-muted'
          style={{ position: 'absolute', right: 0, bottom: 0 }}
        >
          {answer.date_created}
        </span>
      </Card.Text>
    </Card.Body>
  </Card>
));

const DiscussionPage: FC<DiscussionProps> = () => (
  <Container>
    <div className='mb-5'>
      <Card className='mb-2'>
        <Card.Body>
          <div className='mb-3'>
            <Image
              src={post.created_by.avatar}
              roundedCircle
              style={{ width: 50 + 'px', height: 50 + 'px' }}
            />
            <span style={{ padding: 10 + 'px' }}>
              {post.created_by.username}
            </span>

            <Link
              style={{ float: 'right' }}
              to={'/messages?username=' + post.created_by.username}
              title='Send message'
            >
              <ChatTextFill size={30} />
            </Link>
          </div>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text style={{ position: 'relative' }}>
            {post.post}
            <span
              className='text-muted'
              style={{ position: 'absolute', right: 0, bottom: 0 }}
            >
              {post.date_created}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div>DISCUSSION:</div>
    <div>{renderedAnswers}</div>
    <div className='mt-5'>
      <Form>
        <div>
          <Form.Group className='mb-3' controlId='answerForm.Content'>
            <Form.Label>Your answer</Form.Label>
            <Form.Control as='textarea' rows={4} name='content' />
          </Form.Group>
        </div>
        <div className='float-end'>
          <Button type='submit'>Post answer</Button>
        </div>
      </Form>
    </div>
  </Container>
);

export default DiscussionPage;
