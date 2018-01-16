import React, { Component } from 'react';
import CarouselText from './carousel-text';
import shortid from 'shortid';

const CAROUSELTEXT = [
    {
        key: shortid.generate(),
        number: "01",
        header: "We Make it \n easy for you",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quisquam laudantium optio voluptatibus cum, ut!"
    },
    {
        key: shortid.generate(),
        number: "02",
        header: "You're in Control \n of the design",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quisquam laudantium optio voluptatibus cum, ut!"
    },
    {
        key: shortid.generate(),
        number: "03",
        header: "Take it to the next \n level with apps.",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quisquam laudantium optio voluptatibus cum, ut!"
    },
    {
        key: shortid.generate(),
        number: "04",
        header: "Managin your website \n was never so easy",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quisquam laudantium optio voluptatibus cum, ut!"
    },
]
class App extends Component {

    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return (
            <div className="carousel-section">
                <div className="left-side">
                    {CAROUSELTEXT.map((val) => <CarouselText key {...val}/>)}
                </div>
                <div className="right-side"></div>
            </div>
        )
    }
}

export default App;
