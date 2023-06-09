import React, { useState } from "react";
import Post from "../Post/Post";
import Suggestions from "./Suggestions";
import styled from '@emotion/styled';

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      userImage: 
        "https://pbs.twimg.com/profile_images/1633238286045962243/JfgDezi9_400x400.jpg",
      likes: 54,
      timestamp: "2d",
      content:"This is a post content!!!",
      listcomments: [
        { author: "cat one",
          avatar: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/1024/512/FatCat1Istock.jpg?ve=1&tl=1",
          content: "That's good one!", datetime: "1d",
          replies: [
            {author: "cat two", avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"},
            {author: "cat three",avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"}
          ]
        },
        { author: "cat one",
          avatar: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/1024/512/FatCat1Istock.jpg?ve=1&tl=1",
          content: "That's good one!", datetime: "1d",
          replies: [
            {author: "cat two", avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"},
            {author: "cat three",avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"}
          ]
        }
      ]
    },
    {
      user: "johndoe",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      userImage: 
        "https://pbs.twimg.com/profile_images/1633238286045962243/JfgDezi9_400x400.jpg",
      likes: 432,
      timestamp: "2d",
      content:"This is a post content!!!",
      listcomments: [
        { author: "cat one",
          avatar: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/1024/512/FatCat1Istock.jpg?ve=1&tl=1",
          content: "That's good one!", datetime: "1d",
          replies: [
            {author: "cat two", avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"},
            {author: "cat three",avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"}
          ]
        },
        { author: "cat one",
          avatar: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/1024/512/FatCat1Istock.jpg?ve=1&tl=1",
          content: "That's good one!", datetime: "1d",
          replies: [
            {author: "cat two", avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"},
            {author: "cat three",avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"}
          ]
        }
      ]
    },
    {
      user: "mariussss",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      userImage: 
        "https://pbs.twimg.com/profile_images/1633238286045962243/JfgDezi9_400x400.jpg",
      likes: 140,
      timestamp: "2d",
      content:"This is a post content!!!",
      listcomments: [
        { author: "cat one",
          avatar: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/1024/512/FatCat1Istock.jpg?ve=1&tl=1",
          content: "That's good one!", datetime: "1d",
          replies: [
            {author: "cat two", avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"},
            {author: "cat three",avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"}
          ]
        },
        { author: "cat one",
          avatar: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/1024/512/FatCat1Istock.jpg?ve=1&tl=1",
          content: "That's good one!", datetime: "1d",
          replies: [
            {author: "cat two", avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"},
            {author: "cat three",avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"}
          ]
        }
      ]
    },
    {
      user: "kobee_18",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      userImage: 
        "https://pbs.twimg.com/profile_images/1633238286045962243/JfgDezi9_400x400.jpg",
        likes: 14,
      timestamp: "2d",
      content:"This is a post content!!!",
      listcomments: [
        { author: "cat one",
          avatar: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/1024/512/FatCat1Istock.jpg?ve=1&tl=1",
          content: "That's good one!", datetime: "1d",
          replies: [
            {author: "cat two", avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"},
            {author: "cat three",avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"}
          ]
        },
        { author: "cat one",
          avatar: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/1024/512/FatCat1Istock.jpg?ve=1&tl=1",
          content: "That's good one!", datetime: "1d",
          replies: [
            {author: "cat two", avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"},
            {author: "cat three",avatar: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg", content: "Yes, i think it too", datetime: "1d"}
          ]
        }
      ]
    },
  ]);

  return (
    <PageWrapper>
        <div className="timeline">
          <div className="timeline__left">
            <div className="timeline__posts">
              {posts.map((post) => (
                <Post
                  user={post.user}
                  postImage={post.postImage}
                  userImage = {post.userImage}
                  likes={post.likes}
                  timestamp={post.timestamp}
                  content={post.content}
                  listcomments = {post.listcomments}
                />
              ))}
            </div>
        </div>
        <div className="timeline__right">
          <Suggestions user={{userImage: "https://img.freepik.com/free-vector/cute-fat-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4619.jpg",
                              username: "cat one",
                              fullName: "Nguyen Van Meo"
                              }} />
        </div>
      </div>
    </PageWrapper>
  );
}
const PageWrapper = styled.main`
  .timeline {
    display: flex;
    flex-direction: row;
  }

  .timeline__left {
    flex: 0.7;
  }

  .timeline__right {
    flex: 0.3;
  }

  .timeline__posts {
  }
`;
export default Timeline;