import React, { FC } from 'react';
import { MessagesPageWrapper } from './MessagesPage.styled.ts';
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
import {
  ArrowRight,
  ChatFill,
  ChatTextFill,
  Icon,
} from 'react-bootstrap-icons';

const contacts = [
  {
    username: 'jonas007',
    avatar:
      'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
  },
  {
    username: 'Tomas456',
    avatar:
      'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
  },
  {
    username: 'Petras7852',
    avatar:
      'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
  },
];

const user = {
  username: 'jonas007',
  avatar:
    'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/2800/Homer-Simpson.The-Simpsons.webp',
};

const messages = [
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
];

const renderedMessages = messages.map((message) => (
  <Card
    className='mb-2'
    style={{
      width: 70 + '%',
      float: user.username == message.created_by.username ? 'left' : 'right',
    }}
  >
    <Card.Body>
      <div className='mb-3'>
        <Image
          src={message.created_by.avatar}
          roundedCircle
          style={{ width: 50 + 'px', height: 50 + 'px' }}
        />
        <span style={{ padding: 10 + 'px' }}>
          {message.created_by.username}
        </span>
      </div>
      <Card.Text style={{ position: 'relative' }}>
        {message.message}
        <span
          className='text-muted'
          style={{ position: 'absolute', right: 0, bottom: 0 }}
        >
          {message.date_created}
        </span>
      </Card.Text>
    </Card.Body>
  </Card>
));

const renderedContacts = contacts.map((contact) => (
  <Card className='mb-2'>
    <Card.Body>
      <div className='mb-3'>
        <Image
          src={contact.avatar}
          roundedCircle
          style={{ width: 50 + 'px', height: 50 + 'px' }}
        />
        <span style={{ padding: 10 + 'px' }}>{contact.username}</span>
      </div>
    </Card.Body>
  </Card>
));

interface MessagesProps {}

const MessagesPage: FC<MessagesProps> = () => (
  <Container>
    <Row>
      <Col xs={12} md={3}>
        {renderedContacts}
      </Col>
      <Col xs={12} md={9}>
        <Row className='mb-5'>
          <Col>{renderedMessages}</Col>
        </Row>
        <Row>
          <Col md={10}>
            <Form.Control type='text' placeholder='Message' name='message' />
          </Col>
          <Col md={2} className='d-grid'>
            <Button type='submit'>Send</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default MessagesPage;
