import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

function NavbarContainer() {
  const navigate = useNavigate();
  const { pathname: path } = useLocation();

  const handlePath = (url: string) => navigate(url);

  return <Navbar path={path} handlePath={handlePath} />;
}

export default NavbarContainer;
