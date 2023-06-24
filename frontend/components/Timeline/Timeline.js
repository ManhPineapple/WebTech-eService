import styled from '@emotion/styled';
import { useEffect, useState } from "react";
import Post from "../Post/Post";
import Suggestions from "./Suggestions";

function Timeline() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch('http://localhost:8000/forum/getpost').then(res => res.json()).then((res) => {
      console.log(res.listOfPost);
      setPosts(res.listOfPost);
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:8000/user/info', {method: 'get', credentials: 'include'}).then(res => res.json()).then((res) => {
      console.log(res.dbUser);
      setUser(res.dbUser);
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
          {user && 
          <Suggestions user={{userImage: 'http://localhost:8000/' + user.avatar,
                              username: user.username,
                              fullName: user.fullname
                              }} />
          }
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