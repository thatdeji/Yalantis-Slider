import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  position: fixed;
  top: 4rem;
  left: 6.5rem;
  z-index: 5;
`;

export const StyledMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 4rem;
  align-items: center;
  svg {
    cursor: pointer;
    width: 3.7rem;
    height: 3.7rem;
  }
`;

export const StyledMenuItem = styled.li`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 22px;
  color: #1b1b33;
  cursor: pointer;
`;
