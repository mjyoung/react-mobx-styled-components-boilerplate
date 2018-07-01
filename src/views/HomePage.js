import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.primary};
`;

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
        <Title>Home Page</Title>
        Number of posts returned from fetch:{' '}
        {this.state.posts && this.state.posts.length}
        <br />
        <Link to="/todo">Go to Todo list</Link>
      </div>
    );
  }
}

HomePage.propTypes = {};
export default HomePage;
