import React, { Component } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div id='Father'>
        <Preview></Preview>
        <Editor></Editor>
      </div>
    )
  }
}
