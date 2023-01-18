import React from 'react'
import '../App.css'
import { getData } from '../api/getData'
import { useAsyncFn } from 'react-use'
import { useDispatch, useSelector } from 'react-redux'
import { createInitState, filterData, loadData } from '../state/data'
import { useSearchParams } from 'react-router-dom'
import Oval from 'react-loading-icons/dist/esm/components/oval'
import Table from '../components/Table'
import TableHeader from '../components/TableHeader'
import TableRow from '../components/TableRow'
import PagesNav from '../components/PagesNav/PagesNav'

export const Main = () => {
  const [state, doFetch] = useAsyncFn(getData)
  const [search, setSearch] = useSearchParams()
  const [page, setPage] = React.useState(search.get('page') || 1)
  const dispatch = useDispatch()
  const [inputVal, setInputVal] = React.useState('')
  const handleSearch = (e) => {
    if (!isNaN(e.target.value)) {
      setInputVal(e.target.value)
    }
  }
  const initData = useSelector(state => state.data.initData)
  const data = useSelector(state => state.data.state)

  function handleSubmit (e) {
    e.preventDefault(e)
    setSearch({ ...search, search: inputVal })
    if (inputVal === '') dispatch(createInitState(state.value.data))
    else {
      dispatch(filterData(inputVal))
    }
  }

  function renderTable () {
    const limit = 5
    const length = data.length
    const begin = limit * (page - 1)
    const end = page * limit
    const pages = Math.ceil(length / limit)
    const currentItems = data.slice(begin, end) || []

    return (
      <>
        <div className={'content__table--container'}>
          <Table cn={'content__table'}>
            <TableHeader
              cn={'content__table--head'}
              elementsCn={'content__table--th'}
              elements={['ID:', 'NAME:', 'YEAR:']}
            />
            <tbody>
              {data.length !== 0 ?
                currentItems.map(
                  item => <TableRow
                    key={item.id}
                    item={item}
                          />
                )
                :
                <tr><td></td><td>No data</td></tr>}
            </tbody>
          </Table>
        </div>
        <PagesNav
          pages={pages}
          data={currentItems}
          value={page}
          change={(value) => setPage(Number(value))}
          changeURL={(value) => setSearch({ ...search, page: value })}
        />
      </>
    )
  }

  React.useEffect(() => {
    doFetch()
  }, [doFetch])
  React.useEffect(() => {
    setPage(Number(search.get('page')) || 1)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  React.useEffect(() => {
    if (state) {
      dispatch(loadData(state))
      if (state.value && state.value.data) {
        dispatch(createInitState(state.value.data))
        if (search.get('search')) {
          dispatch(filterData(search.get('search')))
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, state])

  return (
    <div
      className={'background'}
    >
      <header
        className={'header'}
      >
        <div>
          <h1
            className={'header__title'}
            data-testid={'header-title'}
          >
            <span className={'header__title--modified'}>Search</span> Items
          </h1>
          <h4
            className={'header__sub-title'}
            data-testid={'header-title__desc'}
          >
            Type <span className={'header__sub-title--modified'}>Id</span> and find Your Item!
          </h4>
        </div>
      </header>
      <div className={'search-tools__container'}>
        <form
          onSubmit={(e) => handleSubmit(e)}
          id={'search-form'}
          data-testid={'search-form'}
        >
          <label htmlFor={'search'}>
            <input
              data-testid={'search-form-input'}
              type={'text'}
              name={'search'}
              className={'search-tools__input'}
              placeholder={'Type id number'}
              value={inputVal}
              onChange={(e) => handleSearch(e)}
              autoFocus
            />
          </label>
          <button
            data-testid={'search-form-button'}
            type={'submit'}
            className={'search-tools__button'}
            form={'search-form'}
          >Search
          </button>
        </form>
      </div>
      <div className={'content__container'}>
        { state.loading ?
          <Oval stroke={'#000000'} />
          :
          state.error ?
            <>
              <h2 className={'error--message'}>Error: {state.error.message}</h2>
              <h4 className={'error--message'}>Sorry, we are unable to access the database. Please refresh or try again later</h4>
            </>
            :
              !state.value ?
                'No data'
                :
                initData.value ? renderTable() : null
        }
      </div>
    </div>
  )
}

export default Main
