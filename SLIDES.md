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

# 0. Env Setup (10 mins)

- [ ] reminder/reading material in invitation mail
- [ ] join wechat group to share info easily

```
git clone git@github.com:JimmyLv/atomic-design-react-workshop.git
cd atomic-design-react-workshop
yarn install && yarn start
```

[slide]

# 唠嗑唠嗑

- 不讲什么：Webpack/ES6/Styling
- 观念在先，实战为王
- Parking Lot

[slide]

# Agenda

1. Atomic Design (15 mins)
2. React Basic (25 mins)
3. Component-Driven Development (20 mins)
4. Component's State & Lifecycle (20 mins)
5. Refactoring to ES6+ (remaining times...)

[slide]

# 1. Atomic Design (15 mins)

[slide]

# What's Atomic Design？

- [Atomic Design Methodology | by Brad Frost](http://atomicdesign.bradfrost.com/chapter-2/)
- [Pattern Lab | Build Atomic Design Systems](http://patternlab.io/)

[slide]

# Practise 01

![](http://7xjbdq.com1.z0.glb.clouddn.com/images/2017/03/1489561356582.png)

[slide]

# Rethink?

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

```js

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

```js
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

[note]tdd components，即 data 如何对应到 view; tdd business logic，即 event 如何对应到 state[/note]

[slide]

# Storybook

- [UI Component Playbook](https://blog.hichroma.com/ui-component-playbook-fd3022d00590#.q9vudq2h9)
- [Component-Driven Development](https://blog.hichroma.com/component-driven-development-ce1109d56c8e#.68tcwmv7p)
- [UI component explorers](https://blog.hichroma.com/the-crucial-tool-for-modern-frontend-engineers-fb849b06187a#.s7n0qslve)

[slide]

# Practice 02

finished buttons with different types and click alert:

- type:`primary` `default` `danger` `dashed`
- color: `bule`, `white`, `red`, `border`
- onClick:  `console.info()`, `alert()`

[slide]

# 4. State & Lifecycle (20 mins)

[slide]

# State vs Props

[![](http://7xjbdq.com1.z0.glb.clouddn.com/images/2017/03/1489566510269.png)](https://facebook.github.io/react/docs/state-and-lifecycle.html#converting-a-function-to-a-class)

[slide]

# Lifecycle

[![](http://7xjbdq.com1.z0.glb.clouddn.com/images/2017/03/1489566393031.png)](http://www.reactnativeexpress.com/lifecycle_api)

[slide]

# Practice 03

[Clock component](http://www.reactnativeexpress.com/component_api)

[slide]

# 5. Refactoring to ES6+ (remaining times...)

- [React on ES6+ · Babel](https://babeljs.io/blog/2015/06/07/react-on-es6-plus)
- [React Native Express - ES6](http://www.reactnativeexpress.com/es6)

[slide]

# Q&A

[slide]

# Homework

