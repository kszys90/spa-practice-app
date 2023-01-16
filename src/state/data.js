export const LOAD = 'data/LOAD'
export const INITSTATE = 'data/INITSTATE'
export const FILTER = 'data/FILTER'

export const loadData = (data) => ({
  type: LOAD,
  payload: { data }
})
export const createInitState = (data) => ({
  type: INITSTATE,
  payload: { data }
})
export const filterData = (key) => ({
  type: FILTER,
  payload: { key }
})

const initialState = {
  initData: [],
  state: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state, initData: action.payload.data
      }
    case INITSTATE:
      return {
        ...state, state: action.payload.data
      }
    case FILTER:
      return {
        ...state, state: state.initData.value.data.filter(({ id }) => id === Number(action.payload.key))
      }
    default:
      return state
  }
}

export default reducer
