import { useParams } from 'react-router-dom';
import Container from '../components/Container';

const Home = () => {
  const { continent, country } = useParams();

  return (
    <div className="container">
      <Container continent={continent} country={country} />
    </div>
  );
};
export default Home;
