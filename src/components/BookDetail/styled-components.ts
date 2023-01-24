import tw from 'twin.macro';

export const BookDetailContainer = tw.div`
flex flex-col lg:flex-row gap-5 px-5 md:px-20 py-5 md:w-[80%] m-auto mt-2
`;

export const BookDetails = tw.div`
flex-1 flex flex-col gap-2 justify-between p-3
`;

export const BookTitle = tw.h2`
font-medium text-base uppercase
`;

export const BookSubtitle = tw.h3`
font-bold text-2xl md:text-4xl
`;

export const AuthorContainer = tw.div`
flex flex-col justify-between
`;

export const DetailContainer = tw.div`
flex flex-wrap gap-2
`;

export const DetailSection = tw.div`
flex flex-1 flex-col gap-2
`;

export const Actions = tw.div`
flex gap-3 items-center cursor-pointer
`;
