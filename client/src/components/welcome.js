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
        <img src={post.featureImage}/>
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
      <div className="home">

    { /*Main tab for a primary message or call to action*/ }
    <div className="home_banner">
      <div className="row">
        <div className="col-md-6">
          <h1 className="home_title">Where good ideas find you.</h1>
          <p className="home_title_para">Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
          <p><Link className="btn btn-primary btn-lg home_btn" to="/signup" role="button">Get Started &raquo;</Link></p>
        </div>
        <div className="col-md-6 home_banner_image">
        <img src="media/image1.png" height="400px" width="60%" alt="home_banner_image"/>
        </div>
      </div>
    </div>

    { /*Example row of columns*/ }
   
    <div className="post">
        {/* <Link className="btn btn-primary mb-5" to={'/posts/new'}>Publish A New Post</Link> */}
        <div className="container">
        <h1 className="latest_post_title"> Latest Post</h1>
          <div className="row blog"> 
            <div className="blog_title col-sm-8 lg-8 xl-8">
              <h4 className="author">Written By Author</h4>
              <h3>Social Media, Memes, and the Spread of Misinformation</h3>
              <p>Americans must rise above confirmation bias, groupthink, and tribalism</p>
              <h4 className="author">Published on Date</h4>
            </div>
            <div className="blog_pic col-sm-4 lg-4 xl-4">
              <img src="media/blog1.jpeg" height="150px" width="200px"></img>
            </div>
          </div>
        </div>
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