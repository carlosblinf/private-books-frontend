import { Link } from 'react-router-dom';
import WrapperBookList from '../../components/WrapperBookList';
import heroImg from '../../assets/hero.png';
import { HomeContainer, HeroContainer, HeroInfoContainer, Title } from './styled-components';

function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroInfoContainer>
          <Title>The easiest way to find the best book!</Title>
          <p>With us you can collection the most liked book and enjoy it at the same time</p>
          <Link to="/search" className="w-[150px] px-4 py-2 text-center border-2 border-black">
            Explore Book
          </Link>
        </HeroInfoContainer>
        <div className="flex-1 md:min-w-[400px] h-[400px]">
          <img className="w-full h-full rounded" src={heroImg} alt="hero-img" />
        </div>
      </HeroContainer>
      <div className="flex justify-between w-full">
        <h2 className="text-xl font-bold md:text-5xl">
          Update <br /> New Book
        </h2>
      </div>
      <WrapperBookList />
    </HomeContainer>
  );
}

export default Home;
