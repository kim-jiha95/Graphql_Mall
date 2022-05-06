
import React from 'react';
import GlobalLayout from './pages/_layout'

const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicProductsId = React.lazy(() => import('./pages/products/[id]'));


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true},
      { path: '/products/:id', element: <DynamicProductsId />, },
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/products/:id' },
]
