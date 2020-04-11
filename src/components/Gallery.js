import React, { Component } from 'react'
let api_url = "https://jsonplaceholder.typicode.com/posts"

class Gallery extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLoading: false,
            datas: []
        }
        console.log(" Constructor Text ") 
    }

    componentDidMount(){
        console.log(" Component Did Mount Text ")
        fetch(api_url)
        .then( response => response.json() )
        .then( jsonData => {
            this.setState({
                isLoading: true,
                datas: jsonData
            })    
        })
    }

    componentWillUnmount() {
        console.log(" component Will Unmount ")
    }

    render(){

        let { isLoading, datas } = this.state

        return(
            <>
            { console.log(" Render Text ") }
                <main>
                    <article>
                        <header className="section background-primary text-center">
                            <h1 className="text-white margin-bottom-0 text-size-50 text-thin text-line-height-1">Gallery</h1>
                        </header>
                        <div className="section background-white">
                            <div className="line">
                                <div className="margin text-center">
                                {          
                                        (!isLoading) 
                                    ?   <div> Loading... </div> 
                                    :
                                        <ul>
                                            { datas.map( data =>  (
                                                <li key={ data.id }> Title: { data.title } <br /> Body: { data.body } </li>
                                            ))}
                                        </ul>   
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

export default Gallery