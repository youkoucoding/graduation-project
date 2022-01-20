import "twin.macro";
import { SidebarBox, Button } from "./Sidebar.styled";

type ButtonProps = {
  title: string;
  handleClick: () => void;
  clasName?: string;
};

const SidebarButton = ({ title, handleClick }: ButtonProps) => {
  return (
    <SidebarBox>
      <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        tw="h-6 w-6"
      >
        <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
      <Button onClick={handleClick}>
        {title ? title : "Create a new tag"}
      </Button>
    </SidebarBox>
  );
};

export default SidebarButton;
