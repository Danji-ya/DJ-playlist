import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function HeaderContainer() {
  const navigate = useNavigate();

  const handlePath = (url: string) => navigate(url);

  return <Header handlePath={handlePath} />;
}

export default HeaderContainer;
