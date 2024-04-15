import { Search } from "$/svg/search";
import {
  StyledHeaderWrapper,
  StyledMenu,
  StyledMenuItem,
} from "./Header.styles";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledMenu>
        <StyledMenuItem>All Apartments</StyledMenuItem>
        <StyledMenuItem>About</StyledMenuItem>
        <StyledMenuItem>Contact</StyledMenuItem>
        <Search />
      </StyledMenu>
    </StyledHeaderWrapper>
  );
};

export default Header;
