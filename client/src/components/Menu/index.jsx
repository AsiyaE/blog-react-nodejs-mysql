import React from 'react';
import styles from './Menu.module.scss';
import * as cn  from 'classnames'

const Menu = () => {
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
    <div className={cn('menu',styles.menu)}>
      <h1>Other post you may like</h1>
	  {posts.map(post =>(
		<div className={styles.post} key={post.id}>
			<img src={post.img} alt=""/>
			<h2>{post.title}</h2>
			<button>Read more</button>
		</div>
	  ))}
    </div>
  );
};

export default Menu;
