
export const getData = () => {
  return fetch('https://reqres.in/api/products?per_page=100')
    .then(resp => {
      if (resp.ok) {
        return resp.json()
      }
      throw new Error('Network Error!')
    })
    .catch(error => {
      throw (error)
    })
}
