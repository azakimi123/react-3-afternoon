import React, { Component } from 'react';
import axios from 'axios';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
          str: ''
      
    }
    this.searchPost = this.searchPost.bind(this);
  }

  // componentDidMount() {
  //   axios.get('https://practiceapi.devmountain.com/api/posts')

  //   .then(res => {
  //     // console.log(res.data[0].text)
  //     this.setState({posts: res.data});
  //   })
  //   .catch(err => console.log(err))

  // }

  // updateText( value ) {
  //   console.log(value)
  //   this.setState({ str: value });
  // }

  // searchPost() {
  //   axios.get('https://practiceapi.devmountain.com/api/posts')

  //   .then(res => {
  //     alert('search has fired')
  //     this.setState({posts: res.data.filter(word => word.text === this.state.str)});
  //   })
  //   .catch(err => console.log(err))
  // }
  updateText( value ) {
    console.log(value)
    this.setState({ str: value });
  }

  searchPost() {
    axios.get('https://practiceapi.devmountain.com/api/posts')

    .then(res => {
      this.setState({posts: res.data.filter(word => word.text === this.state.str)});
      alert('Search button pressed')
    })
    .catch(err => console.log(err))
  }


  render() {
    // console.log(this.state.str)
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input 
            onChange={ ( e ) => this.updateText( e.target.value ) }
            placeholder="Search Your Feed" 
          />

          <SearchIcon 
            id="Search__icon" 
            onClick={this.searchPost}
          />
        </div>
        
      </section>
    )
  }
}