import tw from 'twin.macro';

export const HeaderContainer = tw.div`
  flex flex-col items-center border-b border-gray-200 md:px-14
`;

export const Container = tw.div`
  flex flex-wrap items-center content-center justify-between w-full gap-5 p-5 bg-transparent md:gap-10
`;

export const MainTitile = tw.h1`
  text-3xl font-bold uppercase lg:text-5xl
`;

export const SearchBar = tw.div`
flex order-1 flex-1 px-2 py-1 min-w-[268px] max-w-2xl text-gray-400 border-[1px] border-gray-200 rounded sm:w-auto md:order-none
`;
