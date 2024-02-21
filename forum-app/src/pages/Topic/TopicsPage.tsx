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
interface TopicProps {}

const forumTopics = [
  {
    id: 1,
    title: 'Introduction to Programming',
    slug: 'Introduction-to-Programming',
    description: 'Discussing the basics of programming languages and concepts.',
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
];

const renderedTopics = forumTopics.map((topic) => (
  <Link style={{ textDecoration: 'none' }} to={'/forum/' + topic.slug}>
    <Card className='mb-2'>
      <Card.Body>
        <Card.Title>{topic.title}</Card.Title>
        <Card.Text>
          {topic.description}
          <div className='mt-3'>
            Posts <Badge bg='secondary'>5</Badge>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </Link>
));

const TopicsPage: FC<TopicProps> = () => (
  <Container>
    <div className='mb-5'>{renderedTopics}</div>
    <div>
      <Form>
        <div>
          <Form.Group className='mb-3' controlId='topicForm.Topic'>
            <Form.Label>Topic</Form.Label>
            <Form.Control type='text' placeholder='Topic' name='topic' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='topicForm.Descripton'>
            <Form.Label>Description</Form.Label>
            <Form.Control as='textarea' rows={4} name='description' />
          </Form.Group>
        </div>
        <div className='float-end'>
          <Button type='submit'>Create new topic</Button>
        </div>
      </Form>
    </div>
  </Container>
);

export default TopicsPage;
