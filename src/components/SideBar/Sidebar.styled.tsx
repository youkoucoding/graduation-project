import tw, { css, styled } from "twin.macro";

type StyledBoxProps = {
  variant?: string;
};

// all the styled components used in SideBar
export const Aside = tw.aside`
  w-64 md:shadow transform -translate-x-full 
  md:translate-x-0 transition-transform 
  duration-150 ease-in bg-blue-500`;

export const LogoContainer = tw.div`
  flex flex-row items-center justify-center p-4 mx-auto m-6
  space-x-3
  font-bold text-yellow-500
`;

export const SidebarBox = styled.div(
  ({ variant = "primary" }: StyledBoxProps) => [
    tw`flex flex-row items-center justify-center px-4 py-6`,
    variant === "primary" && tw`bg-blue-500 text-white`,
    variant === "secondary" && tw`bg-blue-300 text-white`,
  ]
);

export const Span = tw.span`
  flex items-center justify-center 
  font-bold
  px-4 my-4 uppercase`;

export const List = tw.ul`
  flex flex-col w-full
`;

export const ListItem = tw.li`flex flex-row space-x-2 p-3`;

export const Button = tw.button`
  inline-flex flex-row items-center 
  sm:h-10 px-3 rounded-lg
  text-gray-300 hover:text-gray-700
`;
