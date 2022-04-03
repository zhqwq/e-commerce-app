import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CatergoryItem'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column', padding: '0px' })}
`

const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem item={item} key={item.key} />
      ))}
    </Container>
  )
}

export default Categories
