// Based on v1
// https://www.aemcomponents.dev/content/core-components-examples/library/core-content/carousel.html
// https://github.com/adobe/aem-core-wcm-components/tree/main/content/src/content/jcr_root/apps/core/wcm/components/carousel/v1/carousel

import { ComponentWrapper } from "../shared";
import { Image } from "../Image/Image";
import "./Carousel.css";
import lava1 from "../../assets/lava1.jpeg";
import lava2 from "../../assets/lava2.jpeg";

export const Carousel = ({
  className, // string
  id, // string
  children,
}) => {
  if (!children) return null;

  return (
    <ComponentWrapper type="carousel" className={className} id={id}>
      <div className="cmp-carousel__content">{children}</div>
    </ComponentWrapper>
  );
};

export const CarouselItem = ({ id, active = false, children }) => {
  if (!children) return null;

  return (
    <div
      className={`cmp-carousel__item${
        active ? " cmp-carousel__item--active" : ""
      }`}
      id={`${id}-tabpanel`}
    >
      {children}
    </div>
  );
};

export const CarouselActions = () => {
  const Action = ({ label, classes }) => (
    <button
      className={`cmp-carousel__action cmp-carousel__action--${classes}`}
      type="button"
      key={label}
    >
      <span className="cmp-carousel__action-icon"></span>
      <span className="cmp-carousel__action-text">{label}</span>
    </button>
  );

  return (
    <div className="cmp-carousel__actions">
      <Action label="Previous" classes="previous" />
      <Action label="Next" classes="next" />
      <Action label="Pause" classes="pause" />
      <Action label="Play" classes="play cmp-carousel__action--disabled" />
    </div>
  );
};

export const CarouselIndicators = ({ children }) => {
  if (!children) return null;

  return <ol className="cmp-carousel__indicators">{children}</ol>;
};

export const CarouselIndicator = ({ id, active = false, children }) => {
  if (!children) return null;

  return (
    <li
      className={`cmp-carousel__indicator${
        active ? " cmp-carousel__indicator--active" : ""
      }`}
      id={`${id}-tab`}
    >
      {children}
    </li>
  );
};

export const CarouselExamples = () => {
  const content = [
    {
      content: <Image src={lava1} alt="Lava 1" />,
      id: "slide1",
    },
    {
      content: <Image src={lava2} alt="Lava 2" />,
      id: "slide2",
    },
  ];

  return (
    <Carousel id="testID" className="testClass">
      {content.map((item, index) => (
        <CarouselItem id={item.id} active={index === 0} key={index}>
          {item.content}
        </CarouselItem>
      ))}
      <CarouselActions />
      <CarouselIndicators>
        {content.map((item, index) => (
          <CarouselIndicator
            id={item.id}
            active={index === 0}
            key={index}
          >{`Slide ${index + 1}`}</CarouselIndicator>
        ))}
      </CarouselIndicators>
    </Carousel>
  );
};
