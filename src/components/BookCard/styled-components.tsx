import tw from 'twin.macro';

export const BookContainer = tw.div`
flex flex-col w-[250px] min-h-[370px] items-center p-1 justify-between
`;
export const BookInfo = tw.div`
flex flex-col px-4 py-2
`;

export const Actions = tw.div`
flex justify-between w-full px-4 py-1
`;

export const BookTitle = tw.h3`
font-bold text-lg
`;

export const BookSubTitle = tw.p`
overflow-hidden text-xs
`;
