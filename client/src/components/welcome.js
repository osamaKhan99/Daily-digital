import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { latestPosts } from '../actions/index';

class Welcome extends Component {

  componentDidMount(){
    this.props.latestPosts();
  }

  renderPostSummary(post){
    return (
      <div key={post._id}>
        <h3>
          <Link className="link-without-underline" to={`/posts/${post._id}`}>
            {post.title}
          </Link>
        </h3>
        <span className="span-with-margin text-grey"> • </span>
        <span className="span-with-margin text-grey">{post.authorName}</span>
        <span className="span-with-margin text-grey"> • </span>
        <span className="span-with-margin text-grey">{new Date(post.time).toLocaleString()}</span>
        <hr />
      </div>
    );
  }
  
  render(){

    return(
      <div>

    { /*Main tab for a primary message or call to action*/ }
    <div className="jumbotron">
      <h1 className="display-3">Welcome!</h1>
      <p>This is a MERN stack based fully functioning blog system. Here, you can share your experience and ideas with other people.</p>
      <p><Link className="btn btn-primary btn-lg" to="/posts" role="button">Look the blog posts &raquo;</Link></p>
    </div>

    { /*Example row of columns*/ }
    <div className="row text-justify">
      <div className="col-md-4">
        <h2>Front-end</h2>
        <p>The front-end client is built as a simple-page-application using React. Besides, React-Router is used for navigation. Bootstrap 4 is used for page styling.</p>
      </div>
      <div className="col-md-4">
        <h2>Back-end</h2>
        <p>The back-end server is built with Express.js and Node.js, which provides completed REST APIs for data interaction. Passport.js is used as an authentication middleware in the sever. JSON Web Token (JWT) is used for signing in user and making authenticated requests.</p>
      </div>
      <div className="col-md-4">
        <h2>Database</h2>
        <p>MongoDB is used as the back-end database, which include different data models/schemas (i.e., User, Post and Comment). Mongoose is used to access the MongoDB for CRUD actions (create, read, update and delete).</p>
      </div>
    </div>
    <div className="post">
      <h1>Latest Post</h1>
        {/* <Link className="btn btn-primary mb-5" to={'/posts/new'}>Publish A New Post</Link> */}
        {_.map(this.props.posts, post => {
          console.log("latest map function")
          return this.renderPostSummary(post);
        })}
      </div>
  </div>
    )
  }

}

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}


export default connect(mapStateToProps, { latestPosts })(Welcome);