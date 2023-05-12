import styled from '@emotion/styled';
import { Affix, Layout as AntdLayout, Button } from 'antd';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { setSiderCollapsed } from 'src/redux/reducer/visible.reducer';
import { useAppDispatch, useAppSelector } from 'src/redux/store';

const Dropdown = dynamic(() => import('./Dropdown'));
const MenuNav = dynamic(() => import('./MenuNav'));

const Layout = ({ children }: { children: ReactNode }) => {
  const { isSiderCollapsed } = useAppSelector((s) => s.visible);
  const dispatch = useAppDispatch();

  return (
    <LayoutWrapper>
        <Affix offsetTop={0.0001} style={{ height: '100vh' }}>
          <AntdLayout.Sider
            className='sider'
            width={320}
            theme='light'
            breakpoint='lg'
            style={{ height: '100vh'}}
            trigger={null}
            collapsible
            collapsed={isSiderCollapsed}
          >
            <div>
              <div className='img-instagram-container'>
                  <i  data-visualcompletion="css-img" 
                      aria-label="Instagram" role="img"
                      className='img-instagram'></i>
              </div>
            </div>
            {/* header (instagram) */}

            <MenuNav />
            <Button
              className='collapse-button'
              shape='circle'
              icon={
                isSiderCollapsed ? (
                  <AiOutlineMenuUnfold size={24} />
                ) : (
                  <AiOutlineMenuFold size={24} />
                )
              }
              onClick={() => dispatch(setSiderCollapsed(!isSiderCollapsed))}
            ></Button>
            <Dropdown collapsed={isSiderCollapsed} />

            {/* footer(logout...) */}
          </AntdLayout.Sider>
      </Affix>


    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.main`
  .sider {
    background-color: white;
  }
  .img-instagram {
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png);
    background-size: cover;
    width: 100px;
    height: 55px;
    background-repeat: no-repeat;
    display: inline-block;
    margin-left: 40px;
  }
  .collapse-button {
    margin-top: 10px;
    margin-left: 27px;
  }
`;

export default Layout;
