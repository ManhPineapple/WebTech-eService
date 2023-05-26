import styled from '@emotion/styled';
import WithAuth from 'src/hooks/withAuth';

function Page() {
  return (
    <PageWrapper className='main-page'>
      Logged in
    </PageWrapper>
  );
}

const PageWrapper = styled.main`
  //css code
`;

export default WithAuth(Page);
