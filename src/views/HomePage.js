// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type State = {
  posts: Array<*>,
};

class HomePage extends Component<{}, State> {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
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
        <Title>Home Page</Title>
        Number of posts returned from fetch:{' '}
        {this.state.posts && this.state.posts.length}
        <br />
        <Link to="/todo">Go to Todo list</Link>
      </div>
    );
  }
}

const Title = styled.h1`
  color: ${props => props.theme.primary};
`;

export default HomePage;
