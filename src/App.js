import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Main from './pages/Main'
import MainContent from './pages/MainContent'
import { Page404 } from './pages/Page404'

function App () {
  return (
    <Routes>
      <Route
        path={'/'}
        element={<Navigate
          replace
          to={'/page/1'}
                 />}
      />
      <Route
        path={'/'}
        element={<Main />}
      >
        <Route
          path={'page/:pageNo'}
          element={<MainContent />}
        />
      </Route>
      {/* <Route
        path={'*'}
        element={<Navigate
          replace
          to={'/404'}
                 />}
      /> */}

      <Route
        path={'/404'}
        element={<Page404 />}
      >
      </Route>
    </Routes>
  )
}

export default App
