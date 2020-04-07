import React from 'react'
import websiteData from '../data/websiteData'

const About = () => {    
    return(
        <>
            <main>
            <article>
                <header className="section background-primary text-center">
                    <h1 className="text-white margin-bottom-0 text-size-50 text-thin text-line-height-1">About</h1>
                </header>
                <div className="section background-white">
                    {
                        websiteData.about.map( item => {
                            return (
                                <>
                                    <div class="line">
                                        <h2 class="text-size-30">{ item.title }</h2>
                                        <p>{ item.para1 }</p>
                                        <blockquote class="margin-top-bottom-20">{ item.quote }</blockquote>
                                        <p class="margin-bottom-30">{ item.para2 }</p>
                                        <div class="line">
                                        <div class="margin">
                                            <div class="s-12 m-12 l-6 margin-m-bottom-30">
                                            <h2>{ item.subTitle1 }</h2>
                                            <p>{ item.subPara1 }</p>
                                            </div>
                                            <div class="s-12 m-12 l-6">
                                            <h2>{ item.subTitle2 }</h2>
                                            <p>{ item.subPara2 }</p>
                                            </div>
                                        </div>  
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    
                </div>
            </article>
            </main>            
        </>
    )
}   

export default About