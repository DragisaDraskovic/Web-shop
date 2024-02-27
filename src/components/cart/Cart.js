import React, { useState } from 'react'

import './Cart.css'

const Cart = () => {

    return (
    <div className='cartContainer'>
        <div className='showingConteiner'>
          <div className='hederSecondContainer'>
            <p>Your wish list</p>
          </div>
          <div className='firstContainer'>
            <div className='firstShowingConteiner'>
              <p>1</p>
              <p>1</p><p>1</p>
              <p>1</p>
              <p>1</p><p>1</p>
              <p>1</p>
              <p>1</p><p>1</p>
              <p>1</p>
              <p>1</p><p>1</p>
            </div>
            <div className='fixPositionSecondContainer'>
              <div className='firstFixPositionContainer'>
                  <p>muska maca</p>
                  <p>muska maca</p><p>muska maca</p>
                  <p>muska maca</p>
                  <p>muska maca</p><p>muska maca</p>
                  <p>muska maca</p>
                  <p>muska maca</p><p>muska maca</p>
                  <p>muska maca</p>
                  <p>muska maca</p><p>muska maca</p>
              </div>
              <div className='secondFixPositinoContainer'>
                  <p>500e</p>
                  <p>500e</p><p>500e</p>
                  <p>500e</p>
                  <p>500e</p><p>500e</p>
                  <p>500e</p>
                  <p>500e</p><p>500e</p>
                  <p>500e</p>
                  <p>500e</p><p>500e</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart