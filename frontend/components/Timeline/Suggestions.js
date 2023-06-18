import styled from '@emotion/styled';
import { Avatar } from "antd";

function Suggestions({user}) {
  return (
    <PageWrapper>
        <div className="suggestions">
          <Avatar size={60} src = {user.userImage}/>
          <div style={{marginLeft: '10px'}}>
              <span style={{fontWeight: 'bold'}}>{user.username}</span>
              <p>{user.fullName}</p>
          </div>
        </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.main`
.suggestions {
  margin: 30px;
  display: flex;
}
.suggestions:hover{
  cursor: pointer;
}
`;

export default Suggestions;