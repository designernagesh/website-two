import React, { Component } from 'react'
import websiteData from '../data/websiteData'
import ServiceCard from './ServiceCard'
import bioImage from '../images/bio.png'

export default class Home extends Component{
    render(){
        return(
            <>  
            <main>
            <section className="section background-white"> 
            <div className="line">
            <div className="margin">              
                <div className="row">
                    { websiteData.home.map( content => {
                        return (
                            <>                                
                                <ServiceCard 
                                imgUrl={content.imgUrl1} 
                                title={content.servicesTitle1} 
                                desc={content.servicesDesc1} 
                                link={content.servicesLink1}  />
                            
                                <ServiceCard 
                                imgUrl={content.imgUrl2}
                                title={content.servicesTitle2} 
                                desc={content.servicesDesc2} 
                                link={content.servicesLink2} 
                                />
                            
                                <ServiceCard 
                                imgUrl={content.imgUrl3}
                                title={content.servicesTitle3} 
                                desc={content.servicesDesc3} 
                                link={content.servicesLink3} 
                                />                                     
                            </>
                        )
                    })}            
                </div>
                </div>
                </div>
                </section>

                {/* Section 2 */}
                <section className="section background-primary text-center">
                <div className="line">
                    <div className="s-12 m-10 l-8 center">
                    <h2 className="headline text-thin text-s-size-30">We are Web Design Heroes</h2>
                    <p className="text-size-20">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                    </div>
                </div>  
                </section>

                {/* Section 3 */}
                <section className="section background-white">
                <div className="full-width text-center">
                    <img className="center margin-bottom-30" style={{marginTop: '-210px'}} src={ bioImage } alt="bioImage" />
                    <div className="line">
                    <h2 className="headline text-thin text-s-size-30">Fully <span className="text-primary">Responsive</span> HTML5 Template</h2>
                    <p className="text-size-20 text-s-size-16 text-thin">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                    <i className="fas fa-compress icon2x text-primary margin-top-bottom-10" />                   
                    <p className="text-size-20 text-s-size-16 text-thin text-primary">Try resize your browser window</p>
                    </div>  
                </div>  
                </section>
                <hr className="break margin-top-bottom-0" /> 
                
                </main>
            </>
        )
    }
}

