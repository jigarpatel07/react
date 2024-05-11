import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './constant/route.constant'
import View from './pages/View/View'
import AuthLayout from './pages/AuthLayout'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        {ROUTES.PRIVATE_ROUTE.map((route, index) => {
          const { element: Element, path } = route
          return (
            <Route
              key={index}
              path={path}
              element={
                <View>
                  <Element />
                </View>
              }
            />
          )
        })}
        {ROUTES.PUBLIC_ROUTE.map((route, index) => {
          const { element: Element, path } = route;
          return (
            <Route
              key={index}
              path={path}
              element={
                <AuthLayout>
                  <Element />
                </AuthLayout>
              }
            />
          );
        })}
      </Routes>
    </>
  )
}

export default App
