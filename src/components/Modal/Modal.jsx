import { Component } from 'react';
import './Modal.css';

export class Modal extends Component {
  componentDidMount() {
    // console.log('modal component did mount');
  }
  componentWillUnmount() {
    // console.log('modal will unmount');
  }
  render() {
    return (
      <div className="modal_backdrop">
        <div className="modal__content">{this.props.children}</div>
        <button type="button" onClick={this.props.toggle}>
          close
        </button>
      </div>
    );
  }
}
