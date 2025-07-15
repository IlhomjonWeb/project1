import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout.jsx'
import Home from './pages/home/Home.jsx'
import Contact from './pages/contact/Contact.jsx'
import FinanceTools from './pages/financetools/FinanceTools.jsx'
import Programs from './pages/programs/Programs.jsx'

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
        },
        {
          path: '/finance-tools',
          element: <FinanceTools />,
        },
        {
          path: '/programs',
          element: <Programs />,
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
