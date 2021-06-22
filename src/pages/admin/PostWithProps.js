// // KEEP FOR EXAMPLE PURPOSES (example of props way of doing the same), CAN BE DELETED LATER
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { logout } from "../store/actions/auth";
// import { getPostById, deletePost, updatePost } from "../store/actions/post";
// import { Container } from "react-bootstrap";

// const Post = (props) => {

//   useEffect(() => {
//     props.getPostById(props.match.params.id);
//   }, [props.getPostById, props.match.params.id]);


//   if(props.onePostState.loading) {
//     return (
//     <h1>
//       Loading...
//       {console.log('loading props', props)}
//     </h1>
//     )
//   }

//   return (
//     <>
//     {console.log('PROPS:', props)}
//      <Container key={props.onePostState.post.id}>
//        <Link className='btn btn-info' to='/dashboard'>Back</Link>
//        <h2>{props.onePostState.post.title}</h2>
//        <p>{props.onePostState.post.content}</p>

//        <Link 
//          className='btn btn-danger'
//          to='/dashboard'
//          onClick={() => props.deletePost(props.onePostState.post.id)}
//        >Delete</Link>

//        <button 
//          className='btn btn-info'
//          onClick={() => props.updatePost(props.onePostState.post)}
//        >
//          Update
//        </button>
//      </Container>
//     </>
//   );
// };

// const mapStateToProps = (state) => {
//   console.log("STATE:", state);
//   return {
//     onePostState: state.onePost,
//   };
// };

// export default connect(mapStateToProps, {
//   getPostById,
//   deletePost,
//   updatePost,
//   logout,
// })(Post);
