import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EditorAction } from '../../redux/actions/Editor'
import './index.css'
import marked from 'marked'

class PreviewUI extends Component {
  render() {
    return (
      <div>
        <div id='preview' dangerouslySetInnerHTML={{ __html: marked(this.props.data) }}>
        </div>
      </div>
    )
  }
}


export default connect(
  (data) => ({ data }),
  { EditorAction }
)(PreviewUI)