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

const topic = {
  id: 1,
  title: 'Introduction to Programming',
  slug: 'Introduction-to-Programming',
  description: 'Discussing the basics of programming languages and concepts.',
  date_created: '2024-02-16T12:15:15',
  created_by: 'jonas007',
};

const forumPosts = [
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
];

const renderedPosts = forumPosts.map((post) => (
  <Link
    style={{ textDecoration: 'none' }}
    to={'/forum/' + topic.slug + '/' + post.slug}
  >
    <Card className='mb-2'>
      <Card.Body>
        <Card.Title style={{ position: 'relative' }}>
          {post.title}
          <span
            style={{
              position: 'absolute',
              display: 'inline-block',
              right: 0,
            }}
          >
            Answers <Badge bg='primary'>{post.answers}</Badge>
          </span>
        </Card.Title>
        <Card.Text>{post.post}</Card.Text>
      </Card.Body>
    </Card>
  </Link>
));

interface DiscussionListProps {}

const DiscussionListPage: FC<DiscussionListProps> = () => (
  <Container>
    <div className='mb-5'>TOPIC: {topic.title}</div>
    <div>{renderedPosts}</div>
    <div className='mt-5'>
      <Form>
        <div>
          <Form.Group className='mb-3' controlId='postForm.Title'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' placeholder='Title' name='title' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='postForm.Descripton'>
            <Form.Label>Post</Form.Label>
            <Form.Control as='textarea' rows={4} name='description' />
          </Form.Group>
        </div>
        <div className='float-end'>
          <Button type='submit'>Create new post</Button>
        </div>
      </Form>
    </div>
  </Container>
);

export default DiscussionListPage;
