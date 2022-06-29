import React from 'react';
// import './ColorBox.css';

class ColorBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currColor : this.props.color, 
        }
    }
    render(){
        return(
        <div>
            <div style={{backgroundColor: this.state.currColor, width: '200px', height: '200px'}}>Color Box</div>
        </div>
        )
    }
}

export default ColorBox;