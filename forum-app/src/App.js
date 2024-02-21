import styled from 'styled-components';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page404 from './pages/Page404/Page404.tsx';
import RegisterPage from './pages/Register/RegisterPage.tsx';
import MessagesPage from './pages/Messages/MessagesPage.tsx';
import LoginPage from './pages/Login/LoginPage.tsx';
import ProfilePage from './pages/Profile/ProfilePage.tsx';
import TopicsPage from './pages/Topic/TopicsPage.tsx';
import DiscussionListPage from './pages/DiscussionList/DiscussionListPage.tsx';
import DiscussionPage from './pages/Discussion/DiscussionPage.tsx';
import MainLayout from './pages/MainLayout.js';
import StrippedLayout from './pages/StrippedLayout.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<StrippedLayout />}>
            <Route path='/register' element={<RegisterPage />}></Route>
          </Route>
          <Route path='/login' element={<StrippedLayout />}>
            <Route path='/login' element={<LoginPage />}></Route>
          </Route>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<TopicsPage />}></Route>
            <Route path='/messages' element={<MessagesPage />}></Route>
            <Route path='/profile' element={<ProfilePage />}></Route>
            <Route path='/forum' element={<TopicsPage />}></Route>
            <Route
              path='/forum/:topic'
              element={<DiscussionListPage />}
            ></Route>
            <Route
              path='/forum/:topic/:id'
              element={<DiscussionPage />}
            ></Route>
          </Route>
          <Route path='*' element={<Page404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
