import { forwardRef, useImperativeHandle, useRef } from "react";
import {
  StyledPriceContent,
  StyledPriceHeading,
  StyledPrice,
} from "./TitileAndPrice.styles";
import { RefHandle } from "$/utils/types";
import { IPriceProps } from "./TitleAndPrice.types";
import gsap from "gsap";
gsap.config({
  force3D: true,
});

const Price = forwardRef<RefHandle, IPriceProps>(
  ({ dataCurrent, dataIndex, dataPrice, dataColor }, ref) => {
    const priceRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      startAnimation: (direction) => {
        if (direction === "up") {
          gsap.to(priceRef.current, {
            duration: 0.3,
            delay: dataCurrent + 1 === dataIndex ? 0.3 : 0.1,
            autoAlpha: dataCurrent + 1 === dataIndex ? 1 : 0,
            y:
              dataCurrent === dataIndex || dataCurrent > dataIndex
                ? "-20%"
                : dataCurrent + 1 === dataIndex
                ? "0%"
                : "20%",
            ease: "none",
          });
        } else if (direction === "down") {
          gsap.to(priceRef.current, {
            duration: 0.3,
            delay: dataCurrent - 1 === dataIndex ? 0.3 : 0.1,
            autoAlpha: dataCurrent - 1 === dataIndex ? 1 : 0,
            y:
              dataCurrent === dataIndex || dataIndex > dataCurrent
                ? "20%"
                : dataCurrent - 1 === dataIndex
                ? "0%"
                : "-20%",
            ease: "none",
          });
        } else
          console.error(
            "wrong direction passed to Description Animation handler"
          );
      },
    }));
    return (
      <StyledPriceContent className="price-content" ref={priceRef}>
        <StyledPriceHeading $dataColor={dataColor}>
          SPECIAL PRICE
        </StyledPriceHeading>
        <StyledPrice>${dataPrice.toLocaleString()}</StyledPrice>
      </StyledPriceContent>
    );
  }
);

Price.displayName = "Price";

export default Price;
