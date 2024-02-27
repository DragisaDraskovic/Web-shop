import React, { useEffect, useState } from 'react'

import ItemService from '../../services/ItemService'
import './ProductCategory.css'


import SkeletonCard from '../skeleton/skeletonCard/SkeletonCard.js'
import Card from '../card/Card.js'

const ProductCategory = ( {categorysName} ) => {

  const [ categoryProduct, setCategoryProduct ] = useState([])
  const [ allProduct, setAllProduct ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() =>{
      getCategoryProduct(categorysName)
      getAllItem()
      setTimeout(() => {
        setIsLoading(false)
      }, 700)
    }, [])

  const getCategoryProduct = ( categoryName ) => {
    ItemService.getCategory(categoryName)
    .then((respnse) =>
      setCategoryProduct(respnse.data)
    )
    .catch((error) =>
      console.error(error))
  }

  const getAllItem = () => {
    ItemService.getAllItems()
    .then((respnse) => {
      setAllProduct(respnse.data)
    })
    .catch((error) => {
      console.error(error)
    })
  }


  return (
    <>
        { categorysName === 'all' ?
            <div className='shopCardsContainer'>
                {allProduct.map(product => {
                if(isLoading === true) {
                  return <SkeletonCard key={product.id} />
                } else {
                  return <Card product={product} key={product.id}/>
                }}
                )}
            </div>
        :
            <div className='shopCardsContainer'>
              {categoryProduct.map(product => {
              if(isLoading === true) {
                return <SkeletonCard key={product.id}/>
              } else {
                return <Card product={product} key={product.id}/>
              }}
              )}
           </div>
        }
    </>
  )
}

export default ProductCategory