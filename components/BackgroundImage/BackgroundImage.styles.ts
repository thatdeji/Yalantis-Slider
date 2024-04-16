import { optimizeCloudinaryUrl } from "$/utils/helper-functions";
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

export const StyledBackgroundImageImage = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: black;
  /* background-image: ${`url(${optimizeCloudinaryUrl(
    "https://res.cloudinary.com/dexg5uy3d/image/upload/v1713199588/1e33d39c118899c99e5366b8c8c997b0-min_exgczn.jpg"
  )})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; */
  img {
    object-fit: cover;
  }
`;
