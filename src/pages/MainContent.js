/* eslint-disable no-unused-vars */
import React from 'react'
import Oval from 'react-loading-icons/dist/esm/components/oval'
import { useSelector } from 'react-redux'
import { renderItem } from '../components/renderItem'

const MainContent = () => {
  const initData = useSelector(state => state.data.initData)
  const state = useSelector(state => state.data.state)

  function renderTable () {
    return (
      <table className={'content__table'}>
        <thead className={'content__table--head'}>
          <tr>
            <th className={'content__table--th'}>ID:</th>
            <th className={'content__table--th'}>NAME:</th>
            <th className={'content__table--th'}>YEAR:</th>
          </tr>
        </thead>
        <tbody>
          {state.map(item => renderItem(item))}
        </tbody>
      </table>
    )
  }
  return (
    <div>
      { initData.loading ?
        <Oval stroke={'#000000'} />
        :
        initData.error ?
          <h2 className={'error--message'}>Error: {initData.error.message}</h2>
          :
            !initData.value ?
              'No data'
              :
              initData.value ? renderTable() : null
        }
    </div>
  )
}

export default MainContent
