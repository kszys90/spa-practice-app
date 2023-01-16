import React from 'react'
import '../App.css'
import { getData } from '../api/getData'
import { useAsyncFn } from 'react-use'
import { useDispatch } from 'react-redux'
import { createInitState, filterData, loadData } from '../state/data'
import { Outlet } from 'react-router-dom'

export const Main = () => {
  const [state, doFetch] = useAsyncFn(getData)
  const [inputVal, setInputVal] = React.useState('')
  const dispatch = useDispatch()

  React.useEffect(() => {
    doFetch()
  }, [dispatch, doFetch])
  React.useEffect(() => {
    if (state) {
      dispatch(loadData(state))
      if (state.value && state.value.data) {
        dispatch(createInitState(state.value.data))
      }
    }
  }, [dispatch, state])

  function handleSubmit (e) {
    e.preventDefault(e)
    if (inputVal === '') dispatch(createInitState(state.value.data))
    else {
      dispatch(filterData(inputVal))
    }
  }
  function handleInputChange (e) {
    if (!isNaN(e.target.value)) { setInputVal(e.target.value) }
  }

  return (
    <div
      className={'background'}
    >
      <header
        className={'header'}
      >
        <div>
          <h1 className={'header__title'}><span className={'header__title--modified'}>Search</span> Items</h1>
          <h4 className={'header__sub-title'}>Type <span className={'header__sub-title--modified'}>Id</span> and find Your Item!</h4>
        </div>
      </header>
      <div className={'search-tools__container'}>
        <form
          id={'search-form'}
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor={'search'}>
            <input
              type={'text'}
              name={'search'}
              className={'search-tools__input'}
              placeholder={'Type id number'}
              value={inputVal}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <button
            type={'submit'}
            className={'search-tools__button'}
            form={'search-form'}
          >Search
          </button>
        </form>
      </div>
      <div className={'content__container'}>

        <Outlet />
      </div>
    </div>
  )
}

export default Main
