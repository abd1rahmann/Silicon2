import React from 'react'
import Brand1 from '../../../images/brands/brand_1.svg'
import Brand2 from '../../../images/brands/brand_2.svg'
import Brand3 from '../../../images/brands/brand_3.svg'
import Brand4 from '../../../images/brands/brand_4.svg'
import Brand5 from '../../../images/brands/brand_5.svg'
import Brand6 from '../../../images/brands/brand_6.svg'

const Brands = () => {
    return (
        <div className="container">
            <div id="brand-logos">
                <img src={Brand1} alt="brand logo"/>
                <img src={Brand2} alt="brand logo"/>
                <img src={Brand3} alt="brand logo"/>
                <img src={Brand4} alt="brand logo"/>
                <img src={Brand5} alt="brand logo"/>
                <img src={Brand6} alt="brand logo"/>
            </div>
        </div>
    )
}
export default Brands
