import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post/Post';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
    // this.searchPost = this.searchPost.bind(this);
  }
  
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/posts')

    .then(res => {
      // console.log(res.data[0].text)
      this.setState({posts: res.data});
    })
    .catch(err => console.log(err))

  }

  updatePost(id, text) {
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, {text})
    
    .then(res => {
      this.setState({posts: res.data});
      // alert('update post works')
    })
    .catch(err => {
      console.log(err)
      // alert('update post failed')
    })
  }

  deletePost(id) {
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`)
    .then(res => {
      this.setState({posts: res.data});
    })
    .catch(err => console.log(err))
  }

  createPost(text) {
    axios.post(`https://practiceapi.devmountain.com/api/posts`, {text})
    .then(res => {
      this.setState({posts: res.data});
    })
    .catch(err => console.log(err))

  }




  render() {
    const { posts } = this.state;
    // console.log(this.state.posts[0])

    return (
      <div className="App__parent">
        
        <Header 
          // searchPostFn={this.searchPost}
          // updateTextFn={this.updateText}
        />

        <section className="App__content">

          <Compose createPostFn={this.createPost}/>
          {
            posts.map( post => (
              <Post 
                key={post.id} 
                id={post.id}
                text={post.text} 
                date={post.date} 
                updatePostFn={this.updatePost}
                deletePostFn={this.deletePost}
              />
            ))
          }
          
        </section>
      </div>
    );
  }
}

export default App;
