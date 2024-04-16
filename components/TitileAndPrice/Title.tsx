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
import { CustomEase } from "gsap/all";

gsap.registerPlugin(CustomEase);
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
        let zIndex: number;
        let translateY: string;
        let autoAlpha: number;
        let contentTranslateY: string;
        const tl = gsap.timeline();
        const current = dataCurrent;
        if (direction === "up") {
          autoAlpha = dataCurrent + 1 === dataIndex ? 1 : 0;
          contentTranslateY =
            dataCurrent + 1 === dataIndex
              ? "0%"
              : dataCurrent === dataIndex
              ? "-50%"
              : "50%";
          zIndex = dataCurrent + 1 === dataIndex ? 1 : -1;
          translateY =
            dataCurrent === dataIndex
              ? "0%"
              : dataCurrent > dataIndex
              ? "-100%"
              : dataCurrent + 1 === dataIndex
              ? "0%"
              : "100%";
          tl.to(titleRef.current, {
            duration: 0.5,
            y: translateY,
            zIndex: zIndex,
            ease: CustomEase.create(
              "custom",
              "M0,0 C0,0 0.14,0.033 0.185,0.048 0.224,0.061 0.298,0.091 0.335,0.109 0.371,0.127 0.441,0.168 0.475,0.192 0.508,0.216 0.57,0.268 0.6,0.297 0.632,0.329 0.692,0.4 0.72,0.437 0.747,0.474 0.796,0.551 0.82,0.592 0.845,0.638 0.893,0.734 0.915,0.783 0.938,0.836 1,1 1,1 "
            ),
          }).to(
            [headingRef.current, CTARef.current],
            {
              duration: 0.1,
              y: contentTranslateY,
              autoAlpha,
            },
            dataCurrent !== dataIndex ? "+=0.1" : "-=0.4"
          );

          if (current === dataIndex) {
            setTimeout(() => {
              gsap.set(titleRef.current, { y: "-100%", zIndex: 1 });
            }, tl.duration() * 1000 + 50);
          }
        } else if (direction === "down") {
          autoAlpha = dataCurrent - 1 === dataIndex ? 1 : 0;
          contentTranslateY =
            dataCurrent - 1 === dataIndex
              ? "0%"
              : dataCurrent === dataIndex
              ? "50%"
              : "-50%";
          zIndex = dataCurrent - 1 === dataIndex ? 1 : -1;
          translateY =
            dataCurrent === dataIndex
              ? "0%"
              : dataCurrent < dataIndex
              ? "100%"
              : dataCurrent - 1 === dataIndex
              ? "0%"
              : "-100%";
          tl.to(titleRef.current, {
            duration: 0.5,
            y: translateY,
            zIndex: zIndex,
            ease: CustomEase.create(
              "custom",
              "M0,0 C0,0 0.14,0.033 0.185,0.048 0.224,0.061 0.298,0.091 0.335,0.109 0.371,0.127 0.441,0.168 0.475,0.192 0.508,0.216 0.57,0.268 0.6,0.297 0.632,0.329 0.692,0.4 0.72,0.437 0.747,0.474 0.796,0.551 0.82,0.592 0.845,0.638 0.893,0.734 0.915,0.783 0.938,0.836 1,1 1,1 "
            ),
          }).to(
            [CTARef.current, headingRef.current],
            {
              duration: 0.1,
              y: contentTranslateY,
              autoAlpha,
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
      <StyledTitleContent dataColor={dataColor} ref={titleRef}>
        <StyledTitleHeading ref={headingRef} dataTextColor={dataTextColor}>
          {dataTitle}
        </StyledTitleHeading>
        <StyledTitleCTA ref={CTARef} dataTextColor={dataTextColor}>
          VIEW THE ESTATE <Arrow />
        </StyledTitleCTA>
      </StyledTitleContent>
    );
  }
);

Title.displayName = "Title";

export default Title;
