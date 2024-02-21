import React, { FC } from 'react';
import { ProfilePageWrapper } from './ProfilePage.styled.ts';
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

interface ProfileProps {}

const forumTopics = [
  {
    id: 1,
    title: 'Introduction to Programming',
    description: 'Discussing the basics of programming languages and concepts.',
    date_created: '2024-02-16T12:15:15',
  },
  {
    id: 2,
    title: 'Web Development Frameworks',
    description:
      'Exploring popular web development frameworks like React, Angular, and Vue.',
    date_created: '2024-01-16T12:15:15',
  },
  {
    id: 3,
    title: 'Machine Learning Algorithms',
    description:
      'Deep dive into various machine learning algorithms and their applications.',
    date_created: '2023-02-05T12:15:15',
  },
];

const renderedTopics = forumTopics.map((topic) => (
  <Card className='mb-2'>
    <Card.Body>
      <Card.Title>{topic.title}</Card.Title>
      <Card.Text>{topic.description}</Card.Text>
    </Card.Body>
  </Card>
));

const forumPosts = [
  {
    id: 1,
    topic: 'Introduction to Programming',
    post: "I'm excited to learn programming! Any tips for beginners?",
    date_created: '2024-02-16',
  },
  {
    id: 2,
    topic: 'Introduction to Programming',
    post: "I recommend starting with Python. It's beginner-friendly and widely used!",
    date_created: '2024-02-16',
  },
  {
    id: 3,
    topic: 'Web Development Frameworks',
    post: "I prefer React for web development. What's your favorite framework?",
    date_created: '2024-02-15',
  },
  {
    id: 4,
    topic: 'Web Development Frameworks',
    post: 'Angular has been my go-to choice for large-scale projects.',
    date_created: '2024-02-15',
  },
  {
    id: 5,
    topic: 'Machine Learning Algorithms',
    post: 'Support vector machines are quite powerful for classification tasks.',
    date_created: '2024-02-14',
  },
  {
    id: 6,
    topic: 'Machine Learning Algorithms',
    post: "I'm interested in neural networks. Any resources to get started?",
    date_created: '2024-02-14',
  },
];

const renderedPosts = forumPosts.map((post) => (
  <Card className='mb-2'>
    <Card.Body>
      <Card.Title>{post.topic}</Card.Title>
      <Card.Text>{post.post}</Card.Text>
    </Card.Body>
  </Card>
));

const ProfilePage: FC<ProfileProps> = () => (
  <>
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <Row>
            <Col style={{ objectFit: 'contain' }}>
              <Image
                style={{ width: 100 + '%', height: 100 + '%' }}
                src='https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp'
                rounded
              />
            </Col>
          </Row>
          <Row>
            <Form>
              <Col xs={12} className='mt-3'>
                <Form.Control
                  type='text'
                  placeholder='Image url'
                ></Form.Control>
              </Col>
              <Col xs={12} className='mt-3 d-grid'>
                <Button>Update image</Button>
              </Col>
            </Form>
          </Row>
        </Col>
        <Col xs={12} md={8}>
          <Row>
            <Col>
              <label>USERNAME:</label>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Topics created in forum:</label>
              <div
                style={{
                  height: 310 + 'px',
                  padding: 8 + 'px',
                  overflow: 'auto',
                }}
              >
                {renderedTopics}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <label>Posts written in forum:</label>
              <div
                style={{
                  height: 310 + 'px',
                  padding: 8 + 'px',
                  overflow: 'auto',
                }}
              >
                {renderedPosts}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
);

export default ProfilePage;
