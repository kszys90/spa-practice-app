import React from 'react'
import '../App.css'
import { getData } from '../api/getData'
import { useAsyncFn } from 'react-use'
import Oval from 'react-loading-icons/dist/esm/components/oval'
import { renderItem } from '../components/renderItem'

export const Main = () => {
  const [state, doFetch] = useAsyncFn(getData)

  React.useEffect(() => {
    doFetch()
  }, [doFetch])

  function handleSubmit (e) {
    e.preventDefault(e)
    return console.log('submit')
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

        {state.loading ?
          <Oval stroke={'#000000'} />
          :
          state.error ?
            <h2 className={'error--message'}>Error: {state.error.message}</h2>
            :
              !state.value ?
                'No data'
                :
                <table className={'content__table'}>
                  <thead className={'content__table--head'}>
                    <tr>
                      <th>ID:</th>
                      <th>NAME:</th>
                      <th>YEAR:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.value.data.map(item => renderItem(item))}
                  </tbody>
                </table>
        }

      </div>
    </div>
  )
}

export default Main
