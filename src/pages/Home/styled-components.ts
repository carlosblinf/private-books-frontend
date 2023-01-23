import tw from 'twin.macro';

export const HomeContainer = tw.div`
flex flex-col items-center gap-5 px-5 py-5 md:px-20
`;

export const HeroContainer = tw.div`
flex flex-col-reverse justify-between w-full gap-10 md:flex-row min-h-[400px]
`;
export const HeroInfoContainer = tw.div`
flex flex-col justify-center w-full gap-3 md:w-2/5 lg:w-1/3
`;
export const Title = tw.h1`
text-3xl font-bold md:text-4xl lg:text-6xl
`;
