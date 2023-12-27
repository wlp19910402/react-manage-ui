import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import Login from '@/views/Login/index'
import Error from '@/layouts/Error'
const MainLayout = lazy(() => import('@/layouts/MainLayout'))
const Home = lazy(() => import('@/views/Home'))
const About = lazy(() => import('@/views/About'))

const withLoadingComponent = (comp: JSX.Element) => {
  return (
    <React.Suspense fallback={<div>loading....</div>}>{comp}</React.Suspense>
  )
}

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/home',
        element: withLoadingComponent(<Home />),
      },
      {
        path: '/about',
        element: withLoadingComponent(<About />),
      },

      {
        path: '/s/3',
        element: withLoadingComponent(<Home />),
      },
      {
        path: '/s/4',
        element: withLoadingComponent(<About />),
      },
      {
        path: '/s/*',
        element: <Error />,
      },
      {
        path: '/t/6',
        element: withLoadingComponent(<About />),
      },
      {
        path: '/t/7',
        element: withLoadingComponent(<About />),
      },
      {
        path: '/t/*',
        element: <Error />,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
]
export default routes
