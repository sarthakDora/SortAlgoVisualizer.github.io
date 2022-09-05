import React, { Component } from 'react'
import './VisualizerComponent.css';
import { RandomIntegers } from './SortingAlgoComponent/helper';
import { BubbleSort } from './SortingAlgoComponent/bubbleSort';
import { InsertionSort } from './SortingAlgoComponent/insertionSort';
import { SelectionSort } from './SortingAlgoComponent/selectionSort';

const color1 = `red`;
const color2 = `rgb(177, 177, 248)`;
const color3 = `rgb(149, 246, 108)`;
const color4 = `green`;

export default class VisualizerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            SIZE: 50,
            width: 8,
            animationTime: 1,
        }
    }
    componentDidMount() {
        this.resetArray();
    }
    resetArray() {
        const array = [];
        for (let i = 0; i < this.state.SIZE; i++) {
            const temp=RandomIntegers(10,600);
            array.push(temp);
        }
        this.setState({ arr: array });
        this.changetoColor3(this.state.arr, color2);
    }
    changetoColor3(array, color) {
        for (let i = 0; i < array.length; i++) {
            const e = document.getElementById(i).style;
            e.backgroundColor = color;
        }
    }
    BubbbleSort() {
        const animations = BubbleSort(this.state.arr);
        for (let i = 0; i < animations.length; i++) {
            let color = "";
            const [bar1, bar2] = animations[i];
            const bar1style = document.getElementById(bar1).style;
            const bar2style = document.getElementById(bar2).style;
            if (i % 3 === 0 || i % 3 === 2) {
                if (i % 3 === 0) {
                    color = color1;
                }
                if (i % 3 === 2) {
                    color = color2;
                }
                setTimeout(() => {
                    bar1style.backgroundColor = color;
                    bar2style.backgroundColor = color;
                }, this.state.animationTime * i);

            }
            else {

                setTimeout(() => {
                    let temp = bar1style.height;
                    bar1style.height = bar2style.height;
                    bar2style.height = temp;
                }, this.state.animationTime * i);
            }
        }
        setTimeout(() => {
            this.changetoColor3(this.state.arr, color3);
            this.enableButtons();
        }, this.state.animationTime * animations.length);
    }

    debugger() {
        const array = this.state.arr;
        // console.log(array);
        for (let i = 0; i < array.length; i++) {
            console.log(document.getElementById(i).style.height);

        }
        console.log("end");
    }
    isSorted() {
        for (let i = 0; i < 100; i++) {
            this.resetArray();
            const sortedarray = this.state.arr.slice().sort((a, b) => a - b);
            // console.log(sortedarray);
            const myarray = BubbleSort(this.state.arr);
            console.log(this.isequal(sortedarray, myarray));
        }
    }
    isequal(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i])
                return false;
        }
        return true;
    }
    onSliderChange(e) {

        this.state.SIZE = e.target.value;
        if (e.target.value >= 60 && e.target.value <= 75)
            this.state.width = 7;
        else if (e.target.value > 75 && e.target.value <= 90)
            this.state.width = 6;
        else if (e.target.value > 90 && e.target.value <= 105)
            this.state.width = 5;
        else if (e.target.value > 100 && e.target.value <= 125)
            this.state.width = 5;
        else if (e.target.value > 50 && e.target.value < 60)
            this.state.width = 8;
        else if (e.target.value > 40 && e.target.value <= 50)
            this.state.width = 9;
        else if (e.target.value > 30 && e.target.value <= 40)
            this.state.width = 10;
        else if (e.target.value > 20 && e.target.value <= 30)
            this.state.width = 11;
        else if (e.target.value > 10 && e.target.value <= 20)
            this.state.width = 12;

        // this.setState.SIZE = e.target.value;
        // // this.state.SIZE = e.target.value;
        // if (e.target.value >= 60 && e.target.value <= 75)
        //     this.setState.width = 7;
        // else if (e.target.value > 75 && e.target.value <= 90)
        //     this.setState.width = 6;
        // else if (e.target.value > 90 && e.target.value <= 105)
        //     this.setState.width = 5;
        // else if (e.target.value > 100 && e.target.value <= 125)
        //     this.setState.width = 5;
        // else if (e.target.value > 50 && e.target.value < 60)
        //     this.setState.width = 8;
        // else if (e.target.value > 40 && e.target.value <= 50)
        //     this.setState.width = 9;
        // else if (e.target.value > 30 && e.target.value <= 40)
        //     this.setState.width = 10;
        // else if (e.target.value > 20 && e.target.value <= 30)
        //     this.setState.width = 11;
        // else if (e.target.value > 10 && e.target.value <= 20)
        //     this.setState.width = 12;


        this.resetArray();
    }
    onSpeedChange(e) {
        this.setState.animationTime = e.target.value;
    }
    disableButtons(button) {
        const btnarr = ["newArray", "merge", "bubble", "selection", "insertion", "quick"];
        for (let i = 0; i < btnarr.length; i++) {
            if (btnarr[i] !== button)
                document.getElementById(btnarr[i]).disabled = true;
        }
    }
    enableButtons() {
        const btnarr = ["newArray", "merge", "bubble", "selection", "insertion", "quick"];
        for (let i = 0; i < btnarr.length; i++) {
            document.getElementById(btnarr[i]).disabled = false;
        }
    }

  render() {
    const { arr } = this.state;
    return (
 <div>
         <button className="btn" id="newArray" onClick={() => {
                    this.resetArray();
                }}>Generate New Array</button>
         <button className="btn" id="bubble" onClick={() => {
                    this.BubbbleSort();
                    this.disableButtons("bubble");
                }}>BubbbleSort</button>
        
                <div style={{ display: "inline-block", margin: "0.5em 0 0.5em" }}>
                    <label style={{ color: "whitesmoke", fontSize: "1.2em", fontFamily: "Roboto" }}>Change array size:</label>
                    <input className="slider" type="range" min={5} max={125} value={50} step={1} onChange={(e) => this.onSliderChange(e)} />
                </div>
                <div style={{ display: "inline-block", margin: "0 0 0 1em" }}>
                    <label style={{ color: "whitesmoke", fontSize: "1.2em", fontFamily: "Roboto" }}>Vary animation speed:</label>
                    <input className="slider" type="range" min={0.2} max={5} value={1} step={0.1} onChange={(e) => this.onSpeedChange(e)} />
                </div>
                <div className="array" style={{ margin: "0 4em 0 4em" }}>
                    {arr.map((value, index) => (
                        <li id={index} style={{ listStyle: "none", height: `${value}px`, width: `${this.state.width}px` }}></li>
                    ))}
                </div>

        </div>
     
    )
  }
}
