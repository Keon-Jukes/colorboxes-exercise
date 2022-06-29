import React from 'react';
// import './ColorBox.css';

class ColorBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currColor : this.props.color, 
        }
        this.handleClick = this.handleClick.bind(this);
    }

    changeColor(evt){
        let newColor = this.props.randomColor()
        this.setState({currColor: newColor})
    }
     
    handleClick(){
        this.changeColor();
    }

    render(){
        console.log('props --->', this.props)
        return(
        <div>
            <div onClick={this.handleClick} style={{backgroundColor: this.state.currColor, width: '200px', height: '200px'}}></div>
        </div>
        )
    }
}

export default ColorBox;