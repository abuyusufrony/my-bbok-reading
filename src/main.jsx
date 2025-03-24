import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Hook from './Components/Hook/Hook.jsx'
import Home from './Components/Home/Home.jsx'
import Dashborad from './Components/Dashbord/Dashborad.jsx'
import BookDetail from './Components/BookDetail/BookDetail.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element:
      <Hook></Hook>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books/:bookId',

        element: <BookDetail></BookDetail>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: 'dashbord',
        element: <Dashborad></Dashborad>
      }
    ]

  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
