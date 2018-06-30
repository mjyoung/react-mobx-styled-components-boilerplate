import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getPosts();
  }

  getPosts = async () => {
    const posts = await fetch('https://godzilla.getsandbox.com/posts');
    const json = await posts.json();
    this.setState({
      posts: json.data,
    });
  };

  render() {
    return (
      <div className="">
        This is home page... {this.state.posts && this.state.posts.length}
        <br />
        <Link to="/todo">todo....</Link>
      </div>
    );
  }
}

HomePage.propTypes = {};
export default HomePage;
