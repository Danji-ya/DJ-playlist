import { useLocation, useNavigate } from 'react-router-dom';
import Gnb from '../components/Gnb';

function GnbContainer() {
  const navigate = useNavigate();
  const { pathname: path } = useLocation();

  const handlePath = (url: string) => navigate(url);

  return <Gnb path={path} handlePath={handlePath} />;
}

export default GnbContainer;
