import React from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout'


const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px;
`;

const ProfileName = styled.h1`
  font-size: 16px;
  margin: 18px;;
`;

const ProfileUsername = styled.h3`
  font-size: 18px;
  color: gray;
  align-items: center;
`;

const ProfileBio = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  margin-left: 18px;
`;

const ProfileButton = styled.button`
  background-color: #EFEFEF;
  color: black;
  padding: 5px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 15px;
  width: 150px;
`;
const Wrapper = styled.div`
    .container {
      display: flex;
      flex-direction: row;
    }

    .navWrapper {
      position: relative;
      flex: 0.2;
    }

    .editWrapper {
      display: flex;
      flex-direction: column;
      position: relative;
      flex: 0.8;
    }
    .contain_username{
        display: flex;
        flex-direction: row;
        padding: 20px;
        align-items: center;
        margin-top: 10px;
    }
    .container_posts{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        margin-right: 30vh;
        margin-bottom: 10vh;
    }
    .parent-container {
        margin-right: 20vh;
        display: flex;
        justify-content: center; /* Căn giữa ngang */
        align-items: center; /* Căn giữa dọc */
      }
      
    .horizontal-line {
        width: 70%;
        border: none;
        height: 1px;
        background-color: #000000; /* Màu của đường kẻ */
    }
      
      
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 20vh;
`;
const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  width: 80vh;
`;

const PostItem = styled.img`
    display: block;
    object-fit: cover;
    width: 30vh;
    height: 30vh;
    border-radius: 1%;
`;

function Profile() {
    const user = {
        username: "johnwick",
        fullname: "John Doe Wick",
        bio: "Front-end Developer, App developer, Data Science, Ai scientist",
        avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeVKKhcw5BVb33-sIFbVwBxpGvFjAORNkHA&usqp=CAU",
        posts: [
                'https://nationalzoo.si.edu/sites/default/files/animals/sandcat-002.jpg',
                'https://nationalzoo.si.edu/sites/default/files/animals/sandcat-002.jpg',
                'https://nationalzoo.si.edu/sites/default/files/animals/sandcat-002.jpg',
                'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoruwy-5_j_KpZtsrV4SjEz4rw-VI2kQF3ZwAydzyqkEAhrbHCPctqTbRDIt1QUsxD4Zo&usqp=CAU',
                'https://nationalzoo.si.edu/sites/default/files/animals/sandcat-002.jpg',
                'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoruwy-5_j_KpZtsrV4SjEz4rw-VI2kQF3ZwAydzyqkEAhrbHCPctqTbRDIt1QUsxD4Zo&usqp=CAU',
                'https://nationalzoo.si.edu/sites/default/files/animals/sandcat-002.jpg'
                ]
    }
    const handleEditProfile = (e)=>{
        
    }
  return (
    <Wrapper>
        <div className="container">
                <div className="navWrapper">
                    <Layout >
                    </Layout>
                </div>
            <div className="editWrapper">
                <ProfileContainer>
                    <div>
                        <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeVKKhcw5BVb33-sIFbVwBxpGvFjAORNkHA&usqp=CAU" alt="Profile Image" />
                    </div>
                    <div>
                        <div className='contain_username'>
                            <ProfileUsername>{user.username}</ProfileUsername>
                            <ProfileButton onClick = {handleEditProfile}>Edit Profile</ProfileButton>
                        </div>
                        <ProfileBio><strong>{user.posts.length}</strong> posts</ProfileBio>
                        <ProfileName>{user.fullname}</ProfileName>
                        <ProfileBio>{user.bio}</ProfileBio>
                        <ProfileName><strong>::::</strong> POSTS</ProfileName>
                    </div>
                </ProfileContainer>
                <div class="parent-container">
                    <div class="horizontal-line"></div>
                </div>
                <div className='container_posts'>
                    <PostsContainer>
                                {user.posts.map((post, index) => (
                                <PostItem key={index} src={post} alt={`Photo ${index + 1}`} />
                                ))}
                    </PostsContainer>
                </div>
            </div>
        </div>
    </Wrapper>
  );
}

export default Profile;
