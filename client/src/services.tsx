import {User} from './Types/Types'
const baseURL = "http://localhost:3006"

// export const getData = async () => {
//   try {
//     const response = await fetch(`${baseURL}/items`);
//     if (!response.ok) {
//       throw new Error(
//         `This is an HTTP error: The status is ${response.status}`
//       );
//     }
//     const actualData = await response.json();
//     console.log(items)
//     if (actualData) {
//       setItems(actualData);
//     }

//   } catch (err) {
//     console.log(err)
//   }
// }


export const addItem = async (data: any) => {
   console.log("data in services", ...data)
    return await fetch(`${baseURL}/items`,{
      method: 'POST',
      body: data,
      credentials: 'include',
      mode:'cors'
    })
    .then(data => data.json())
    .then(result => result)
    // console.log("this is in the services req", response.json())
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
