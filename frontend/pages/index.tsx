import styled from '@emotion/styled';
import WithAuth from 'src/hooks/withAuth';
import Timeline from 'src/components/Timeline/Timeline';
import Layout from 'src/components/Layout';

function HomePage() {
  return (
    <PageWrapper>
      <div className="homepage">
          <div className="homePage_navWrapper">
              <Layout >
              </Layout>
          </div>

          <div className="homePage__timeLine">
              <Timeline/>
          </div>
        </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.main`
    .homepage {
        display: flex;
        flex-direction: row;
    }
    
    .homepage__navWraper {
        position: relative;
        flex: 0.2;
    }
    
    .homepage__timeline {
        position: relative;
        flex: 0.8;
    }
`;

export default WithAuth(HomePage);
