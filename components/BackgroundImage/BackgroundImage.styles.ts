import styled from "styled-components";

export const StyledBackgroundImageImageOuterWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 57%;
  overflow: hidden;
`;

export const StyledBackgroundImageImageInnerWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: none;
`;

export const StyledBackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: black;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;
