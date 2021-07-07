### 页面加载性能之Web Vitals

https://zhuanlan.zhihu.com/p/166434426


### React中StrictMode严格模式

https://blog.csdn.net/wu_xianqiang/article/details/113521191



### 事件处理


方法一：bind

```js
 constructor(props) {
    super(props);
    
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  ```
  ```js
    //无参数
  handleClick(e) {
       console.log(e)
  }
    //有参数
  handleClick(index) {
  
  }
    //有参数和event
  handleClick(e,index) {
      console.log(index)
      console.log(e)
  }
```
```js
//无参数
<button onClick={this.handleClick}>
        Click me
 </button>

//有参数

<button onClick={this.handleClick.bind(this.index)}>
        Click me
 </button>
```


方法二：  class fields 语法

```js
    //无参数
    handleClick = () => {
        console.log('this is:', this);
    }
    //event
    handleClick = (e) => {
        console.log(e);
    }
    //event和index
    handleClick = (index,e) => {
        console.log(e);
    }
```

```js
//无参数
<button onClick={this.handleClick}>
        Click me
 </button>

//有参数

<button onClick={this.handleClick.bind(this.index)}>
        Click me
 </button>

```

方法三：箭头函数（官网不推荐）

```js
    //无参数
    handleClick() {
        console.log('this is:', this);
    }
    //event
    handleClick(e) {
        console.log(e);
    }
    //有参数
    handleClick(index) {
        console.log(index);
    }
    //event和参数
    handleClick(e,index) {
        console.log(e);
        console.log(index);
    }

```

```js
//无参数
<button onClick={()=>this.handleClick()}>
        Click me
 </button>

//event
<button onClick={(e)=>this.handleClick(e)}>
        Click me
 </button>
//有参数
<button onClick={()=>this.handleClick(index)}>
        Click me
 </button>

//有参数

<button onClick={(e)=>this.handleClick(index,e)}>
        Click me
 </button>

```


### es6动态计算属性名

https://www.cnblogs.com/mengfangui/p/9150458.html