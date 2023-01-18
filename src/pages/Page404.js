import React from 'react'
import LinkNav from '../components/LinkNav'

export const Page404 = () => {
  return (
    <div
      className={'background'}
      style={{ textAlign: 'center' }}
    >
      <h1 className={'error--message'}>Error 404</h1>
      <h3 className={'error--message'}>Not found</h3>
      <LinkNav to={'/'} >Back to home page</LinkNav>
    </div>
  )
}
