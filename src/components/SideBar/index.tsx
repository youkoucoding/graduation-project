import {
  Aside,
  SidebarBox,
  Span,
  LogoContainer,
  List,
  ListItem,
} from "./Sidebar.styled";
import SidebarButton from "./SidebarButton";
import "twin.macro";

const SvgLogo = () => (
  <svg
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="6"
    viewBox="0 0 24 24"
    stroke="currentColor"
    tw="h-8 w-8 font-bold text-yellow-500"
  >
    <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
  </svg>
);

const SideBar = () => {
  return (
    <Aside>
      <LogoContainer>
        <SvgLogo />
        <h1>パスワード保管庫</h1>
      </LogoContainer>

      <SidebarBox>
        <List>
          <ListItem>
            <Span>Projects</Span>
          </ListItem>
          <ListItem>
            <SidebarButton
              title="hello twin.marco"
              handleClick={() => alert("hello")}
            />
          </ListItem>
          <ListItem>
            <SidebarButton
              title="add new tag"
              handleClick={() => alert("add success!")}
            />
          </ListItem>
        </List>
      </SidebarBox>
    </Aside>
  );
};

export default SideBar;
