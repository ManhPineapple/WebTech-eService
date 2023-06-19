/* eslint-disable react/no-children-prop */
import { Comment } from '@ant-design/compatible';
import styled from '@emotion/styled';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar, Input } from "antd";
import { useState } from 'react';
import { useAppSelector } from 'src/redux/store';

function Post({ user, postId, postImage,userImage, likes, timestamp, content, listcomments }) {
  const [reply, setReply] = useState('');
  const { currentUser } = useAppSelector((s) => ({
    currentUser: s.user.data,
  }));

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentText = e.target.value;
    console.log(commentText, postId);
    // tao moi comment o day
    fetch('http://localhost:8000/forum/createcomment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ID_Post: postId, content: commentText }),
      credentials: 'include'
    }).then(res => res.json()).then((res) => {
      if (res.message == 'Success') listcomments.push({ content: commentText, User: {username: currentUser.username, avatar: null} })
      setReply("");
    })
  };

  const handleReply = (item)=>()=>{
    console.log(item);
    // Thay đổi username reply ở đây
    setReply("@"+"name" +" ")
  }
  const handleReplyInputChange = (e) => {
    setReply(e.target.value); // Cập nhật giá trị của Input khi người dùng nhập liệu
  };

  return (
    <PageWrapper>
      <div className="post">
          <div className="post__header">
            <div className="post__headerAuthor">
              <Avatar src ={userImage}/>
                {user} • <span style={{marginLeft: '5px'}}>{timestamp}</span>
            </div>
          </div>
          <div className="post__image">
            <img src={postImage} alt="Post Image" />
          </div>
          <div className="post__footer">
            <div className="post__footerIcons">
              <div className="post__iconsMain">
                <FavoriteBorderIcon className="postIcon" />
                <ChatBubbleOutlineIcon className="postIcon" />
              </div>
            </div>
            <span style={{fontWeight: 'bold'}}>Liked by {likes} people.</span>
          </div>
          <div className="content">
              <span style={{fontWeight : 'bold'}}>{user}</span>
              <span style={{marginLeft: '10px'}}>{content}</span>
          </div>
          <div className="listComment">
              {listcomments?.map((item, index)=>(
                <Comment 
                    key={index}
                    avatar = {item.User.avatar} content ={(item.content)} author ={item.User.username} 
                    actions={<span onClick={handleReply(item)} className="reply_action">Reply</span>}
                />
              ))}
              <Input placeholder="Add a comment..." onPressEnter={handleCommentSubmit} value={reply} onChange={handleReplyInputChange} />
          </div>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.main`
  .post {
    margin: 20px;
    height: auto;
    width: 95%;
  }

  .post__header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }

  .post__headerAuthor {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bolder;
  }

  .post__headerAuthor > span {
    color: grey;
    font-size: 15px;
  }

  .post__image > img {
    width: 100%;
    border-radius: 6px;
    border: 0.6px solid rgba(128, 128, 128, 0.516);
  }

  .post__footer {
  }

  .post__footerIcons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .postIcon {
    padding: 7px;
    font-size: 30px;
  }

  .postIcon:hover {
    cursor: pointer;
  }
  .reply_action:hover{
    cursor: pointer;
  }
`;

export default Post;