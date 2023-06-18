import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import styled from '@emotion/styled';
import { Avatar } from "antd";
import { Comment } from '@ant-design/compatible';
import { Input } from "antd";
import { useState } from "react";

function Post({ user, postImage,userImage, likes, timestamp, content,listcomments }) {
  const [reply,setReply] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentText = e.target.value;
    console.log(commentText);
    const newComment = {
      author: "new cat",
      content: commentText,
      avatar:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/1024/512/FatCat1Istock.jpg?ve=1&tl=1",
      datetime: "1m",
      replies: [], // Thêm một mảng để lưu trữ các phản hồi
    };

    // tao moi comment o day

    setReply("");
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
              {listcomments.map((item)=>(
                <Comment 
                         avatar = {item.avatar} content ={(item.content)} datetime = {item.datetime} author ={item.author} 
                         actions={[<span onClick={handleReply(item)} className="reply_action">Reply</span>]}
                         children = {item.replies.map((reply)=>(
                                      <Comment author={reply.author} avatar = {reply.avatar} content = {reply.content}  datetime = {reply.datetime}/>
                                    ))}
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