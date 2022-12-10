import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    // console.log('modal component did mount');
  }
  componentWillUnmount() {
    // console.log('modal will unmount');
  }
  render() {
    return createPortal(
      <div className="modal_backdrop">
        <div className="modal__content">{this.props.children}</div>
        <button type="button" onClick={this.props.toggle}>
          close
        </button>
      </div>,
      modalRoot
    );
  }
}
