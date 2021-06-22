import React, { useState} from "react";

const UpdatePost = (props) => {
  const [post, setPost] = useState(props.post);

  const handleChange = (e) => {
    // const { name, value } = e.target
    // setUpdatedPost({ ...post, [name]: value })
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    console.log("post:", post);
    e.preventDefault();
    props.updatePost(post);
    // setFormData({title: '', content:''})
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={post.title}
        onChange={handleChange}
        required
      />
      <textarea
        type="text"
        placeholder="Content"
        name="content"
        value={post.content}
        onChange={handleChange}
        required
      />
      <button className="btn btn-info" onClick={submitForm}>
        Update
      </button>
    </form>
  );
};

export default UpdatePost;
