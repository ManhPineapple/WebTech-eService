import styled from '@emotion/styled';
import { Dropdown, MenuProps } from 'antd';
import Link from 'next/link';
import { useMemo } from 'react';
import { BsGear, BsList } from 'react-icons/bs';
import useLogout from 'src/hooks/useLogout';
import { useAppDispatch, useAppSelector } from 'src/redux/store';

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
          <DropdownItemLink href="/account/edit">
            <span>Setting</span>
            <BsGear size={16} />
          </DropdownItemLink>
        ),
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
    margin-top: 25px;
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
