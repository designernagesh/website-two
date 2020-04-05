import React from 'react'

const ProductCard = ( props ) =>{
    return (
        <>
            <div class="s-12 m-12 l-4 margin-bottom">
                <div class="padding-2x block-bordered border-radius">                
                    <i class="fab fa-font-awesome-flag icon2x text-primary margin-bottom-30"></i>
                    <h2 class="text-thin">{ props.title }</h2>
                    <p class="margin-bottom-30"> { props.desc } </p>
                    <a class="button border-radius background-primary text-size-12 text-white text-strong" href={ props.link }>GET MORE INFO</a>
                </div>
            </div>
        </>
    )
}

export default ProductCard