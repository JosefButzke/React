import React from "react";

function PostHeader({ author, date }) {
  return (
    <div className="postHeader">
      <img className="fotoPerfil" src={author.avatar} />
      <div className="headerDetails">
        {author.name}
        <div className="date">
          <h1>{date}</h1>
        </div>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <>
      {comments.map(comment => (
        <div key={comment.id} className="postHeader">
          <img className="fotoPerfil" src={comment.author.avatar} />
          <div className="coment">
            <p>
              <span className="nameComment">{comment.author.name} </span>
              {comment.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="postListDetails">
      <PostHeader author={author} date={date} />
      <div className="content">{content}</div>

      <div className="divider" />
      {<PostComments comments={comments} />}
    </div>
  );
}

export default PostItem;
