import './App.css'
import { Routes, Route } from 'react-router-dom'
import NoPage from './pages/NoPage'
import Login from './pages/Login'
import { ROUTES } from './constant/route.constant'
import View from './pages/View'
import AuthLayout from './pages/AuthLayout'
function App() {

  return (
    <>
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
