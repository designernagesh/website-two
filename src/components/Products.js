import React, { Component } from 'react'
import websiteData from '../data/websiteData'
import ProductCard from './ProductCard'

export default class Products extends Component{
    render(){
        return(
            <>
                <main>
                <article>
                    <header className="section background-primary text-center">
                        <h1 className="text-white margin-bottom-0 text-size-50 text-thin text-line-height-1">Products</h1>
                    </header>
                    <div className="section background-white">
                    <div class="line">
                    <div class="margin text-center">
                        {
                            websiteData.products.map( product => {
                                return(
                                    <>
                                    <ProductCard title={ product.title1 } desc={ product.desc1 } link={ product.link1 } />

                                    <ProductCard title={ product.title2 } desc={ product.desc2 } link={ product.link2 } />

                                    <ProductCard title={ product.title3 } desc={ product.desc3 } link={ product.link3 } />

                                    <ProductCard title={ product.title4 } desc={ product.desc4 } link={ product.link4 } />

                                    <ProductCard title={ product.title5 } desc={ product.desc5 } link={ product.link5 } />

                                    <ProductCard title={ product.title6 } desc={ product.desc6 } link={ product.link6 } />
                                    </>
                                )
                            })
                        }                        
                    </div>
                    </div>
                    </div>
                </article>
                </main>
            </>
        )
    }
}

