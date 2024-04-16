import { forwardRef, useImperativeHandle, useRef } from "react";
import {
  StyledPriceContent,
  StyledPriceHeading,
  StyledPrice,
} from "./TitileAndPrice.styles";
import { RefHandle } from "$/utils/types";
import { IPriceProps } from "./TitleAndPrice.types";
import gsap from "gsap";
import { CustomEase } from "gsap/all";

gsap.registerPlugin(CustomEase);
gsap.config({
  force3D: true,
});

const Price = forwardRef<RefHandle, IPriceProps>(
  ({ dataCurrent, dataIndex, dataPrice, dataColor }, ref) => {
    const priceRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      startAnimation: (direction) => {
        let delayNumber: number;
        let autoAlpha: number;
        let translateY: string;
        if (direction === "up") {
          autoAlpha = dataCurrent + 1 === dataIndex ? 1 : 0;
          delayNumber = dataCurrent + 1 === dataIndex ? 0.3 : 0.1;
          translateY =
            dataCurrent === dataIndex || dataCurrent > dataIndex
              ? "-20%"
              : dataCurrent + 1 === dataIndex
              ? "0%"
              : "20%";
          gsap.to(priceRef.current, {
            duration: 0.3,
            delay: delayNumber,
            autoAlpha,
            y: translateY,
            ease: "none",
          });
        } else if (direction === "down") {
          autoAlpha = dataCurrent - 1 === dataIndex ? 1 : 0;
          delayNumber = dataCurrent - 1 === dataIndex ? 0.3 : 0.1;
          translateY =
            dataCurrent === dataIndex || dataIndex > dataCurrent
              ? "20%"
              : dataCurrent - 1 === dataIndex
              ? "0%"
              : "-20%";
          gsap.to(priceRef.current, {
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
      <StyledPriceContent ref={priceRef}>
        <StyledPriceHeading dataColor={dataColor}>
          SPECIAL PRICE
        </StyledPriceHeading>
        <StyledPrice>${dataPrice.toLocaleString()}</StyledPrice>
      </StyledPriceContent>
    );
  }
);

Price.displayName = "Price";

export default Price;
