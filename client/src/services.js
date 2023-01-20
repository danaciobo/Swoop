
const baseURL = "http://localhost:4001"

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

export const getUserByEmail = async (email) => {
  try {
    const response = await fetch(`${baseURL}/users/${email}`)
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
