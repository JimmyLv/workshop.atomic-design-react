import React from 'react'
import firebase from 'firebase'
import { connect } from 'react-firebase'

const config = {
  apiKey: "AIzaSyB9S8V2ZNyrJAxsZ7gMjCI-HkjTIMGYfoo",
  authDomain: "tech-radar-editor.firebaseapp.com",
  databaseURL: "https://tech-radar-editor.firebaseio.com",
  storageBucket: "tech-radar-editor.appspot.com",
  messagingSenderId: "153565518091"
}
firebase.initializeApp(config)

const Counter = ({ value, setValue }) => (
  <div>
    <button onClick={() => setValue(value - 1)}>-</button>
    <span> {value ? value : 'loading...'} </span>
    <button onClick={() => setValue(value + 1)}>+</button>
  </div>
)

export default connect((props, ref) => ({
  value: 'counterValue',
  setValue: value => ref('counterValue').set(value)
}))(Counter)