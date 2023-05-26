import styled from '@emotion/styled';
import { Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StrictMode } from 'react';
import { AiFillHome, AiOutlineHeart } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAddBox, MdOutlineExplore } from 'react-icons/md';
import { TiLocationArrowOutline } from 'react-icons/ti';

export const items: Required<MenuProps>['items'] = [
  { 
    label: <Link className='linkMenu' href='/'>Home</Link>,
    icon: <AiFillHome size={26} color='black'/>,
    key: '/',
    className: 'side-menu-item',
  },
  {
    label: <Link className='linkMenu' href='/'>Search</Link>,
    icon: <BsSearch size={26} color='black'/>,
    key: '/',
    className: 'side-menu-item',
  },
  {
    label: <Link className='linkMenu' href='/'>Explore</Link>,
    icon: <MdOutlineExplore size={26} color='black'/>,
    key: '/',
    className: 'side-menu-item',
  },
  {
    label: <Link className='linkMenu' href='/'>Reels</Link>,
    icon: <BiMoviePlay size={26} color='black'/>,
    key: '/',
    className: 'side-menu-item',
  },
  {
    label: <Link className='linkMenu' href='/'>Message</Link>,
    icon: <TiLocationArrowOutline size={26} color='black'/>,
    key: '/',
    className: 'side-menu-item',
  },
  {
    label: <Link className='linkMenu' href='/'>Notifications</Link>,
    icon: <AiOutlineHeart size={26} color='black'/>,
    key: '/',
    className: 'side-menu-item',
  },
  {
    label: <Link className='linkMenu' href='/info'>Create</Link>,
    icon: <MdOutlineAddBox size={26} color='black'/>,
    key: '/',
    className: 'side-menu-item',
  },
  {
    label: <Link className='linkMenu' href='/'>Profile</Link>,
    icon: <CgProfile size={26} color='black'/>,
    key: '/',
    className: 'side-menu-item',
  },
];

function MenuNav() {
  const { asPath, push } = useRouter();
  return (
    <MenuWrapper>
      <StrictMode>
        <Menu
          selectable={false}
          theme='light'
          defaultSelectedKeys={[asPath]}
          style={{backgroundColor:'transparent' }}
          mode='inline'
          className='side-menu'
          items={items}
        />
      </StrictMode>
    </MenuWrapper>
  );
}

const MenuWrapper = styled.main`
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 20px;

  .linkMenu {
    color: black !important;
  }
  .side-menu-item {
    margin: 15px 5px;
    background-color: white;
  }
`;
export default MenuNav;
