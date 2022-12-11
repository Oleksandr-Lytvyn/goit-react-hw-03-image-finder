import { Component } from 'react';
import { createPortal } from 'react-dom';
// import './Modal.css';
import { ModalBackdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    console.log('modal component did mount');
    window.addEventListener('keydown', this.keyDown);
  }
  componentWillUnmount() {
    console.log('modal will unmount');
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      // console.log(this.props.toggle);
      return this.props.toggle();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop className="modal_backdrop">
        <ModalWindow className="modal__content">
          {this.props.children}
        </ModalWindow>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
