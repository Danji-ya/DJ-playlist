import { useHistory } from 'react-router-dom';
import Header from '../components/common/Header';

function HeaderContainer() {
  const history = useHistory();

  const handlePath = (url: string) => history.push(url);

  return <Header handlePath={handlePath} />;
}

export default HeaderContainer;
