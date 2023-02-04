

const baseURL = 'http://localhost:3005';

export const addItem = async (data) => {
  try {
    const response = await fetch(`${baseURL}/items`,{
      method: 'POST',
      credentials: 'include',
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

export const editItem = async (data, id) => {
  try {
    const response = await fetch(`${baseURL}/editItem/${id}`,{
      method: 'PUT',
      credentials: 'include',
      body: data
    })
    return response.json();
  }
   catch (err) {
  console.log(err)
  return false;
}
}

export const deleteItem = async (seller, id) => {
  try {
    const response = await fetch(`${baseURL}/items/${seller}/${id}`,{
      method: 'DELETE',
      credentials: 'include',
    })
    return response;
  }
   catch (err) {
  console.log(err)
  return false;
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
    const response = await fetch(`${baseURL}/items/${category}`)
    return response.json();
  } catch (err) {
    console.log(err)
    return false;
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

};

export const checkoutStripe = async (cart) =>{
  try {
    console.log(cart)
    const response = await fetch(`${baseURL}/create-checkout-session`, {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(
          {cart: cart}
          ),
    })
    const resp = await response.json();
    window.location.href = resp.url;
  } catch (err) {
    console.log(err)
    return false;
  }

}


