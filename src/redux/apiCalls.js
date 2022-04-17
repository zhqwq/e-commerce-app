import { loginStart, loginFailure, loginSuccess } from './userSlice'
import { publicRequest } from '../utils/request'

// dispatch arg comes from useDispatch hook
export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  }catch (err) {
    dispatch(loginFailure())
  }
}