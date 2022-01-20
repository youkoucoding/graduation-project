import tw, { css, styled } from "twin.macro";

export const MainBox = tw.main`
  flex flex-col flex-grow -ml-64 md:ml-0 
  transition-all duration-150 ease-in`;

export const HeaderBox = tw.header`
bg-white shadow py-4 px-4`;

export const MainContainer = tw.div`flex flex-col flex-grow p-4`;

export const MainCenter = tw.div`
  flex flex-col flex-grow border-4
border-gray-400 border-dotted 
bg-white rounded mt-4`;

export const Footer = tw.footer`
  px-4 py-6 flex items-center justify-center text-sm`;

export const Text = tw.p`text-sm text-gray-600 text-center`;
