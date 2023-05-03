import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: '27 Birds Painting',
      description: 'Jennifer Lommers',
      img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/27-birds-jennifer-lommers.jpg',
    },
    {
      id: 2,
      title: 'Chachi tree frog Painting',
      description: 'Jasper Oostland',
      img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/chachi-tree-frog-jasper-oostland.jpg',
    },
    {
      id: 3,
      title: 'Dance Of The Longhorns Painting',
      description: 'Marion Rose',
      img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/dance-of-the-longhorns-marion-rose.jpg',
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt=""></img>
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
