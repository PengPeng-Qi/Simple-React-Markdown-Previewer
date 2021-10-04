import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EditorAction } from '../../redux/actions/Editor'

class EditorUI extends Component {
  componentDidMount(){
    this.Node.value = this.props.data
  }
  changeText = () => {
    this.props.EditorAction(this.Node.value);
  }
  render() {
    return (
      <div>
        <textarea id="editor" cols="60" rows="25" onChange={this.changeText} ref={c => this.Node = c}>
        </textarea>
      </div>
    )
  }
}

export default connect(
  (data) => ({ data }),
  { EditorAction }
)(EditorUI)