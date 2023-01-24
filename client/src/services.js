const baseURL = "http://localhost:4001"

export const addItem = async (data) => {
  try {
    const response = await fetch(`${baseURL}/items`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    return response.json();
  }
   catch (err) {
  console.log(err)
  return false
}
}

export const  deleteItem = async (itemId) => {
  try {
    const response = await fetch(`${baseURL}/items/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id :itemId})
    })
    return 
  } catch (err) {
    console.log(err)
    return false
  }
}

export const updateItem = async (id, content) => {
  try {
    const response = await fetch(`${baseURL}/items`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({itemId : id ,updates :content})
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


export const getUserByEmail = async (email) => {
  try {
    const response = await fetch(`${baseURL}/users`,{
    
    method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email :email})
    })
    console.log(response)
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

