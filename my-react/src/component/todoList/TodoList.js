import React, { Component } from 'react';

import SearchBar from './SearchBar'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            list:['1111','2222']
          }

          //click
        this.delete = this.delete.bind(this)
        this.add = this.add.bind(this)
    }


    delete(index){
        debugger
        let list = this.state.list
        console.log(list)
        list.splice(index,1)
        this.setState({
            list:list
        })
    }

    add(value){
        this.setState({
            list:[...this.state.list,value]
        })
    }


    render() { 
        return ( 
            <div>
                <SearchBar list={this.state.list}  add={this.add}/>    
                <ul>
                    {
                        this.state.list.map((v,index)=>{
                           return <li key={index.toString()}  onClick={this.delete.bind(this,index)}>{v}</li>
                        })
                    }
                    
                </ul>            
               
            </div>
            
            
         );
    }
}
 
export default TodoList;