import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import tw from 'twin.macro';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <StyledButton>Styled Button</StyledButton>
        <br />
        <TailwindStyledButton>Tailwind Styled Button</TailwindStyledButton>
        <br />
        <ConditionalTailwindStyledButton isRed={false}>
          Conditional Tailwind Styled Button
        </ConditionalTailwindStyledButton>
      </main>
    </div>
  );
};

export default Home;

const TailwindStyledButton = tw.button`
    background: bg-red-500
    hover: bg-red-700
    text-white
    font-bold
    py-2
    px-4
    border
    border-black
    rounded
`;

const ConditionalTailwindStyledButton = styled.button<{ isRed: boolean }>(
  ({ isRed }) => [
    isRed ? tw`bg-red-500` : tw`bg-blue-700 hover:bg-blue-500`,
    tw`
        text-white
        font-bold
        py-2
        px-4
        border
        border-black
        rounded
        `
  ]
);

const StyledButton = styled.button`
  background: red;
  color: white;
  font-size: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border: 2px solid black;
`;
