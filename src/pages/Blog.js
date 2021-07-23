import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Article from '../components/Article';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import './Blog.css';

function Blog(props) {
  return (
    <div>
      <Jumbotron />

      <section className="format">
      <Article />
      <Sidebar />
      </section>

      <Footer />
    </div>
  )
};

export default Blog;

