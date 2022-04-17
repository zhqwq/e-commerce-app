import { createSlice } from '@reduxjs/toolkit'

// Redux Toolkit 模式
const userSlice = createSlice({
  name: 'user',
  // 初始化状态
  initialState: {
    currentUser: null, // 保存当前用户信息
    isFetching: false,
    error: false
  },
  // 在 Redux Toolkit 中, reducers 函数定义状态状态如何更新
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers.
    // It doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new immutable state based off those changes
    loginStart: (state) => {
      state.isFetching = true
    },
    loginSuccess: (state, action) => {
      state.isFetching = false
      state.currentUser = action.payload
    },
    loginFailure: (state) => {
      state.isFetching = false
      state.error = true
    },

  }
})

// Action creators are generated for each case reducer function
// 导出 actions创建器 以手动调用 dispatch(action)
export const { loginStart, loginSuccess, loginFailure  } = userSlice.actions

export default userSlice.reducer
