import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../stores/api';
import errorHandler from '../stores/errorHandler';


export const createCharacterStepone = createAsyncThunk(
    'character/createCharacterStepone',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('/ai-character/create-character-step1', userInput);
        if (response?.data?.status_code === 201) {
          return response.data;
        } else {
          if (response?.data?.errors) {
            return rejectWithValue(response.data.errors);
          } else {
            return rejectWithValue('Something went wrong.');
          }
        }
      } catch (err) {
        return rejectWithValue(err);
      }
    }
  );


  export const createCharacterSteptwo = createAsyncThunk(
    'character/createCharacterSteptwo',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('/ai-character/create-character-step2', userInput);
        if (response?.data?.status_code === 200) {
          return response.data;
        } else {
          if (response?.data?.errors) {
            return rejectWithValue(response.data.errors);
          } else {
            return rejectWithValue('Something went wrong.');
          }
        }
      } catch (err) {
        return rejectWithValue(err);
      }
    }
  );


  export const createCharacterStepthree = createAsyncThunk(
    'character/createCharacterSteptwo',
    async (userInput, { rejectWithValue }) => {
      try {
        const response = await api.post('/ai-character/create-character-step3', userInput);
        console.log("response?.data?.status_code!==",response?.data?.status_code)
        if (response?.data?.status_code === 200) {
          return response.data;
        } else {
          if (response?.data?.errors) {
            return rejectWithValue(response.data.errors);
          } else {
            return rejectWithValue('Something went wrong.');
          }
        }
      } catch (err) {
        return rejectWithValue(err);
      }
    }
  );


  const initialState = {
    message: null,
    error: null,
    loading: false,
    // plans: [],
    // subscriptionHistoryList: [],
  };



  const CreateCharacterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
},
    extraReducers: (builder) => {
      builder
        .addCase(createCharacterStepone.pending, (state) => {
          state.message = null;
          state.loading = true;
          state.error = null;
        })
  
        .addCase(createCharacterStepone.fulfilled, (state, { payload }) => {
          const { user_id, email, otp_verified, access_token } = payload;
          state.loading = false;
          state.message = payload;
        //   state.currentUser = {
        //     user_id: user_id,
        //     email: email,
        //     otp_verified: otp_verified,
        //   };
        })
  
        .addCase(createCharacterStepone.rejected, (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        })
    },
  });
  export const {  } = CreateCharacterSlice.actions;
  
  export default CreateCharacterSlice.reducer;