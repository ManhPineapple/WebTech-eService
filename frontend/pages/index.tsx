import styled from '@emotion/styled';
import WithAuth from 'src/hooks/withAuth';

function Page() {
  return (
    <PageWrapper className='main-page'>
     
    </PageWrapper>
  );
}

const PageWrapper = styled.main`
`;

export default WithAuth(Page);
