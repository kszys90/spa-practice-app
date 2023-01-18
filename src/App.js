import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Main from './pages/Main'
import { Page404 } from './pages/Page404'

function App () {
  return (
    <Routes>
      <Route
        path={'/'}
        element={<Main />}
      >
      </Route>
      <Route
        path={'*'}
        element={
          <Navigate
            replace
            to={'/404'}
          />}
      />
      <Route
        path={'/404'}
        element={<Page404 />}
      >
      </Route>
    </Routes>
  )
}

export default App
