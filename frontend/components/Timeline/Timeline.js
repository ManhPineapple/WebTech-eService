import styled from '@emotion/styled';
import { useEffect, useState } from "react";
import Post from "../Post/Post";
import Suggestions from "./Suggestions";

function Timeline() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/forum/getpost').then(res => res.json()).then((res) => {
      console.log(res.listOfPost);
      setPosts(res.listOfPost);
    })
  }, [])


  return (
    <PageWrapper>
        <div className="timeline">
          <div className="timeline__left">
            <div className="timeline__posts">
              {posts.map((post, index) => (
                <Post
                  key={index}
                  postId={post.ID_Post}
                  user={post.User.username}
                  postImage={'http://localhost:8000/' + post.postImage}
                  userImage = {'http://localhost:8000/' + post.User.avatar}
                  likes={post.likes}
                  timestamp={post.updateAt}
                  content={post.content}
                  listcomments = {post.Comments}
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