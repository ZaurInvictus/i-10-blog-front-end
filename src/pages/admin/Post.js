import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import { getPostById, deletePost, updatePost } from "../../store/actions/post";
import { Container } from "react-bootstrap";
import Alert from '../../components/Alert'
import UpdatePost from "./UpdatePost";


const Post = ({
  getPostById,
  deletePost,
  updatePost,
  logout,
  match,
  onePostState: { post, loading, error },
}) => {



  useEffect(() => {
    getPostById(match.params.id);
  }, [getPostById, match.params.id]);

  if(loading || post == null) {
    return (
    <h1>
      Loading...
      {console.log('loading props', loading, post)}
    </h1>
    )
  }


  
  return (
    <>
    {/* {error ? error.msg : ''} */}
    <Alert />
    <Link to='/' onClick={logout}>Logout</Link>
     <Container key={post.id}>
       <Link className='btn btn-info' to='/dashboard'>Back</Link>

       <UpdatePost
          post={post}
          updatePost={updatePost}
       />

       <h2>{post.title}</h2>
       <p>{post.content}</p>

       <Link 
         className='btn btn-danger'
         to='/dashboard'
         onClick={() => deletePost(post.id)}
       >Delete</Link>

     </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("STATE:", state);
  return {
    onePostState: state.onePost,
  };
};

export default connect(mapStateToProps, {
  getPostById,
  deletePost,
  updatePost,
  logout,
})(Post);
