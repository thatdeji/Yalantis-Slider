import { forwardRef, useImperativeHandle, useRef } from "react";
import { RefHandle } from "$/utils/types";
import gsap from "gsap";
import { INumberProps } from "./Number.types";
import { StyledNumberIndex } from "./NumberIndex.styles";
gsap.config({
  force3D: true,
});

const NumberIndex = forwardRef<RefHandle, INumberProps>(
  ({ dataCurrent, dataIndex }, ref) => {
    const numberRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      startAnimation: (direction) => {
        if (direction === "up") {
          gsap.to(numberRef.current, {
            duration: 0.3,
            delay: dataCurrent + 1 === dataIndex ? 0.3 : 0,
            autoAlpha: dataCurrent + 1 === dataIndex ? 1 : 0,
            y:
              dataCurrent === dataIndex || dataCurrent > dataIndex
                ? "-50%"
                : dataCurrent + 1 === dataIndex
                ? "0%"
                : "50%",
            ease: "none",
          });
        } else if (direction === "down") {
          gsap.to(numberRef.current, {
            duration: 0.3,
            delay: dataCurrent - 1 === dataIndex ? 0.3 : 0,
            autoAlpha: dataCurrent - 1 === dataIndex ? 1 : 0,
            y:
              dataCurrent === dataIndex || dataIndex > dataCurrent
                ? "50%"
                : dataCurrent - 1 === dataIndex
                ? "0%"
                : "-50%",
            ease: "none",
          });
        } else
          console.error(
            "wrong direction passed to Description Animation handler"
          );
      },
    }));
    return (
      <StyledNumberIndex className="number-index" ref={numberRef}>
        {dataIndex + 1 < 10 ? `0${dataIndex + 1}` : dataIndex + 1}
      </StyledNumberIndex>
    );
  }
);

NumberIndex.displayName = "NumberIndex";

export default NumberIndex;
