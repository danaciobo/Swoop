import { User } from './Types/Types'

const baseURL = "http://localhost:3006"



export const addItem = async (data: any) => {
  return await fetch(`${baseURL}/items`,{
    method: 'POST',
    body: data,
    credentials: 'include',
    mode:'cors'
  })
  .then(data => data.json())
  .then(result => result)
}

export const registerUser = async (userInfo: User) => {
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

export const getUserById = async (id: String) => {
  try {
    const response = await fetch(`${baseURL}/users/${id}`)
    return response.json();
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getUserByEmail = async (email:String) => {
  try {
    const response = await fetch(`${baseURL}/users/${email}`)
    return response.json();
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getItemById = async (id:String) => {
  try {
    const response = await fetch(`${baseURL}/items/${id}`)
    return response.json();
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getItemByCategory = async (category:String) => {
  try {
    const response = await fetch(`${baseURL}/items/category/${category}`)
    return response.json();
  } catch (err) {
    console.log(err)
    return false
  }
}
