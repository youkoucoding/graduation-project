import tw from "twin.macro";
import Main from "../components/Main";
import SideBar from "../components/SideBar";

const LayoutContainer = tw.main`
  h-screen overflow-hidden bg-gray-100
  flex flex-row min-h-screen
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <SideBar />
      <Main />
    </LayoutContainer>
  );
};

export default Layout;
