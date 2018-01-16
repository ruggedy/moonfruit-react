import React, { PureComponent } from 'react';
// import { Motion, spring } from 'react-motion';

// const
export default class CarouselText extends PureComponent {
    constructor(props){
        super(props)
    }

    static defaultProps = {
        active: false
    }

    componentDidMount(){

    }

    renderHeader(){
        return (
            <div className="carousel-text-header">
                <span>{`${this.props.number} / `}</span>
                <span>{this.props.header}</span>
            </div>
        )
    }

    renderBody(){
        const classes = this.props.active? "extended" : "";
        return (
            <div ref={ ref => this._textBodyRef = ref } className={`carousel-text-body ${classes}`}>
                <p>{this.props.body}</p>
            </div>
        )
    }

    render(){
        return (
            <div className="carousel-text">
                {this.renderHeader()}
                {this.renderBody()}
            </div>
        )
    }
}
