import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { getAPI } from './helpers/getAPI';
import { NoResultsBox } from './NoResultsBox/NoResultsBox';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    resultImg: [],
    showModal: false,
    showLoader: false,
    showNoResults: false,
    showButton: false,
    largeImg: '',
  };

  updateShowNoResults = bool => {
    this.setState(prev => {
      return { showNoResults: bool };
    });
  };
  updateLargeImg = link => {
    this.setState(() => {
      return { largeImg: link };
    });
  };
  toggleButton = bool => {
    this.setState(() => {
      return { showButton: bool };
    });
  };
  toggleModal = () => {
    this.setState(prev => {
      return { showModal: !prev.showModal };
    });
  };
  toggleLoader = isLoader => {
    this.setState(() => {
      return { showLoader: isLoader };
    });
  };
  resetPage = () => {
    this.setState(() => {
      return { page: 1 };
    });
  };
  updateResult = event => {
    this.toggleLoader(true);
    event.preventDefault();
    // const { page } = this.state;
    this.resetPage();
    const query = event.target.elements.query.value.toLowerCase();
    if (query === '') {
      this.toggleLoader(false);
      return alert('type anything');
    }

    try {
      getAPI(query, 1).then(response => {
        const images = response.data.hits;
        const total = response.data.total;
        total / 12 <= this.state.page
          ? this.toggleButton(false)
          : this.toggleButton(true);
        this.updateShowNoResults(false);
        images.length === 0 && this.updateShowNoResults(true);
        this.toggleLoader(false);
        this.setState(prev => {
          return { resultImg: images, query: query };
        });
      });
    } catch (error) {
      console.log(error);
    }
    event.target.elements.query.value = '';
  };
  nextPage = () => {
    this.toggleLoader(true);
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
    const { query, page } = this.state;
    console.log(query, page);
    try {
      getAPI(query, page + 1).then(response => {
        const images = response.data.hits;
        const total = response.data.total;
        total / 12 <= this.state.page
          ? this.toggleButton(false)
          : this.toggleButton(true);
        this.toggleLoader(false);
        this.setState(prev => {
          return { resultImg: [...prev.resultImg, ...images], query: query };
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.updateResult} page={this.state.page} />
        <ImageGallery
          images={this.state.resultImg}
          toggle={this.toggleModal}
          updateLargeImg={this.updateLargeImg}
        />
        {this.state.showButton && <Button nextPage={this.nextPage} />}
        {this.state.showNoResults === true && <NoResultsBox />}

        {this.state.showModal && (
          <Modal toggle={this.toggleModal}>
            <img src={this.state.largeImg} alt={this.state.query}></img>
          </Modal>
        )}
        {this.state.showLoader && <Loader />}
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  page: PropTypes.number,
};
ImageGallery.propTypes = {
  images: PropTypes.array,
  toggle: PropTypes.func,
  updateLargeImg: PropTypes.func,
};
Modal.propTypes = {
  toggle: PropTypes.func,
};
