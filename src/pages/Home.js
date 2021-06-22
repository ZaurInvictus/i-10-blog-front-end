import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderNav from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import { getPosts } from "../store/actions/post";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";

const Home = ({ getPosts, postsState: { posts, loading, error } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) return <h1>Loading...</h1>;
  if (posts.length <= 0) return <h1>No Posts Created...</h1>;

  return (
    <>
      <HeaderNav />
      <Jumbotron />
      <Container>
        
        <Row>
          <Col className="col-lg-8 col-md-10 mx-auto">
            {posts.map(post=> {
              return (
                <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    {post.title}
                  </h2>
                  <h3 className="post-subtitle">
                    {post.content}
                  </h3>
                </a>
                <p className="post-meta">
                  Posted by
                  <a href="/home">Someone Someone</a>
                  <span>on September 24, 2019</span>
                  <span>{post.created_at}</span>
                </p>
              </div>
              )
            })}
          </Col>
        </Row>

        <hr></hr>
        <div className="clearfix">
          <a className="btn btn-primary float-right" href="/home">
            Older Posts &rarr;
          </a>
        </div>
        <hr></hr>

      </Container>
    </>
  );
};

Home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  postsState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  // console.log("State:", state);
  return {
    postsState: state.allPosts,
  };
};

export default connect(mapStateToProps, { getPosts })(Home);
