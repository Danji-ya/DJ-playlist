import Layout from '../../components/common/Layout';
import Sidebar from '../../components/Sidebar';
import { icons } from '../../constants';
import PlaylistContainer from '../../containers/PlaylistContainer';
import Styled from './MainPage.style';

function MainPage() {
  return (
    <Layout>
      <Sidebar />
      <Styled.Title>
        <icons.Logo width={65} height={65} />
      </Styled.Title>

      <PlaylistContainer />
    </Layout>
  );
}

export default MainPage;
