export const RETRIEVE_DATA = 'RETRIEVE_DATA'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'

export const retrieveData = (url) => {
  console.log('url', url);
  const body = {
    repository_url: url
  }
  return async dispatch => {
    const response = await fetch(`http://localhost:3000/api/pulls`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const pulls = await response.json()
    dispatch({
        type: RETRIEVE_DATA,
        payload: pulls
    }) 
  }
}

export const handleChange = (name, value) => {
  return {
    type: HANDLE_CHANGE,
    payload: {
      name,
      value
    }
  }
}
