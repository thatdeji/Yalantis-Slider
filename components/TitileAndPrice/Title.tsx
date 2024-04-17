import { Arrow } from "$/svg/arrow";
import { forwardRef, useImperativeHandle, useRef } from "react";
import {
  StyledTitleCTA,
  StyledTitleContent,
  StyledTitleHeading,
} from "./TitileAndPrice.styles";
import { RefHandle } from "$/utils/types";
import { ITitleProps } from "./TitleAndPrice.types";
import gsap from "gsap";
import { easingOne } from "$/utils/easings";
gsap.config({
  force3D: true,
});

const Title = forwardRef<RefHandle, ITitleProps>(
  ({ dataCurrent, dataIndex, dataTitle, dataColor, dataTextColor }, ref) => {
    const titleRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const CTARef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => ({
      startAnimation: (direction) => {
        const tl = gsap.timeline();
        const current = dataCurrent;
        if (direction === "up") {
          tl.to(titleRef.current, {
            duration: 0.5,
            y:
              dataCurrent === dataIndex
                ? "0%"
                : dataCurrent > dataIndex
                ? "-100%"
                : dataCurrent + 1 === dataIndex
                ? "0%"
                : "100%",
            zIndex: dataCurrent + 1 === dataIndex ? 1 : -1,
            ease: easingOne,
          }).to(
            [headingRef.current, CTARef.current],
            {
              duration: 0.1,
              y:
                dataCurrent + 1 === dataIndex
                  ? "0%"
                  : dataCurrent === dataIndex
                  ? "-50%"
                  : "50%",
              autoAlpha: dataCurrent + 1 === dataIndex ? 1 : 0,
            },
            dataCurrent !== dataIndex ? "+=0.1" : "-=0.4"
          );

          if (current === dataIndex) {
            setTimeout(() => {
              gsap.set(titleRef.current, { y: "-100%", zIndex: 1 });
            }, tl.duration() * 1000 + 50);
          }
        } else if (direction === "down") {
          tl.to(titleRef.current, {
            duration: 0.5,
            y:
              dataCurrent === dataIndex
                ? "0%"
                : dataCurrent < dataIndex
                ? "100%"
                : dataCurrent - 1 === dataIndex
                ? "0%"
                : "-100%",
            zIndex: dataCurrent - 1 === dataIndex ? 1 : -1,
            ease: easingOne,
          }).to(
            [CTARef.current, headingRef.current],
            {
              duration: 0.1,
              y:
                dataCurrent - 1 === dataIndex
                  ? "0%"
                  : dataCurrent === dataIndex
                  ? "50%"
                  : "-50%",
              autoAlpha: dataCurrent - 1 === dataIndex ? 1 : 0,
            },
            dataCurrent !== dataIndex ? "+=0.1" : "-=0.4"
          );

          if (current === dataIndex) {
            setTimeout(() => {
              gsap.set(titleRef.current, { y: "100%", zIndex: 1 });
            }, tl.duration() * 1000 + 50);
          }
        } else
          console.error(
            "wrong direction passed to Description Animation handler"
          );
      },
    }));
    return (
      <StyledTitleContent
        className="title-content"
        $dataColor={dataColor}
        ref={titleRef}
      >
        <StyledTitleHeading ref={headingRef} $dataTextColor={dataTextColor}>
          {dataTitle}
        </StyledTitleHeading>
        <StyledTitleCTA ref={CTARef} $dataTextColor={dataTextColor}>
          VIEW THE ESTATE <Arrow />
        </StyledTitleCTA>
      </StyledTitleContent>
    );
  }
);

Title.displayName = "Title";

export default Title;
