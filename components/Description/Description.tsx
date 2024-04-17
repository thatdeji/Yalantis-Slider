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
gsap.config({
  force3D: true,
});

const Description = forwardRef<RefHandle, IDescriptionProps>(
  ({ dataCurrent, dataIndex, dataSubTilte, dataTitle }, ref) => {
    const descriptionRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      startAnimation: (direction) => {
        if (direction === "up") {
          gsap.to(descriptionRef.current, {
            duration: 0.3,
            delay: dataCurrent + 1 === dataIndex ? 0.4 : 0,
            autoAlpha: dataCurrent + 1 === dataIndex ? 1 : 0,
            y:
              dataCurrent === dataIndex || dataCurrent > dataIndex
                ? "-10%"
                : dataCurrent + 1 === dataIndex
                ? "0%"
                : "5%",
            ease: "none",
          });
        } else if (direction === "down") {
          gsap.to(descriptionRef.current, {
            duration: 0.3,
            delay: dataCurrent - 1 === dataIndex ? 0.4 : 0,
            autoAlpha: dataCurrent - 1 === dataIndex ? 1 : 0,
            y:
              dataCurrent === dataIndex || dataIndex > dataCurrent
                ? "5%"
                : dataCurrent - 1 === dataIndex
                ? "0%"
                : "-10%",
            ease: "none",
          });
        } else
          console.error(
            "wrong direction passed to Description Animation handler"
          );
      },
    }));

    return (
      <StyledDescriptionContentWrapper className="description-content">
        <StyledDescriptionContent ref={descriptionRef}>
          <StyledDescriptionTitle>
            <div className="heading-mask" />
            {dataTitle}
          </StyledDescriptionTitle>
          <StyledDescriptionSubTitle>{dataSubTilte}</StyledDescriptionSubTitle>
        </StyledDescriptionContent>
      </StyledDescriptionContentWrapper>
    );
  }
);

Description.displayName = "Description";

export default Description;
