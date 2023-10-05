
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users:[],
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated:false
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
        console.log(action.payload);
      state.users.push(action.payload)
      const registerUserData = JSON.parse(localStorage.getItem('register-user')) || [];

     
      registerUserData.push(action.payload);

      localStorage.setItem('register-user', JSON.stringify(registerUserData));
  
    },
    login: (state, action) => {
      const userEmail = action.payload.email;
      const registerUserData = JSON.parse(localStorage.getItem('register-user'));

     
      const user = registerUserData.find((user) => user.email === userEmail);

      if (user) {
        state.isAuthenticated=true;
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user)); // Store user data in local storage
      }else{
        state.isAuthenticated=false;

      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated=false
      localStorage.removeItem('user'); 
    },
    getUser:(state)=>{
        const user=localStorage.getItem('user')
        if(user){
            state.isAuthenticated=true;
        }else{
          state.isAuthenticated=false;
        }
    }
  },
});

export const { register, login, logout,getUser } = userSlice.actions;

export default userSlice.reducer;
