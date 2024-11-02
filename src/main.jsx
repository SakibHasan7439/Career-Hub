import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Root from './Components/Root'
import ErrorPage from './Components/ErrorPage/Errorpage'
import Statistics from './Components/Statistics/Statistics'
import AppliedPath from './Components/AppliedPath/AppliedPath'
import JobDetails from './Components/JobDetails/JobDetails'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Statistics></Statistics>
      },

      {
        path: '/featuredJobs/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('/jobs.json')
      },

      {
        path: '/applied-job',
        element: <AppliedPath></AppliedPath>,
        loader: ()=> fetch('/jobs.json')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
