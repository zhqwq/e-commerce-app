import styled from 'styled-components'
import { useState } from 'react'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 50%;
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 100%;
  margin: 20px 10px 0 0;
  padding: 10px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`

const Link = styled.a`
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`

const Error = styled.span`
  color: red;
`

// 登录页
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector(state => state.user)

  const handleClick = e => {
    e.preventDefault() // 阻止默认表单提交事件
    login(dispatch, { username, password })
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        {error && <Error>Something went wrong</Error>}
        <Form>
          <Input placeholder="username" onChange={e => setUsername(e.target.value)} />
          <Input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
        </Form>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  )
}

export default Login
