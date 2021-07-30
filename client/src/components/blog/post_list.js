import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderTags(tags) {
    return tags.map(tag => {
      return <span className="badge badge-info span-with-margin" key={tag}>{tag}</span>;
    });
  }

  renderPostSummary(post) {
    return (
      <div key={post._id}>
        <div className="p_container">
          <div className="row blog"> 
              <div className="blog_title col-sm-8 lg-8 xl-8">
                <h4 className="author">Written By {post.authorName}</h4>
                <Link className="link-without-underline" to={`/posts/${post._id}`}><h3>{post.title}</h3></Link>
                <p className="description">{post.content}</p>
                {this.renderTags(post.categories)}
                <h4 className="author">Published on {new Date(post.time).toLocaleString()}</h4>
              </div>
              <div className="blog_pic col-sm-4 lg-4 xl-4">
                <img src={post.featureImage} height="150px" width="200px"></img>
              </div>
            </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="post">
        <Link className="btn btn-primary mb-5" to={'/posts/new'}>Publish A New Post</Link>
        {_.map(this.props.posts, post => {
          return this.renderPostSummary(post);
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);