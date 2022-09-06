import React, { Component  } from 'react'
import './VisualizerComponent.css';
import { RandomIntegers } from './SortingAlgoComponent/helper';
import { BubbleSort } from './SortingAlgoComponent/bubbleSort';
import { InsertionSort } from './SortingAlgoComponent/insertionSort';
import { SelectionSort } from './SortingAlgoComponent/selectionSort';
import { MergeSort } from './SortingAlgoComponent/mergeSort';
import { QuickSort } from './SortingAlgoComponent/quickSort';
import { AppBar, Toolbar, Typography, Box, BottomNavigation,BottomNavigationAction ,Button   } from "@mui/material";
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';


import Slider from '@mui/material/Slider';

const color1 = `rgb(0, 109, 119)`;
const color2 = `rgb(251, 139, 36)`;
const color3 = `rgb(49, 87, 44)`;


export default class VisualizerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            SIZE: 50,
            width: 8,
            animationTime: 1,
            disabled: false
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
            // const sortedarray = this.state.arr.slice().sort((a, b) => a - b);
            // // console.log(sortedarray);
            // const myarray = BubbleSort(this.state.arr);

        }
    }
    isequal(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i])
                return false;
        }
        return true;
    }
    insertionSort() {
        const animations = InsertionSort(this.state.arr);
        for (let i = 0; i < animations.length; i++) {
            const [bar1, bar2, optype] = animations[i];
            const bar1style = document.getElementById(bar1).style;
            const bar2style = document.getElementById(bar2).style;
            switch (optype) {
                case "key":
                    setTimeout(() => {
                        bar1style.backgroundColor = "purple";
                    }, this.state.animationTime * i);
                    break;
                case "colorchange":
                    setTimeout(() => {
                        bar1style.backgroundColor = color1;
                        bar2style.backgroundColor = color1;
                    }, this.state.animationTime * i);
                    break;
                case "swap":
                    setTimeout(() => {
                        let temp = bar1style.height;
                        bar1style.height = bar2style.height;
                        bar2style.height = temp;
                    }, this.state.animationTime * i);
                    break;
                case "colorrev":
                    setTimeout(() => {
                        bar1style.backgroundColor = color2;
                        bar2style.backgroundColor = color2;
                    }, this.state.animationTime * i);
                    break;
                case "keyrev":
                    setTimeout(() => {
                        bar1style.backgroundColor = color2;
                    }, this.state.animationTime * i);
                    break;
                default:
                    break;
            }
        }
        setTimeout(() => {
            this.changetoColor3(this.state.arr, color3);
            this.enableButtons();
        }, this.state.animationTime * animations.length);
    }
    selectionSort() {
        const animations = SelectionSort(this.state.arr);
        for (let i = 0; i < animations.length; i++) {
            const [bar1, bar2, optype] = animations[i];
            const bar1style = document.getElementById(bar1).style;
            const bar2style = document.getElementById(bar2).style;
            switch (optype) {
                case "colchng":
                    setTimeout(() => {
                        bar1style.backgroundColor = color1;
                        bar2style.backgroundColor = color1;
                    }, this.state.animationTime * i);
                    break;
                case "swap":
                    setTimeout(() => {
                        let temp = bar1style.height;
                        bar1style.height = bar2style.height;
                        bar2style.height = temp;
                    }, this.state.animationTime * i);
                    break;
                case "colrev":
                    setTimeout(() => {
                        bar2style.backgroundColor = color2;
                    }, this.state.animationTime * i);
                    break;
                case "colrevall":
                    setTimeout(() => {
                        bar1style.backgroundColor = color2;
                        bar2style.backgroundColor = color2;
                    }, this.state.animationTime * i);
                    break;
                default:
                    break;
            }
        }
        setTimeout(() => {
            this.changetoColor3(this.state.arr, color3);
            this.enableButtons();
        }, this.state.animationTime * animations.length);
    }
   
    mergeSort() {
        const animations = MergeSort(this.state.arr);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = document.getElementById(barOneIdx).style;
                const barTwoStyle = document.getElementById(barTwoIdx).style;
                const color = i % 3 === 0 ? color1 : color2;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.animationTime);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = document.getElementById(barOneIdx).style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * this.state.animationTime);
            }
        }
        setTimeout(() => {
            this.changetoColor3(this.state.arr, color3);
            this.enableButtons();
        }, this.state.animationTime * animations.length);
    }

    quickSort() {
        let a = [];
        for (let i = 0; i < this.state.arr.length; i++) {
            a.push(document.getElementById(i).style.height);
        }
        console.log(a);
        console.log(this.state.arr);
        const animations = QuickSort(this.state.arr);
        // console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const [bar1, bar2, optype] = animations[i];
            const bar1style = document.getElementById(bar1).style;
            const bar2style = document.getElementById(bar2).style;
            if (optype === "pivot") {
                setTimeout(() => {
                    bar1style.backgroundColor = "yellow";
                }, this.state.animationTime * i);
            }
            else if (optype === "pivotrev") {
                setTimeout(() => {
                    bar1style.backgroundColor = color2;
                }, this.state.animationTime * i);
            }
            else if (optype === "colorchange1") {
                setTimeout(() => {
                    bar1style.backgroundColor = color1;
                    bar2style.backgroundColor = color1;
                }, this.state.animationTime * i);
            }
            else if (optype === "colorreverse") {
                setTimeout(() => {
                    bar1style.backgroundColor = color2;
                    bar1style.backgroundColor = color2;
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
            let a = [];
            for (let i = 0; i < this.state.arr.length; i++) {
                a.push(document.getElementById(i).style.height);
            }
            }, this.state.animationTime * animations.length);

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

        this.resetArray();
    }
    onSpeedChange(e) {
        this.state.animationTime = e.target.value;
    }
    disableButtons(button) {
        const btnarr = ["newArray", "bubble","insertion","selection","merge","quick"];
        for (let i = 0; i < btnarr.length; i++) {
            if (btnarr[i] !== button)
                document.getElementById(btnarr[i]).disabled = true;
        }
    }


    enableButtons() {
        const btnarr = ["newArray", "bubble","insertion","selection","merge","quick"];
        for (let i = 0; i < btnarr.length; i++) {
            document.getElementById(btnarr[i]).disabled = false;
        }
    }

  render() {
    const { arr } = this.state;
    return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Sort Algo Visualizer App
          </Typography>
          <Button variant="contained" startIcon={<ShuffleOnIcon />}  id="newArray" 
          onClick={() => {this.resetArray();}}>
             Shuffle
          </Button>
          <Button variant="contained" id="bubble" onClick={() => 
            {
                
                this.BubbbleSort();

           
                }}>
             Bubble Sort
          </Button>
          <Button variant="contained"  id="insertion" onClick={() => {this.insertionSort();}}>
             Insertion Sort
          </Button>
          <Button variant="contained" id="selection" onClick={() => {this.selectionSort();}}>
             Selection Sort
          </Button>
          <Button variant="contained" id="merge" onClick={() => {this.mergeSort();}}>
             Merge Sort
          </Button>
          <Button variant="contained" id="quick" onClick={() => {this.quickSort();}}>
             Quick Sort
          </Button>
          {/* <button className="btn btn-1 .btn-sep" id="newArray" onClick={() => {
                    this.resetArray();
                }}>New Array</button> */}

                {/* <button className="btn btn-1 .btn-sep" id="bubble" onClick={() => {
                this.disableButtons("bubble");
                this.BubbbleSort();
                }}>Bubbble Sort</button>
          <button className="btn btn-1 .btn-sep" id="insertion" onClick={() => {
                    this.insertionSort();
                    this.disableButtons("insertion");
                }}>Insertion Sort</button>
          <button className="btn btn-1 .btn-sep" id="selection" onClick={() => {
                    this.selectionSort();
                    this.disableButtons("selection");
                }}>Selection Sort</button>
         <button className="btn btn-1 .btn-sep" id="merge" onClick={() => {
                    this.mergeSort();
                    this.disableButtons("merge");
                }}>Merge Sort</button>
         <button className="btn btn-1 .btn-sep" id="quick" onClick={() => {
                    this.quickSort();
                    this.disableButtons("quick");
                }}>Quick Sort</button> */}

        </Toolbar>
    </AppBar>
    </Box>
         
        

       
        
                <div style={{ display: "inline-block", margin: "0.5em 0 0.5em" }}>
                    <label style={{ color: "black", fontSize: "1.2em", fontFamily: "Lato" }}>Array size:</label>
                    <Slider 
                        className="slider"
                aria-label="Small steps"
                defaultValue={50}   
                step={1}
                marks
                min={5} max={125} 
                onChange={(e) => this.onSliderChange(e)}/>
                </div>
                <div style={{ display: "inline-block", margin: "0 0 0 1em" }}>
                    <label style={{ color: "black", fontSize: "1.2em", fontFamily: "Lato" }}>Animation speed:</label>
                    <Slider 
                        className="slider"
                aria-label="Small steps"
                defaultValue={1}   
                step={0.1}
                marks
                min={0.2} max={5}
                onChange={(e) => this.onSpeedChange(e)}/>
                </div>
                {/* <navBar/> */}

           
                <div className="array" style={{ margin: "0 4em 0 4em" }}>
                    {arr.map((value, index) => (
                        <li id={index} style={{ listStyle: "none", height: `${value}px`, width: `${this.state.width}px` }}></li>
                    ))}
                </div>

                <Box  sx={{ flexGrow: 1 }}>
      <BottomNavigation
        showLabels
        value={"By Sarthak Pathak"}
      >
      <BottomNavigationAction label="By Sarthak Pathak" />
      </BottomNavigation>
    </Box>

    </div>
     
    )
  }
}
