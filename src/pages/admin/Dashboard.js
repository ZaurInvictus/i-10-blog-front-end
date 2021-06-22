import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { logout } from "../../store/actions/auth";
import { getPosts, createPost } from "../../store/actions/post";
import { Link } from "react-router-dom";
import Alert from '../../components/Alert'


const Dashboard = ({ getPosts, createPost, logout,  postsState: { posts, loading, error } }) => {

  const[formData, setFormData] = useState({
    title: '',
    content: ''
  })
  const { title, content } = formData

  const onChange = e => setFormData({ ...formData,  [e.target.name]: e.target.value })

  const submitForm = e => {
    e.preventDefault()
    createPost(formData)
    setFormData({title: '', content:''})
  }

  useEffect(() => {
    getPosts();
  }, [getPosts]);


  if (loading) return <h1>Loading...</h1>
  if (posts.length <= 0 ) return <h1>No Posts Created...</h1>

  return (
    <>
     {/* {error ? error.msg : ''} */}
     <Alert />
      <h1>Dashboard</h1>
      <Link onClick={logout} to="/">
        Logout
      </Link>

      <form onSubmit={submitForm}>
        <input 
          type='text'
          placeholder='Title'
          name='title'
          value={title}
          onChange={(e) => onChange(e)}
          required
        />
        <input 
          type='text'
          placeholder='Content'
          name='content'
          value={content}
          onChange={(e) => onChange(e)}
          required
        />
        <button>Post</button>
      </form>

      {posts.map((post) => (
        <div key={post.id} className="border">
          <ListGroup>
            <ListGroup.Item>
            {/* <Post post={post}/> */}
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </ListGroup.Item>
          </ListGroup>
        </div>
      ))}
    </>
  );
};

Dashboard.propTypes = {
  getPosts: PropTypes.func.isRequired,
  postsState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  // console.log("State:", state);
  return {
    postsState: state.allPosts,
  };
};

export default connect(mapStateToProps, { getPosts, createPost, logout })(Dashboard);
