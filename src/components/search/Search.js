import React, { useEffect, useMemo, useState } from 'react'

import './Search.css'
import ItemService from '../../services/ItemService';
import SkeletonCard from '../skeleton/skeletonCard/SkeletonCard.js'
import Card from '../card/Card.js';
import { PiSmileySadBold as Smile } from "react-icons/pi";

const Search = ({ navBarSwitch }) => {

  const [ searchQuery, setSearchQuery ] = useState('')
  const [ searchResult, setSearchResult ] = useState([])
  const [ allProduct, setAllProduct ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ isLoadingSearch, setIsLoadingSearch ] = useState(true)


  useEffect(() => {
    getAllItem()
    setTimeout(() => {
      setIsLoading(false)
    }, 700)
  }, [])

  const getAllItem = () => {
    ItemService.getAllItems()
    .then((response) => setAllProduct(response.data))
    .catch((error) => console.error(error))
  }

  const handleSearch = (searchQuery) => {
     const filteredResult = allProduct.filter(item =>
       item.title.toString().toLowerCase().includes(searchQuery.toLowerCase()))
      setSearchResult(filteredResult)
      setTimeout(() => {
        setIsLoadingSearch(false)
      }, 700)
      setIsLoadingSearch(true)
  }

  const handleChange = (e) => {
    const searchValue = e.target.value
    setSearchQuery(searchValue)
    handleSearch(searchValue)
  }

  return (
      <>
        <div className='shopHeader'>
            <div className='navBarShop'>
                <a className='linkButtonCategory' onClick={navBarSwitch} >Categorys</a>
                <input className='inputNavBarShop' type='text' placeholder='Enter product name...' onChange={handleChange} value={searchQuery} />
            </div>
        </div>
        {searchQuery === ''
        ?
        <div className='shopCardsContainer'>
        { allProduct.map(product => {
          if(isLoading === true) {
            return <SkeletonCard key={product.id}/>
          } else {
            return <Card product={product} key={product.id}/>
          }
        }
        )}
        </div>
        :
        <div className='shopCardsContainer'>
          {searchResult.length === 0
          ?
          <div className='emptySearchResult'>
            <div className='emptyMessageContainer'>
            <p className='emptySearchResultMessage'>Sorry, this product is not available!</p> <Smile className='smileIcon' size='45px'/>
            </div>
            <button className='backToCategoryButton' onClick={navBarSwitch}>BACK TO CATEGORY</button>
          </div>
          :
          <>
          {searchResult.map(product => {
            if(isLoadingSearch === true) {
              return <SkeletonCard key={product.id}/>
            } else {
              return <Card product={product} key={product.id}/>
            }
          }
          )}
          </>
          }
        </div>
        }
      </>
  )
}

export default Search