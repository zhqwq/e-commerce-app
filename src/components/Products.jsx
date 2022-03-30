import styled from 'styled-components'
import { products } from '../mock_data'
import Product from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`

const Prodocuts = () => {
  return (
    <Container>
      {products.map(item => (
        <Product item={item} key={item.key} />
      ))}
    </Container>
  )
}

export default Prodocuts
