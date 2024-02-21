import React, { FC, useEffect, useState } from 'react';
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

const API_URL = 'http://localhost:3001';

interface ITopic {
  title: string;
  description: string;
  slug: string;
}

const TopicsPage: FC<TopicProps> = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [topics, setTopics] = useState<ITopic[]>([]);

  useEffect(() => {
    const fetchTopics = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_URL}/topics`);
        const topics = (await response.json()) as ITopic[];
        setTopics(topics);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopics();
  }, []);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTopic: ITopic = {
      title: title,
      description: description,
      slug: '',
    };
    console.log(newTopic);
    fetch(`${API_URL}/topics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTopic),
    }).then(() => {
      console.log('New topic added');
    });
  };

  return (
    <Container>
      <div className='mb-5'>
        {!isLoading && error && <div>ERROR!</div>}
        {isLoading && <div>Loading...</div>}
        {!isLoading && (
          <>
            {topics.map((topic) => (
              <Link
                style={{ textDecoration: 'none' }}
                to={'/forum/' + topic.slug}
              >
                <Card className='mb-2'>
                  <Card.Body>
                    <Card.Title>{topic.title}</Card.Title>
                    <Card.Text>
                      {topic.description}
                      <div className='mt-3'>
                        Posts <Badge bg='secondary'>0</Badge>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </>
        )}
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <div>
            <Form.Group className='mb-3' controlId='topicForm.Topic'>
              <Form.Label>Topic</Form.Label>
              <Form.Control
                type='text'
                placeholder='Topic'
                name='topic'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='topicForm.Descripton'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={4}
                name='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </div>
          <div className='float-end'>
            <Button type='submit'>Create new topic</Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default TopicsPage;
