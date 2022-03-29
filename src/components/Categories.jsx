import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CatergoryItem'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
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
