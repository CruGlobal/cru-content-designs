// Based on v1
// https://www.aemcomponents.dev/content/core-components-examples/library/core-content/carousel.html
// https://github.com/adobe/aem-core-wcm-components/tree/main/content/src/content/jcr_root/apps/core/wcm/components/carousel/v1/carousel

import { ComponentWrapper } from "../shared";
import { Image } from "../Image/Image";
import "./Carousel.css";
import "../Button/Button.css";
import lava1 from "../../assets/lava1.jpeg";
import lava2 from "../../assets/lava2.jpeg";

export const Carousel = ({
  className = "", // string
  navButtonClasses = "", // string - classes for button styling
  content = [], // array of objects with `slide`, `label`, and `active` keys (slide: Component, label: string, active: bool)
}) => {
  if (content.length === 0) return null;

  const Actions = () => {
    const actions = [
      { label: "Previous", classes: "previous" },
      { label: "Next", classes: "next" },
      { label: "Pause", classes: "pause" },
      { label: "Play", classes: "play cmp-carousel__action--disabled" },
    ];

    return (
      <div className="cmp-carousel__actions">
        {actions.map((action, index) => {
          return (
            <button
              className={`cmp-carousel__action cmp-carousel__action--${action.classes}`}
              key={index}
            >
              <span className="cmp-carousel__action-icon"></span>
              <span className="cmp-carousel__action-text">${action.label}</span>
            </button>
          );
        })}
      </div>
    );
  };

  const Indicators = () => {
    return (
      <ol className="cmp-carousel__indicators">
        {content.map((slide, index) => {
          const active = slide.active ? " cmp-carousel__indicator--active" : "";

          return (
            <li className={`cmp-carousel__indicator${active}`} key={index}>
              {slide.label}
            </li>
          );
        })}
      </ol>
    );
  };

  return (
    <ComponentWrapper
      type="carousel"
      className={`${navButtonClasses} ${className}`}
    >
      <div className="cmp-carousel__content">
        {content.map((slide, index) => {
          const active = slide.active ? " cmp-carousel__item--active" : "";

          return (
            <div className={`cmp-carousel__item${active}`} key={index}>
              {slide.slide}
            </div>
          );
        })}
        <Actions />
        <Indicators />
      </div>
    </ComponentWrapper>
  );
};

export const CarouselExamples = () => {
  return (
    <>
      <Carousel
        navButtonClasses="cru-button-dot cru-button-solid cru-button-yellow-gray"
        content={[
          {
            slide: <Image src={lava1} alt="Lava 1" />,
            label: "Slide 1",
            active: true,
          },
          {
            slide: <Image src={lava2} alt="Lava 2" />,
            label: "Slide 2",
          },
        ]}
      />
    </>
  );
};
