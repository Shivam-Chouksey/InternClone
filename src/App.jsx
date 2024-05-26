import './App.css'
// import loginContext from './components/context/context';
// import { useContext } from 'react';
// import Login from './components/login/login';
import Layout from './components/Layout/Layout';
// import 'bootstrap/dist/css/bootstrap.min.css';
import PlacementCourses from './components/PlacementCourses/Courses';
import { RouterProvider,createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  { path: '/', element: <Layout /> },
  { path: '/Placement Courses', element: <PlacementCourses /> },
])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
