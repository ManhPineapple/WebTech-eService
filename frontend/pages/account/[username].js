import React, {useState} from 'react';
import styled from 'styled-components';
import Layout from 'src/components/Layout'
import Modal from 'react-modal';
import Post from '../../components/Post/Post'
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';
import EditModal from '../../components/EditModal';
import Link from 'next/link';

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px;
`;

const ProfileName = styled.h1`
  font-size: 16px;
  margin: 18px;
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
    &:hover {
      cursor: pointer;
    }
`;
const Settings = styled.div`
  width: 30px;
  margin: 20px;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`
const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
`;

const DropdownItem = styled.li`
  width: 150px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu nền của overlay
    zIndex: 1000, // Độ ưu tiên hiển thị
  },
  content: {
    width: '70%',
    height: '90%',
    top: '50%',
    left: '60%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '60%',
    transform: 'translate(-50%, -50%)',
  },
};
function Profile() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

    const user = {
        username: "johnwick",
        fullname: "John Doe Wick",
        bio: "Front-end Developer, App developer, Data Science, Ai scientist",
        avatarImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeVKKhcw5BVb33-sIFbVwBxpGvFjAORNkHA&usqp=CAU",
        posts: [
          {
            user: "kobee_18",
            postImage:
              "https://nationalzoo.si.edu/sites/default/files/animals/sandcat-002.jpg",
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
          {
            user: "kobee_18",
            postImage:
              "https://nationalzoo.si.edu/sites/default/files/animals/sandcat-002.jpg",
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
          {
            user: "kobee_18",
            postImage:
              "https://nationalzoo.si.edu/sites/default/files/animals/sandcat-002.jpg",
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
          }
        ]
    }
    const handleToggleDropdown = () => {
      setOpen(!open);
    };
    
    const handleOpenModal = (post) => {
      setSelectedPost(post);
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setSelectedPost(null);
      setIsModalOpen(false);
    };
    const handlePostItemClick = (post) => () => {
      handleOpenModal(post);
    };
    function afterOpenModal() {

    }
    const handleClickEdit = (e)=>{
      setOpen(!open)
      setShowEditModal(true);
    }
    const handelClickDelete = (e)=>{
      setOpen(!open)
      handleOpenDeleteModal()
    }
    const handleOpenDeleteModal = () => {
      setShowDeleteModal(true);
    };
  
    const handleCloseDeleteModal = () => {
      setShowDeleteModal(false);
    };
  
    const handleCloseEditModal = () => {
      setShowDeleteModal(false);
    };
  
    const handleDelete = () => {
      // Xử lý logic xóa ở đây
      setShowDeleteModal(false);
    };
    const handleEdit = ()=>{
      setShowEditModal(false)
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
                            <ProfileButton>
                              <Link href='/account/edit'>Edit Profile</Link>
                            </ProfileButton>
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
                                  <PostItem key={index} src={post.postImage} alt={`Photo ${index + 1}`} onClick={handlePostItemClick(post)} />
                                ))}
                    </PostsContainer>
                </div>
            </div>
        </div>
        {/* Post Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Post Modal"
          style={customStyles}
          onAfterOpen={afterOpenModal}
        >
            {selectedPost && (
              <div>
                <Settings onClick={()=>handleToggleDropdown()}>:::</Settings>
                <DropdownList toggle={() => setOpen(!open)}  open={open}>
                  <DropdownItem onClick={()=>handleClickEdit()}>Edit</DropdownItem>
                  <DropdownItem onClick={()=>handelClickDelete()}>Delete</DropdownItem>
                </DropdownList>
                <Post user={selectedPost.user}
                    postImage={selectedPost.postImage}
                    userImage = {selectedPost.userImage}
                    likes={selectedPost.likes}
                    timestamp={selectedPost.timestamp}
                    content={selectedPost.content}
                    listcomments = {selectedPost.listcomments}/>
                <ConfirmDeleteModal
                  show={showDeleteModal}
                  onDelete={()=>handleDelete()}
                  onCancel={()=>handleCloseDeleteModal()}
                />
                <EditModal
                  show={showEditModal}
                  onEdit={()=>handleEdit()}
                  onCancel={()=>handleCloseEditModal()}
                  post = {selectedPost}
                />
              </div>
            )
        }
        </Modal>
    </Wrapper>
  );
}

export default Profile;
