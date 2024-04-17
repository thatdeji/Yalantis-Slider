"use client";
import BackgroundImage from "$/components/BackgroundImage/BackgroundImage";
import Description from "$/components/Description/Description";
import Header from "$/components/Header/Header";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { StyledDescriptionContainer } from "$/components/Wrappers/DescriptionWrapper/DescriptionWrapper.styles";
import { houses } from "$/utils/mock-data";
import useRefArray from "$/hooks/useRefArray";
import { RefHandle } from "$/utils/types";
import {
  StyledPriceContainer,
  StyledTitleAndPriceContainer,
  StyledTitleContainer,
} from "$/components/Wrappers/TitleAndPriceWrapper/TitleAndPriceWrapper.styles";
import Price from "$/components/TitileAndPrice/Price";
import Title from "$/components/TitileAndPrice/Title";
import {
  StyledBackgroundImageInnerWraper,
  StyledBackgroundImageOuterWrapper,
} from "$/components/Wrappers/BackgroundImageWrapper/BackgroundImageWrapper.styles";
import gsap from "gsap";
import {
  StyledNumberDivider,
  StyledNumberIndexWrapper,
  StyledNumberWrapper,
  StyledTotalNumber,
} from "$/components/Wrappers/NumberWrapper/NumberWrapper.styles";
import NumberIndex from "$/components/NumberIndex/NumberIndex";
import Preloader from "$/components/Preloader/Preloader";

const data = houses;

