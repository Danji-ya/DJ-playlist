import { useLocation, useHistory } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

function NavbarContainer() {
  const history = useHistory();
  const { pathname: path } = useLocation();

  const handlePath = (url: string) => history.push(url);

  return <Navbar path={path} handlePath={handlePath} />;
}

export default NavbarContainer;
