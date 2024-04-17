import Image from "next/image";
import { StyledBackgroundImage } from "./BackgroundImage.styles";
import { optimizeCloudinaryUrl } from "$/utils/helper-functions";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { RefHandle } from "$/utils/types";
import { IBackgroundProps } from "./BackgroundImage.types";
import gsap from "gsap";
import { CustomEase } from "gsap/all";

gsap.registerPlugin(CustomEase);
gsap.config({
  force3D: true,
});

const BackgroundImage = forwardRef<RefHandle, IBackgroundProps>(
  ({ dataCurrent, dataImage, dataIndex }, ref) => {
    const imageRef = useRef<HTMLImageElement>(null);

    useImperativeHandle(ref, () => ({
      startAnimation: (direction) => {
        let scale: number;
        if (direction === "up") {
          scale = dataCurrent + 1 === dataIndex ? 1 : 1.03;
          gsap.to(imageRef.current, {
            duration: 0.3,
            scale,
            ease: CustomEase.create(
              "custom",
              "M0,0 C0,0 0.14,0.033 0.185,0.048 0.224,0.061 0.298,0.091 0.335,0.109 0.371,0.127 0.441,0.168 0.475,0.192 0.508,0.216 0.57,0.268 0.6,0.297 0.632,0.329 0.692,0.4 0.72,0.437 0.747,0.474 0.796,0.551 0.82,0.592 0.845,0.638 0.893,0.734 0.915,0.783 0.938,0.836 1,1 1,1 "
            ),
            delay: 0.6,
          });
        } else if (direction === "down") {
          scale = dataCurrent - 1 === dataIndex ? 1 : 1.03;
          gsap.to(imageRef.current, {
            duration: 0.3,
            scale,
            ease: CustomEase.create(
              "custom",
              "M0,0 C0,0 0.14,0.033 0.185,0.048 0.224,0.061 0.298,0.091 0.335,0.109 0.371,0.127 0.441,0.168 0.475,0.192 0.508,0.216 0.57,0.268 0.6,0.297 0.632,0.329 0.692,0.4 0.72,0.437 0.747,0.474 0.796,0.551 0.82,0.592 0.845,0.638 0.893,0.734 0.915,0.783 0.938,0.836 1,1 1,1 "
            ),
            delay: 0.6,
          });
        } else
          console.error(
            "wrong direction passed to Description Animation handler"
          );
      },
    }));
    return (
      <StyledBackgroundImage>
        <Image
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
