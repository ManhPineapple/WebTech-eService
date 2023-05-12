import styled from '@emotion/styled';
import { Dropdown, MenuProps } from 'antd';
import Link from 'next/link';
import { useMemo } from 'react';
import { BsGear } from 'react-icons/bs';
import { FaRegMoon } from 'react-icons/fa';
import { ImSun } from 'react-icons/im';
import useLogout from 'src/hooks/useLogout';
import { toggleThemeMode } from 'src/redux/reducer/theme.reducer';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import {BsList} from 'react-icons/bs'

function UserDropdown({ collapsed }: { collapsed?: boolean }) {
  const { mode } = useAppSelector((s) => s.theme);
  const { data: userState } = useAppSelector((s) => s.user);
  const dispatch = useAppDispatch();

  const { handleLogout, isLoadingLogout } = useLogout();

  const dropitems = useMemo<MenuProps['items']>(
    () => [
      {
        key: 'Setting',
        label: (
          <DropdownItemLink href="/">
            <span>Setting</span>
            <BsGear size={16} />
          </DropdownItemLink>
        ),
      },
      {
        key: 'ThemeMode',
        label: (
          <DropdownItemBtn onClick={() => dispatch(toggleThemeMode(null))}>
            <span>{mode === 'dark' ? 'Light mode' : 'Dark mode'}</span>
            {mode === 'dark' ? <ImSun size={15} /> : <FaRegMoon size={15} />}
          </DropdownItemBtn>
        ),
        disabled: isLoadingLogout,
      },
      {
        type: 'divider',
      },
      {
        key: 'Logout',
        label: (
          <DropdownItemBtn onClick={() => handleLogout()}>
            Logout
          </DropdownItemBtn>
        ),
        disabled: isLoadingLogout,
      },
    ],
    [dispatch, handleLogout, isLoadingLogout, mode]
  );

  if (!userState) return <></>;

  return (
    <Dropdown
      menu={{ items: dropitems }}
      placement="topRight"
      destroyPopupOnHide
    >
      <DropdownReference style={{ paddingRight: !!collapsed ? 18 : 2 }}>
        {!collapsed && (
          <div className='cover-icon'>
            <BsList size={30} />
            <span style={{marginLeft: '8px'}}>More</span>
           </div>
        )}
      </DropdownReference>
    </Dropdown>
  );
}

const DropdownReference = styled.div`
    margin-top: 550px;
    margin-left: 25px;
    .cover-icon {
      display: flex;
      align-items: center;
    }
    
`;

const DropdownItemBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  padding: 4px;
`;

const DropdownItemLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  padding: 4px;
`;

export default UserDropdown;
