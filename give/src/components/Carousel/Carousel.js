import { Image } from "../Image/Image";
import "./Carousel.css";
import "../Button/Button.css";
import epcot from "../../epcot.jpeg";

export const Carousel = ({
  className = "", // string
  navButtonClasses = "", // string - classes for button styling
  content = [], // array of objects with `slide`, `label`, and `active` keys (slide: Component, label: string, active: bool)
}) => {
  if (content.length === 0) return null;

  const classes = className !== "" ? " " + className : className;
  navButtonClasses =
    navButtonClasses !== "" ? " " + navButtonClasses : navButtonClasses;

  return (
    <div className={"carousel cru-carousel" + navButtonClasses + classes}>
      <div className="cmp-carousel">
        <div className="cmp-carousel__content">
          {content.map((slide, index) => {
            const active = slide.active ? " cmp-carousel__item--active" : "";

            return (
              <div className={"cmp-carousel__item" + active} key={index}>
                {slide.slide}
              </div>
            );
          })}
          <div className="cmp-carousel__actions">
            <button className="cmp-carousel__action cmp-carousel__action--previous">
              <span className="cmp-carousel__action-icon"></span>
              <span className="cmp-carousel__action-text">Previous</span>
            </button>
            <button className="cmp-carousel__action cmp-carousel__action--next">
              <span className="cmp-carousel__action-icon"></span>
              <span className="cmp-carousel__action-text">Next</span>
            </button>
            <button className="cmp-carousel__action cmp-carousel__action--pause">
              <span className="cmp-carousel__action-icon"></span>
              <span className="cmp-carousel__action-text">Pause</span>
            </button>
            <button className="cmp-carousel__action cmp-carousel__action--play cmp-carousel__action--disabled">
              <span className="cmp-carousel__action-icon"></span>
              <span className="cmp-carousel__action-text">Play</span>
            </button>
          </div>
          <ol className="cmp-carousel__indicators">
            {content.map((slide, index) => {
              const active = slide.active
                ? " cmp-carousel__indicator--active"
                : "";

              return (
                <li className={"cmp-carousel__indicator" + active} key={index}>
                  {slide.label}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export const CarouselExamples = () => {
  return (
    <>
      <Carousel
        navButtonClasses="cru-button-dot cru-button-solid cru-button-yellow-gray"
        content={[
          {
            slide: <Image img={{ src: epcot, alt: "EPCOT" }} />,
            label: "Slide 1",
            active: true,
          },
          {
            slide: <Image img={{ src: epcot, alt: "EPCOT" }} />,
            label: "Slide 2",
          },
        ]}
      />
    </>
  );
};
