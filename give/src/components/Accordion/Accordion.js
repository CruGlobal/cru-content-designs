// Based on v1
// https://www.aemcomponents.dev/content/core-components-examples/library/core-content/accordion.html
// https://github.com/adobe/aem-core-wcm-components/tree/main/content/src/content/jcr_root/apps/core/wcm/components/accordion/v1/accordion

import { ComponentWrapper } from "../shared";
import "./Accordion.css";

export const Accordion = ({
  className = "", // string
  content = [], // array of objects with `title` and `content` keys, each key containing a string
  dark = false, // bool
  links = false, // bool
}) => {
  if (content.length === 0) return null;

  const darkClass = dark ? "cru-accordion-dark" : "";
  const linksClass = links ? "cru-accordion-links" : "";

  return (
    <ComponentWrapper
      type="accordion"
      className={`${darkClass} ${linksClass} ${className}`}
    >
      {content.map((item, index) => (
        <div className="cmp-accordion__item" key={index}>
          <h3 className="cmp-accordion__header">
            <button
              className={`cmp-accordion__button${
                index === 0 ? " cmp-accordion__button--expanded" : ""
              }`}
            >
              <span className="cmp-accordion__title">{item.title}</span>
              <span className="cmp-accordion__icon"></span>
            </button>
          </h3>
          <div
            className={`cmp-accordion__panel cmp-accordion__panel--${
              index === 0 ? "expanded" : "hidden"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </ComponentWrapper>
  );
};

export const AccordionExamples = () => {
  const content = [
    {
      title: "Title 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas. Varius morbi enim nunc faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.",
    },
    {
      title: "Title 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas. Varius morbi enim nunc faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.",
    },
    {
      title: "Title 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas. Varius morbi enim nunc faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.",
    },
  ];

  return (
    <>
      <Accordion content={content} />
      <Accordion content={content} dark />
      <Accordion content={content} links />
      <Accordion content={content} dark links />
    </>
  );
};
