import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';



//等效写法（元素）
const element1 = (
  <h1 className="greeting">
    Hello, world1!
  </h1>
);
const element2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world2!'
);



//等效写法（组件）
//函数组件
function Welcome1(props) {
  return <h1>Hello, {props.name}</h1>;
}
//class组件
class Welcome2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
/* 

事件处理方案：

方法1：

1. constructor   this.handleClick = this.handleClick.bind(this)
2.  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
2. onClick={this.handleClick}

方法2：public class fields 语法

1. handleClick = () => {
    console.log('this is:', this);
  }

2.onClick={this.handleClick}

方法三：

1. handleClick() {
    console.log('this is:', this);
  }

2. onClick={() => this.handleClick()}


推荐方法2，方法3在于每次渲染 LoggingButton 时都会创建不同的回调函数。在大多数情况下，这没什么问题，
但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染。
我们通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题。



*/

//click
class ClickCom extends React.Component{
  constructor(props){
    super(props)
    
    //状态
    this.state = {
      isState:true
    }
    
    //绑定事件
    // this.handleClick = this.handleClick.bind(this)

  }

  handleClick = (a) =>{
    debugger
    console.log(a)
    this.setState(state =>({
      isState: !state.isState
    }))
  }



  render(){
    return (
      <button className="btnSpe" onClick={this.handleClick.bind(this,'111')}> { this.state.isState?'YES':'NO'}</button>
    )
  }
}

/* 
  区别：组件名称必须以大写字母开头


*/

ReactDOM.render(
  <React.StrictMode>
      <ClickCom/>
      {element1}
      {element2}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
