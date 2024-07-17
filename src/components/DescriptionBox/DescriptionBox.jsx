import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>

            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>

        </div>

        <div className="descriptionbox-description">
            <p>
                An e-commerce website is an onlibe platform that facilitates 
                buying and selling of products or services over the internet. It 
                serves as a virtual marketplace where businesses and individuals interact with each other. 
                Businesses showcase their products, interact with customers and conduct transactions without the need
                for a physical presence. E-commerce websites have gained immense popularity
                due to their convwnience, accessibility, and the global reach they offer. 
            </p>
            <p>
            E-commerce websites are online platforms where businesses and consumers engage in 
            buying and selling products or services over the internet. These websites facilitate 
            transactions electronically, enabling customers to browse catalogs, 
            add items to cart, and make purchases without physically visiting a store.
            </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
