import React from 'react'

import './Footer.css'
import { GoStopwatch as Watch } from "react-icons/go";
import { MdPhoneAndroid as Phone } from "react-icons/md";
import { GrMap as Map } from "react-icons/gr";
import { FaRegCopyright as CIcon } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='firstFooterContainer'>
            <div className='firstContainer'>
                <h1>Location</h1>
                <div className='textFooterContainer'>
                    <Map /><p className='footerText'>Obelicev Venac 12 Beograd</p>
                </div>
                <div className='textFooterContainer'>
                    <Phone /><p className='footerText'>+381 61 55 44 321</p>
                </div>
                <div className='textFooterContainer'>
                    <Watch /><p className='footerText'>24/7</p>
                </div>
                <div className='textFooterContainer'>
                    <CIcon /><p className='footerText'>2024 Pholix. All Rights Reserved.</p>
                </div>
            </div>
        </div>
        <div className='secondFooterContainer'>
            <div className='locationContainer'>
                ovde ide mapa
            </div>
        </div>
    </div>
  )
}

export default Footer