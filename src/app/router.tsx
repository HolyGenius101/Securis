import { createBrowserRouter } from 'react-router-dom'
import { MarketingLayout } from '../components/navigation/MarketingLayout'
import { ContactPage } from '../pages/ContactPage'
import { ForGymsPage } from '../pages/ForGymsPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProductPage } from '../pages/ProductPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MarketingLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'product',
        element: <ProductPage />,
      },
      {
        path: 'for-businesses',
        element: <ForGymsPage />,
      },
      {
        path: 'businesses',
        element: <ForGymsPage />,
      },
      {
        path: 'for-gyms',
        element: <ForGymsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
