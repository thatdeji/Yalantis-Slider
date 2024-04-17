import Image from "next/image";
import { StyledBackgroundImage } from "./BackgroundImage.styles";
import { optimizeCloudinaryUrl } from "$/utils/helper-functions";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { RefHandle } from "$/utils/types";
import { IBackgroundProps } from "./BackgroundImage.types";
import gsap from "gsap";
import { easingOne } from "$/utils/easings";
gsap.config({
  force3D: true,
});

const BackgroundImage = forwardRef<RefHandle, IBackgroundProps>(
  ({ dataCurrent, dataImage, dataIndex }, ref) => {
    const imageRef = useRef<HTMLImageElement>(null);

    useImperativeHandle(ref, () => ({
      startAnimation: (direction) => {
        if (direction === "up") {
          gsap.to(imageRef.current, {
            duration: 0.3,
            scale: dataCurrent + 1 === dataIndex ? 1 : 1.03,
            ease: easingOne,
            delay: 0.6,
          });
        } else if (direction === "down") {
          gsap.to(imageRef.current, {
            duration: 0.3,
            scale: dataCurrent - 1 === dataIndex ? 1 : 1.03,
            ease: easingOne,
            delay: 0.6,
          });
        } else
          console.error(
            "wrong direction passed to Background Image Animation handler"
          );
      },
    }));
    return (
      <StyledBackgroundImage>
        <Image
          priority
          ref={imageRef}
          alt=""
          fill
          src={optimizeCloudinaryUrl(dataImage)}
        />
      </StyledBackgroundImage>
    );
  }
);

BackgroundImage.displayName = "BackgroundImage";

export default BackgroundImage;
