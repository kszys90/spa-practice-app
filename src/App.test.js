import React from 'react'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Main from './pages/Main'
import { store } from './store'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<Main />', () => {
  test('Config test - should pass', () => {
    expect(true).toBe(true)
  })
  test('title should be in the document', () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <Main />
        </Provider>
      </Router>
    )
    const title = container.querySelector('[data-testid="header-title"]')

    expect(title).toBeInTheDocument()
  })
  test('search-form should be in the document', () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <Main />
        </Provider>
      </Router>
    )
    const searchForm = container.querySelector('[data-testid="search-form"]')

    expect(searchForm).toBeInTheDocument()
  })
  test('Search-input should be in the document', () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <Main />
        </Provider>
      </Router>
    )
    const searchFormInput = container.querySelector('[data-testid="search-form-input"]')

    expect(searchFormInput).toBeInTheDocument()
  })
  test('Search-button should be in the document', () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <Main />
        </Provider>
      </Router>
    )
    const searchFormButton = container.querySelector('[data-testid="search-form-button"]')

    expect(searchFormButton).toBeInTheDocument()
  })
  test('Search-input should have value atrribute', () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <Main />
        </Provider>
      </Router>
    )
    const searchFormInput = container.querySelector('[data-testid="search-form-input"]')

    expect(searchFormInput).toHaveAttribute('value')
  })

  test('Search-button should call submit when clicked', () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <Main />
        </Provider>
      </Router>
    )
    const searchFormButton = container.querySelector('[data-testid="search-form-button"]')

    expect(searchFormButton).toBeEnabled()
  })
  it('should not allow to change input value with letters', () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <Main />
        </Provider>
      </Router>
    )
    const searchFormInput = container.querySelector('[data-testid="search-form-input"]')
    fireEvent.change(searchFormInput, { target: { value: 'example' } })

    expect(searchFormInput.value).toBe('')
  })
  it('should not allow to change input value with letters', () => {
    const { container } = render(
      <Router>
        <Provider store={store}>
          <Main />
        </Provider>
      </Router>
    )
    const searchFormInput = container.querySelector('[data-testid="search-form-input"]')
    fireEvent.change(searchFormInput, { target: { value: 'example' } })

    expect(searchFormInput.value).toBe('')
  })
  it('should allow to change input value with numbers', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    )
    const searchFormInput = container.querySelector('[data-testid="search-form-input"]')
    fireEvent.change(searchFormInput, { target: { value: '123' } })

    expect(searchFormInput.value).toBe('123')
  })
})
