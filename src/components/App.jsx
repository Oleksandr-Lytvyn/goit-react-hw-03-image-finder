import React, { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    resultImg: [],
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prev => {
      return { showModal: !prev.showModal };
    });
  };
  updateQuery = q => {
    this.setState(prevState => {
      return { query: q };
    });
  };
  updateResult = (arr, query) => {
    this.setState(prevState => {
      return {
        resultImg: [...prevState.resultImg, ...arr],
        page: prevState.page + 1,
        query: query,
      };
    });
  };
  updatePage = () => {
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.updateResult} page={this.state.page} />
        <ImageGallery images={this.state.resultImg} toggle={this.toggleModal} />
        {this.state.resultImg.length > 0 && (
          <Button
            query={this.state.query}
            updateResult={this.updateResult}
            updatePage={this.updatePage}
            page={this.state.page}
          />
        )}
        <Loader />
        {this.state.showModal && (
          <Modal toggle={this.toggleModal}>
            <h2>Modalochka</h2>
          </Modal>
        )}
      </>
    );
  }
}