export default function Home() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(true);
  const [current, setCurrent] = useState<number>(0);
  const descriptionRefs = useRefArray<RefHandle>(data.length);
  const titleRefs = useRefArray<RefHandle>(data.length);
  const priceRefs = useRefArray<RefHandle>(data.length);
  const backgroundRefs = useRefArray<RefHandle>(data.length);
  const numberRefs = useRefArray<RefHandle>(data.length);
  const backgroundOuterWrapperRef = useRef<HTMLDivElement>(null);
  const backgroundWrapperRef = useRef<HTMLDivElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const priceWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalNumberRef = useRef<HTMLParagraphElement>(null);
  const numberDividerRef = useRef<HTMLDivElement>(null);
  const numberWrapperRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!loaded) return;
    if (isScrolling) return;
    if (e.deltaY === 0) return;
    setIsScrolling(true);
    if (e.deltaY > 0) {
      if (current === data.length - 1) {
        setIsScrolling(false);
        return;
      }
      setCurrent((prev) => prev + 1);
      descriptionRefs.forEach((ref) => ref.current.startAnimation("up"));
      titleRefs.forEach((ref) => ref.current.startAnimation("up"));
      priceRefs.forEach((ref) => ref.current.startAnimation("up"));
      numberRefs.forEach((ref) => ref.current.startAnimation("up"));
      backgroundWrapperRef.current &&
        gsap.to(backgroundWrapperRef.current, {
          y: `-${100 * (current + 1)}vh`,
          duration: 1,
        });
      backgroundRefs.forEach((ref) => ref.current.startAnimation("up"));
    } else if (e.deltaY < 0) {
      if (current === 0) {
        setIsScrolling(false);
        return;
      }
      setCurrent((prev) => prev - 1);
      descriptionRefs.forEach((ref) => ref.current.startAnimation("down"));
      titleRefs.forEach((ref) => ref.current.startAnimation("down"));
      priceRefs.forEach((ref) => ref.current.startAnimation("down"));
      numberRefs.forEach((ref) => ref.current.startAnimation("down"));
      backgroundWrapperRef.current &&
        gsap.to(backgroundWrapperRef.current, {
          y: `-${100 * (current - 1)}vh`,
          duration: 1,
        });
      backgroundRefs.forEach((ref) => ref.current.startAnimation("down"));
    } else if (e.deltaY < 0) {
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  useLayoutEffect(() => {
    const context = gsap.context((self) => {
      const menu = self?.selector?.(".menu");
      const headerLine = self?.selector?.(".header-line");
      const firstDecriptionHeadingMask = self?.selector?.(
        ".description-content:first-of-type h1 .heading-mask"
      );
      const firstDecriptionParagraph = self?.selector?.(
        ".description-content:first-of-type p"
      );
      const firstTitle = self?.selector?.(".title-content:first-of-type");
      const firstTitleChildren = self?.selector?.(
        ".title-content:first-of-type > *"
      );
      const firstPrice = self?.selector?.(".price-content:first-of-type");
      const firstNumberIndex = self?.selector?.(".number-index:first-of-type");

      gsap.set(backgroundOuterWrapperRef.current, { width: "100%" });
      gsap.set(menu, { autoAlpha: 0, y: "10%" });
      gsap.set(headerLine, {
        scaleX: "0",
        transformOrigin: "left",
      });
      gsap.set(firstTitle, {
        scaleX: "0",
        transformOrigin: "left",
      });
      gsap.set(priceWrapperRef.current, {
        scaleX: "0",
        transformOrigin: "left",
      });
      gsap.set(firstTitleChildren, { autoAlpha: 0, y: "1rem" });
      gsap.set(firstPrice, { autoAlpha: 0, y: "1rem" });
      gsap.set(firstDecriptionHeadingMask, {
        scaleX: "1",
        transformOrigin: "right",
      });
      gsap.set(firstDecriptionParagraph, { autoAlpha: 0, y: "1rem" });
      gsap.set(numberWrapperRef.current, {
        scaleX: "0",
        transformOrigin: "left",
      });
      gsap.set(numberDividerRef.current, {
        rotate: 0,
        scale: 0,
      });
      gsap.set(totalNumberRef.current, { autoAlpha: 0, y: "40%" });
      gsap.set(firstNumberIndex, { autoAlpha: 0, y: "-40%" });
      const introAnimTimeline = gsap.timeline({ delay: 1.6 });

      introAnimTimeline
        .to(backgroundOuterWrapperRef.current, {
          width: "57%",
          duration: 0.9,
          ease: "expo.inOut",
        })
        .addLabel("firstLabel", 0.1)
        .to(
          firstTitle,
          {
            scaleX: "1",
            duration: 0.4,
            ease: "expo.inOut",
          },
          "-=0.8"
        )
        .to(
          priceWrapperRef.current,
          {
            scaleX: "1",
            duration: 0.4,
            ease: "expo.inOut",
          },
          "-=0.8"
        )
        .to(firstTitleChildren, { autoAlpha: 1, y: "0", duration: 0.3 })
        .to(firstPrice, { autoAlpha: 1, y: "0", duration: 0.3 }, "-=0.3")
        .to(
          numberWrapperRef.current,
          {
            scaleX: 1,
            duration: 0.3,
            ease: "expo.inOut",
          },
          "firstLabel"
        )
        .addLabel("secondLabel", 0.6)
        .to(numberDividerRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "expo.inOut",
        })
        .to(
          numberDividerRef.current,
          {
            rotate: "25deg",
            duration: 0.3,
            ease: "expo.in",
          },
          "+=0.3"
        )
        .to(firstNumberIndex, { autoAlpha: 1, y: "0", duration: 0.2 })
        .to(
          totalNumberRef.current,
          { autoAlpha: 1, y: "0", duration: 0.2 },
          "-=0.2"
        )
        .to(
          firstDecriptionHeadingMask,
          {
            scaleX: "0",
            duration: 1,
            ease: "expo.out",
          },
          "secondLabel"
        )
        .to(
          firstDecriptionParagraph,
          { autoAlpha: 1, y: "0", duration: 0.3 },
          "secondLabel+=0.3"
        )
        .to(
          headerLine,
          {
            scaleX: "1",
            duration: 0.4,
            ease: "expo.out",
          },
          "-=0.8"
        )
        .to(menu, { autoAlpha: 1, y: "0", duration: 0.4 }, "-=0.2");

      introAnimTimeline.eventCallback("onComplete", () => {
        setIsScrolling(false);
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={containerRef} onWheel={handleScroll} className={styles.container}>
      <Header />
      <StyledDescriptionContainer>
        {data.map(({ mainTagline, secondaryTagline }, index) => (
          <Description
            ref={descriptionRefs[index]}
            key={index}
            dataCurrent={current}
            dataIndex={index}
            dataSubTilte={secondaryTagline}
            dataTitle={mainTagline}
          />
        ))}
      </StyledDescriptionContainer>
      <StyledTitleAndPriceContainer>
        <StyledTitleContainer ref={titleWrapperRef}>
          {data.map(({ name, color, textColor }, index) => (
            <Title
              ref={titleRefs[index]}
              key={index}
              dataCurrent={current}
              dataIndex={index}
              dataTitle={name}
              dataColor={color}
              dataTextColor={textColor}
            />
          ))}
        </StyledTitleContainer>
        <StyledPriceContainer ref={priceWrapperRef}>
          {data.map(({ priceInDollars, color }, index) => (
            <Price
              ref={priceRefs[index]}
              key={index}
              dataCurrent={current}
              dataIndex={index}
              dataPrice={priceInDollars}
              dataColor={color}
            />
          ))}
        </StyledPriceContainer>
      </StyledTitleAndPriceContainer>
      <StyledBackgroundImageOuterWrapper ref={backgroundOuterWrapperRef}>
        <StyledBackgroundImageInnerWraper ref={backgroundWrapperRef}>
          {data.map(({ img }, index) => (
            <BackgroundImage
              ref={backgroundRefs[index]}
              dataCurrent={current}
              dataIndex={index}
              dataImage={img}
              key={index}
            />
          ))}
        </StyledBackgroundImageInnerWraper>
      </StyledBackgroundImageOuterWrapper>
      <StyledNumberWrapper ref={numberWrapperRef}>
        <StyledNumberIndexWrapper>
          {data.map((_, index) => (
            <NumberIndex
              ref={numberRefs[index]}
              dataCurrent={current}
              dataIndex={index}
              key={index}
            />
          ))}
        </StyledNumberIndexWrapper>
        <StyledNumberDivider ref={numberDividerRef} />
        <StyledTotalNumber ref={totalNumberRef}>
          {data.length < 10 ? `0${data.length}` : data.length}
        </StyledTotalNumber>
      </StyledNumberWrapper>
      {!loaded && <Preloader setLoaded={setLoaded} />}
    </div>
  );
}
