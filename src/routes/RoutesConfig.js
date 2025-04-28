import React from 'react';
import OutsideLayout from '../ui/layout/OutsideLayout.jsx';
import InsideLayout from '../ui/layout/InsideLayout.jsx';

import Login from '../pages/Auth/Login.jsx';
import Registration from '../pages/Auth/Registration.jsx';
import Landing from '../pages/Landing/Landing.jsx';

import GetStarted from '../pages/GetStarted/GetStarted.jsx';
import GetStartedLayout from '../ui/layout/GetStartedLayout.jsx';
import Chats from '../pages/Chats/Chats.jsx';
import MyCharacters from '../pages/MyCharacters/MyCharacters.jsx';
import Backstory from '../pages/Backstory/Backstory.jsx';
import Voice from '../pages/Voice/Voice.jsx';
import Plans from '../pages/Auth/Plans/Plans.jsx';



const allRoutes = [
  {
    path: '/',
    element: <OutsideLayout />,
    children: [{ index: true, element: <Landing /> }],
  },
  {
    path: '/get-started',
    element: <GetStartedLayout />,
    children: [{ index: true, element: <GetStarted /> }],
  },
  {
    path: '/login',
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: '/signup',
    children: [{ index: true, element: <Registration /> }],
  },
  {
    path: '/my-characters',
    element: <InsideLayout />,
    children: [{ index: true, element: <MyCharacters /> }],
  },
  {
    path: '/plans',
    element: <InsideLayout />,
    children: [{ index: true, element: <Plans /> }],
  },
  {
    path: '/chats',
    element: <InsideLayout />,
    children: [{ index: true, element: <Chats /> }],
  },

  
  {
    path: '/backstory',
    element: <InsideLayout />,
    children: [{ index: true, element: <Backstory /> }],
  },
  {
    path: '/voice',
    element: <InsideLayout />,
    children: [{ index: true, element: <Voice /> }],
  },

  {
    path: '*',
    element: 'Outside page not found',
  },
];
export default allRoutes;
