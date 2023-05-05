import styled from '@emotion/styled';
import { Button } from 'antd';
import useLogout from 'src/hooks/useLogout';
import WithAuth from 'src/hooks/withAuth';

function Page() {
  const {handleLogout} = useLogout();
  return (
    <PageWrapper className='main-page'>
      Logged in
      <Button onClick={handleLogout}> Logout </Button>
    </PageWrapper>
  );
}

const PageWrapper = styled.main`
  //css code
`;

export default WithAuth(Page);
