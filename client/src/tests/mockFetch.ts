const mockResponse = {
  title: 'item3', description: 'description3',
  category: 'category3', price: '10',
  quantity: '5', location: 'location3', image: 'file.jpg'
};


export default async function mockFetch(url:string) {
  switch (url) {
    case "http://localhost:3006/items":
      return {
        json: async () => mockResponse
      }
    default :
      return {
        json: async () => {}
      }
  }
}

export const MockUser = {
  email: 'user@user.com',
  firstName: 'John',
  lastName: 'Doe',
  phoneNumber:'999-999-9999'
};

export const MockItem = {
  title: 'item3',
  description: 'description3',
  category: 'category3',
  price: '10',
  quantity: '5',
  location: 'location3',
  image: 'image',
  _id: '129318293',
  date_added: new Date(1609459200000), seller: MockUser
};

