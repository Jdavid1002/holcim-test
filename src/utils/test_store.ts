import configureStore from 'redux-mock-store';

const initialState = {
  authSlice: {
    isLoggedIn: false
  },
  userSlice: {
    name: "",
    email: "",
    password: "",
    _id: "",
    createdAt: "",
    updatedAt: "",
    __v: 0
  }
}

const mockStore = configureStore();
export const store = mockStore(initialState)