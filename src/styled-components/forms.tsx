import tw from 'twin.macro';

export const LoginContainer = tw.div`
  flex min-h-screen justify-center items-center bg-gray-200
`;

export const LoginCard = tw.div`
  flex w-4/5 md:w-3/5 lg:w-2/6 flex-col justify-center items-start p-8 md:p-16 min-h-[600px] gap-10 bg-white rounded
`;
export const RegisterCard = tw.div`
  flex w-4/5 md:w-3/5 lg:w-2/6 flex-col justify-center items-start p-8 md:px-16 min-h-[600px] gap-5 bg-white rounded
`;

export const From = tw.form`
 w-full flex flex-col justify-center items-start gap-4
`;

export const TextInput = tw.input`
  w-full p-2 border-b border-black text-2xl
`;
