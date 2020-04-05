import React, { Component } from 'react'
import websiteData from '../data/websiteData'
import ServiceCard from './ServiceCard'

export default class Home extends Component{
    render(){
        return(
            <>  
            <section className="section background-white"> 
            <div className="line">
            <div className="margin">              
                <div className="row">
                    { websiteData.Home.map( content => {
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
            </>
        )
    }
}

