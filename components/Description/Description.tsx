import { forwardRef, useImperativeHandle, useRef } from "react";
import {
  StyledDescriptionContent,
  StyledDescriptionContentWrapper,
  StyledDescriptionSubTitle,
  StyledDescriptionTitle,
} from "./Description.styles";
import { IDescriptionProps } from "./Description.types";
import { RefHandle } from "$/utils/types";
import gsap from "gsap";
import { CustomEase } from "gsap/all";

gsap.registerPlugin(CustomEase);
gsap.config({
  force3D: true,
});

const Description = forwardRef<RefHandle, IDescriptionProps>(
  ({ dataCurrent, dataIndex, dataSubTilte, dataTitle }, ref) => {
    const descriptionRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      startAnimation: (direction) => {
        let delayNumber: number;
        let autoAlpha: number;
        let translateY: string;
        if (direction === "up") {
          autoAlpha = dataCurrent + 1 === dataIndex ? 1 : 0;
          delayNumber = dataCurrent + 1 === dataIndex ? 0.4 : 0;
          translateY =
            dataCurrent === dataIndex || dataCurrent > dataIndex
              ? "-10%"
              : dataCurrent + 1 === dataIndex
              ? "0%"
              : "5%";
          gsap.to(descriptionRef.current, {
            duration: 0.3,
            delay: delayNumber,
            autoAlpha,
            y: translateY,
            ease: "none",
          });
        } else if (direction === "down") {
          autoAlpha = dataCurrent - 1 === dataIndex ? 1 : 0;
          delayNumber = dataCurrent - 1 === dataIndex ? 0.4 : 0;
          translateY =
            dataCurrent === dataIndex || dataIndex > dataCurrent
              ? "5%"
              : dataCurrent - 1 === dataIndex
              ? "0%"
              : "-10%";
          gsap.to(descriptionRef.current, {
            duration: 0.3,
            delay: delayNumber,
            autoAlpha,
            y: translateY,
            ease: "none",
          });
        } else
          console.error(
            "wrong direction passed to Description Animation handler"
          );
      },
    }));

    return (
      <StyledDescriptionContentWrapper>
        <StyledDescriptionContent ref={descriptionRef}>
          <StyledDescriptionTitle>{dataTitle}</StyledDescriptionTitle>
          <StyledDescriptionSubTitle>{dataSubTilte}</StyledDescriptionSubTitle>
        </StyledDescriptionContent>
      </StyledDescriptionContentWrapper>
    );
  }
);

Description.displayName = "Description";

export default Description;
