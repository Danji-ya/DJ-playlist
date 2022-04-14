import Layout from '../components/common/Layout';
import Sidebar from '../components/Sidebar';
import SearchContainer from '../containers/SearchContainer';

function SearchPage() {
  return (
    <Layout>
      <Sidebar />
      <SearchContainer />
    </Layout>
  );
}

export default SearchPage;
