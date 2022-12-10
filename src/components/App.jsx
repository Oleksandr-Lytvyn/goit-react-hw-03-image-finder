import React, { Component } from 'react';
import axios from 'axios';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { getAPI } from './helpers/getAPI';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    resultImg: [],
    showModal: false,
    showLoader: false,
  };

  toggleModal = () => {
    this.setState(prev => {
      return { showModal: !prev.showModal };
    });
  };

  // updateQuery = q => {
  //   this.setState(prevState => {
  //     return { query: q };
  //   });
  // };
  updateResult = event => {
    console.log('update result');
    event.preventDefault();
    const { page } = this.state;
    const query = event.target.elements.query.value.toLowerCase();
    try {
      getAPI(query, page).then(response => {
        console.log(response);
        this.setState(prev => {
          return { resultImg: response };
        });
      });
    } catch (error) {
      console.log(error);
    }
    // if (query === this.state.query) {
    //   this.setState(prevState => {
    //     return {
    //       resultImg: [...prevState.resultImg, ...arr],
    //       page: prevState.page + 1,
    //       query: query,
    //     };
    //   });
    // } else {
    //   this.setState(prevState => {
    //     return {
    //       resultImg: [...arr],
    //       page: 1,
    //       query: query,
    //     };
    //   });
    // }
  };
  // updatePage = () => {
  //   this.setState(prev => {
  //     return { page: prev.page + 1 };
  //   });
  // };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.updateResult} page={this.state.page} />
        <ImageGallery images={this.state.resultImg} toggle={this.toggleModal} />
        {/* {this.state.resultImg.length > 0 && (
          <Button
            query={this.state.query}
            updateResult={this.updateResult}
            updatePage={this.updatePage}
            page={this.state.page}
          />
        )} */}
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
