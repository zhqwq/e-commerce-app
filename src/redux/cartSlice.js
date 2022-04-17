import { createSlice } from '@reduxjs/toolkit'

// Redux Toolkit 模式
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  // 在 reducers 中定义修改对应状态的方法
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers.
    // It doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new immutable state based off those changes
    addProduct: (state, action) => {
      state.quantity += 1
      state.products.push(action.payload)
      state.total += action.payload.price * action.payload.quantity
    }
  }
})

// Action creators are generated for each case reducer function
// 导出 actions 创建器 以手动调用 dispatch(action)
export const { addProduct } = cartSlice.actions

// 导出 reducer 配置 store
export default cartSlice.reducer
