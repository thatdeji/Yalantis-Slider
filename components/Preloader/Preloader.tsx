import { FC, useEffect, useRef, useState } from "react";
import { IPreloaderProps } from "./Preloader.types";
import {
  StyledPreloaderContainer,
  StyledPreloaderPercentage,
} from "./Preloader.styles";
import gsap from "gsap";

const Preloader: FC<IPreloaderProps> = ({ setLoaded }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLParagraphElement>(null);
  const [loadingPercentage, setLoadingPercentage] = useState<number>(0);

  const handleUpdateNumber = () => {
    const id = setInterval(function () {
      setLoadingPercentage((prevState) =>
        prevState >= 100 ? prevState : prevState + 1
      );
    }, 10);
    setTimeout(() => {
      clearInterval(id);
    }, 1000);
  };

  useEffect(() => {
    handleUpdateNumber();
    const preload = gsap.timeline({ delay: 1 });
    preload.to(percentRef.current, { duration: 0.8, autoAlpha: 0 }).to(
      preloaderRef.current,
      {
        duration: 0.9,
        width: 0,
        ease: "expo.inOut",
      },
      "-=0.8"
    );
    preload.eventCallback("onComplete", () => {
      preload.kill();
      setLoaded(true);
    });
  }, []);

  return (
    <StyledPreloaderContainer ref={preloaderRef}>
      <StyledPreloaderPercentage ref={percentRef}>
        {loadingPercentage.toString().length === 1 && 0}
        {loadingPercentage}
      </StyledPreloaderPercentage>
    </StyledPreloaderContainer>
  );
};

export default Preloader;
