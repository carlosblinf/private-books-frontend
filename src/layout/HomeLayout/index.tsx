import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import FixedBottomNavigation from '../../components/FixedBottomNavigation';

const ContainerLayout = tw.div`
  flex flex-col min-h-screen
`;

function HomeLayout() {
  return (
    <ContainerLayout>
      <Header />
      <main className="main">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <FixedBottomNavigation />
    </ContainerLayout>
  );
}

export default HomeLayout;
