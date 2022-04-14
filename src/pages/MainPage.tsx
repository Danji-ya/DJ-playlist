import Layout from '../components/common/Layout';
import Sidebar from '../components/Sidebar';
import { icons } from '../constants';
import PlaylistContainer from '../containers/PlaylistContainer';
import * as Styled from '../styles/mainBody';

function MainPage() {
  return (
    <Layout>
      <Sidebar />
      <Styled.PlaylistTitleWrapper>
        <icons.Logo width={65} height={65} />
      </Styled.PlaylistTitleWrapper>

      <PlaylistContainer />
    </Layout>
  );
}

export default MainPage;
