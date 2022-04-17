import styled from 'styled-components'
import Product from './Product'
import { useEffect, useState } from 'react'
import axios from 'axios'
import token from '../data/token'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`

const Products = ({ category, filter, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  // fetch products from API
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/product/all', {
          headers: {
            token
          },
          params: {
            category
          }
        })
        setProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [category])

  // filter products by color and size
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter(item =>
          // The every() method tests whether all elements in the array pass the test
          Object.entries(filter).every(([key, value]) => item[key].includes(value))
        )
      )
  }, [products, category, filter])

  // filter products by sort
  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts(prev => [...prev].sort((a, b) => a.createdAt - b.createdAt))
    } else if (sort === 'asc') {
      setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price))
    } else if (sort === 'desc') {
      setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])

  // If there has category show filteredProducts, otherwise show products
  return <Container>{category ? filteredProducts.map(item => <Product item={item} key={item._id} />) : products.map(item => <Product item={item} key={item._id} />)}</Container>
}

export default Products
