
const baseURL = "http://localhost:3005"


export const addItem = async (data) => {
  try {
    const response = await fetch(`${baseURL}/items`,{
      method: 'POST',
      // headers: { 'Content-Type': 'multipart/form-data' },
      body: data
    })
    return response.json();
  }
   catch (err) {
  console.log(err)
  return false
}
}

export const registerUser = async (userInfo) => {
  try {
    const response = await fetch(`${baseURL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo)
    })
    return response.json();
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${baseURL}/users/${id}`)
    return response.json();
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getItemById = async (id) => {
  try {
    const response = await fetch(`${baseURL}/items/${id}`)
    return response.json();
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getItemByCategory = async (category) => {
  try {
    const response = await fetch(`${baseURL}/items/category/${category}`)
    return response.json();
  } catch (err) {
    console.log(err)
    return false
  }
}
