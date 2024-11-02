import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainLayout from './layout/MainLayout.tsx'
import About from './pages/About/index.tsx'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Experience from './pages/Experience/index.tsx'
import Work from './pages/Work/index.tsx'
import Contact from './pages/Contact/index.tsx'
import Skills from './pages/Skills/index.tsx'
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/experience",
        element: <Experience />
      },
      {
        path: "/work",
        element: <Work />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "*",
        element: <Navigate to={'/about'} />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
