---
title: 「React 系列 Workshop 01」之 Atomic Design with React
speaker: Jimmy Lv
date: 2017年03月16日
transition: move
highlightStyle: kimbie.light
theme: green
---

> `nodeppt start -w` by [ksky521/nodePPT](https://github.com/ksky521/nodePPT)

[slide]

# Atomic Design with React

Total Time: _2 hours_ 

via JimmyLv

[slide]

# 0. Env Setup

- [ ] reminder/reading material in invitation mail
- [ ] join wechat group to share info easily

-------

```
git clone git@github.com:JimmyLv/atomic-design-react-workshop.git
cd atomic-design-react-workshop
yarn install && yarn start
```

[slide]

# 唠嗑唠嗑

- 不讲什么：Webpack/ES6/Styling
- 观念在先，实战为王
- Pair Programming
- Parking Lot

[slide]

# Agenda

1. Atomic Design (15 mins)
2. React Basic: FP、JSX、V-DOM (25 mins)
3. Component-Driven Development (20 mins)
4. Component's State & Lifecycle (20 mins)
5. Refactoring to ES6+ (remaining times...)

[slide]

# 1. Atomic Design (15 mins)

[slide]

# What's Atomic Design？

[![](http://7xjbdq.com1.z0.glb.clouddn.com/images/2017/03/1489580083893.png)](http://atomicdesign.bradfrost.com/chapter-2/)

demo: [Pattern Lab | Build Atomic Design Systems](http://patternlab.io/)

[slide]

# Practice 01

![](http://7xjbdq.com1.z0.glb.clouddn.com/images/2017/03/1489561356582.png)

[slide]

# 💡Rethink?

- Presentational components
- Container components
- Transactional components
- Micro Front-Ends

[slide]

# 2. React Basic (25 mins)

- JSX
- VirtualDOM
- Functional/Stateless Components

[slide]
 
# DOM Tree -> Functions 

```jsx

function warn(msg) {
  alert(msg)
}

function App(data) {
  (function Header(menu) {
    (function Menu(menu, func) {
      (function Text(text) {return <li>{text}</li>})(menu[0])
      (function Text(text) {return <li onClick={() => func(text)}>{text}</li>})(menu[1])
    })(menu, warn)
  })(data.menu)
  
  (function Content(content) {
    return <section>{content}</section>
  })(data.content)
  
  (function Footer() {
    return <footer>I am footer!</footer>
  })()
}
```

[slide]

# JSX (XML in JavaScript)

In

```jsx
function Profile(props) {
  return <div>
    <img src="avatar.png" className="profile" />
    <h3>{props.title}</h3>
  </div>
}
```

------

Out

```jsx
function Profile(props) {
  return React.createElement(
    "div",
    null,
    React.createElement("img", { src: "avatar.png", className: "profile" }),
    React.createElement(
      "h3",
      null,
      props.title
    )
  )
}
```

[slide]

# Virtual DOM 

```js
function DeleteAccount() {
    return ({
      type: 'div',
      props: {
        children: [{
          type: 'p',
          props: {
            children: 'Are you sure?'
          }
        }, {
          type: DangerButton,
          props: {
            type: 'danger',
            children: 'Yep'
          }
        }, {
          type: Button,
          props: {
            color: 'blue',
            children: 'Cancel'
          }
       }]
    })
}
```

[slide]

![](http://7xjbdq.com1.z0.glb.clouddn.com/images/2017/03/1489564943831.png)

[slide]

# Functional/Stateless Components

```jsx
const DeleteAccount = (props) => (
  <div>
    <p>Are you sure?</p>
    <Button type='danger'>Yep</Button>
    <Button color='blue'>Cancel</Button>
  </div>
)
```

[slide]

# 3. CDD (20 mins)

“Visual TDD”: Component-Driven Development

[slide]

# Component-Driven Development

[![](https://cdn-images-1.medium.com/max/800/1*YUVIg5jdB-pUUszWhTkgdw.gif)](https://blog.hichroma.com/component-driven-development-ce1109d56c8e#.68tcwmv7p)

[slide]

![](http://7xjbdq.com1.z0.glb.clouddn.com/images/2017/03/1488610496651.png)

[note]tdd components，即 data 如何对应到 view; tdd business logic，即 event 如何对应到 state[/note]

[slide]

# Storybook

[![](https://getstorybook.io/static/media/demo.f13d28a7.gif)](http://airbnb.io/react-dates/)

[slide]

# Practice 02

![](http://7xjbdq.com1.z0.glb.clouddn.com/images/2017/03/1489581902209.png)

-------

- type:`primary` `default` `danger` `dashed`
- color: `blue`, `white`, `red`, `border`
- onClick:  `console.info()`, `alert()`

[slide]

# 4. State & Lifecycle (20 mins)

[slide]

# React.Component

```jsx
class Contacts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  handleClick(e) {
      console.log(this) // React Component instance
  }
  
  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}></button>
    )
  }
}

export default Contacts
```

[slide]

# Lifecycle

[![](http://7xjbdq.com1.z0.glb.clouddn.com/images/2017/03/1489566393031.png)](http://www.reactnativeexpress.com/lifecycle_api)

[slide]

# State vs Props

[![](http://7xjbdq.com1.z0.glb.clouddn.com/images/2017/03/1489566510269.png)](https://facebook.github.io/react/docs/state-and-lifecycle.html#converting-a-function-to-a-class)

[slide]

# Practice 03

[Clock component](https://codepen.io/gaearon/pen/amqdNA?editors=0010): `new Date()`

<iframe height='265' scrolling='no' title='Hello World in React' src='//codepen.io/gaearon/embed/amqdNA/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>

[slide]

# 5. Refactoring to ES6+ (remaining times...)

- [React on ES6+ · Babel](https://babeljs.io/blog/2015/06/07/react-on-es6-plus)
- [React Native Express - ES6](http://www.reactnativeexpress.com/es6)

[slide]

# Homework

[![](http://7xjbdq.com1.z0.glb.clouddn.com/images/2017/03/1489581432456.png)](https://www.suncorp.com.au/insurance/car.html)

[slide]

# Q&A
