import styled from 'styled-components'

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
`

const Link = styled.a`
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`
// 登录页
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
        </Form>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  )
}

export default Login
