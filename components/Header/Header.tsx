import { Search } from "$/svg/search";
import {
  StyledHeaderWrapper,
  StyledLine,
  StyledMenu,
  StyledMenuItem,
} from "./Header.styles";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledLine className="header-line" />
      <StyledMenu className="menu">
        <StyledMenuItem>All Apartments</StyledMenuItem>
        <StyledMenuItem>About</StyledMenuItem>
        <StyledMenuItem>Contact</StyledMenuItem>
        <Search />
      </StyledMenu>
    </StyledHeaderWrapper>
  );
};

export default Header;
