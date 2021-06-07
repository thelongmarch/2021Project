import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:''
        }

        //click
        this.inputChange = this.inputChange.bind(this)
        this.add = this.add.bind(this)
    }



    inputChange(e) {
        this.setState(
            {
            inputValue: e.target.value
            }
        )
    } 

    add(){
        this.props.add(this.state.inputValue);
        this.setState({
            inputValue :''
        })
    }



    render() { 
        return ( 
            <div>
                <label htmlFor="add">添加的项目：</label>
                <input  id="add" type="text" value={this.state.inputValue}  onChange = {this.inputChange} />
                <button onClick={this.add}>添加</button>
            </div>
         );
    }




}
 
export default SearchBar;