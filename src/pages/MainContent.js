/* eslint-disable no-unused-vars */
import React from 'react'
import Oval from 'react-loading-icons/dist/esm/components/oval'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RenderTableElement } from '../components/RenderTableElement'
import { Pagination } from '@mui/material'

const MainContent = () => {
  const initData = useSelector(state => state.data.initData)
  const state = useSelector(state => state.data.state)
  const navigate = useNavigate()
  const { pageNo } = useParams()
  const [page, setPage] = React.useState(Number(pageNo))
  const handleChange = (event, value) => {
    setPage(value)
  }
  const limit = 5
  const length = state.length
  const begin = limit * (pageNo - 1)
  const end = pageNo * limit
  const pages = Math.ceil(length / limit)
  const currentItems = state.slice(begin, end) || []

  React.useEffect(() => {
    navigate(`/page/${page}`)
    if (state && page > pages) { setPage(1) }
    if (page < 1) { setPage(1) }
  }, [navigate, page, pages, state])

  function renderTable () {
    return (
      <>
        <div className={'content__table--container'}>
          <table className={'content__table'}>
            <thead className={'content__table--head'}>
              <tr>
                <th className={'content__table--th'}>ID:</th>
                <th className={'content__table--th'}>NAME:</th>
                <th className={'content__table--th'}>YEAR:</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length !== 0 && end >= limit
                ? currentItems.map(item => <RenderTableElement
                    key={item.id}
                    item={item}
                                           />)
                : <tr><td></td><td>No data</td></tr>}
            </tbody>
          </table>
        </div>
        {renderNav()}
      </>
    )
  }

  function renderNav () {
    return (
      <div className={'content__nav--container'}>
        <Pagination
          color={'primary'}
          count={pages}
          page={page}
          onChange={handleChange}
        />
      </div>
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
