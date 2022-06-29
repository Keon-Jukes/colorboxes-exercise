import React, {Component} from 'react';
import Colorbox from './ColorBox';
import './Grid.css';

/* use .map to render out grid based on numboxes, create a onClick event listener which sends a new color to each color box based on the randomly generated color from the colors array  */
// make onClick event handler that deals with clicking each ColorBox, use an id property etc. to update only the box clicked upon and send it a new prop


class Grid extends Component {
    static defaultProps = {
        colorArray: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'],
        numBoxes: 18
    }
    constructor(props){
        super(props)
        this.state = {
           
        }
        this.generateRandomColor = this.generateRandomColor.bind(this);
        // this.generateColorBoxes = this.generateColorBoxes.bind(this);
    }

    generateRandomColor(){
        let randInx = Math.floor(Math.random() * this.props.colorArray.length) + 1;
        let randomColor = this.props.colorArray[randInx];
        return randomColor;
    }

    // generateColorBoxes(){
        // for(let i = 0; i < this.props.numBoxes; i++){
        //     return <div>
        //         <Colorbox color={this.randomColor()} />
        //     </div> 
        // }
    // }

    render(){
        return(<div>
            <tbody className='Grid'>
               {[...Array(this.props.numBoxes)].map((x, i) =>
                <Colorbox key={i} color={this.generateRandomColor()} randomColor={this.generateRandomColor}/>
               )}
    
            </tbody>
                
                {/* <Colorbox color={this.generateRandomColor()} randomColor={this.generateRandomColor}/>
                <Colorbox color={this.generateRandomColor()} randomColor={this.generateRandomColor}/> */}
        </div>)
    }
}

export default Grid;