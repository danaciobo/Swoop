
const baseURL = "http://localhost:3005";


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

export const register = async (user) => {
  try {
    const response = await fetch(`${baseURL}/register`, {
      method: 'POST',
      credentials: 'include',
    mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    return response.json();
  } catch (err) {
    console.log(err)
    return false
  }
}

export const login = (user) => {

  return fetch(`${baseURL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};


// export const getUserById = async (id) => {
//   try {
//     const response = await fetch(`${baseURL}/users/${id}`)
//     return response.json();
//   } catch (err) {
//     console.log(err)
//     return false
//   }
// }

export const profile = () => {

  return fetch(`${baseURL}/me`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

};

export const logout = () => {

  return fetch(`${baseURL}/logout`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  // REMOVE-END
};

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
