import Image from "next/image";
import {
  StyledBackgroundImageImage,
  StyledBackgroundImageImageInnerWraper,
  StyledBackgroundImageImageOuterWrapper,
} from "./BackgroundImage.styles";
import { optimizeCloudinaryUrl } from "$/utils/helper-functions";

const BackgroundImage = () => {
  return (
    <StyledBackgroundImageImageOuterWrapper>
      <StyledBackgroundImageImageInnerWraper>
        <StyledBackgroundImageImage>
          <Image
            alt=""
            fill
            src={optimizeCloudinaryUrl(
              "https://res.cloudinary.com/dexg5uy3d/image/upload/v1713199588/1e33d39c118899c99e5366b8c8c997b0-min_exgczn.jpg"
            )}
          />
        </StyledBackgroundImageImage>
      </StyledBackgroundImageImageInnerWraper>
    </StyledBackgroundImageImageOuterWrapper>
  );
};

export default BackgroundImage;
