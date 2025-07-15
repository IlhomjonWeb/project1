import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout.jsx'
import Home from './pages/home/Home.jsx'
import Contact from './pages/contact/Contact.jsx'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Mainlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/contact',
          element: <Contact />,
        }
      ]
    }
  ])

  return (
    <>
      <h1>Hello World 2</h1>
      <RouterProvider router={routes} />
      <h1>Hello World</h1>
    </>
  )
}

export default App
