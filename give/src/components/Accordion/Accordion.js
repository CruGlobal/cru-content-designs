// Based on v1
// https://www.aemcomponents.dev/content/core-components-examples/library/core-content/accordion.html
// https://github.com/adobe/aem-core-wcm-components/tree/main/content/src/content/jcr_root/apps/core/wcm/components/accordion/v1/accordion

import { ComponentWrapper } from "../shared";
import "./Accordion.css";

export const Accordion = ({
  className, // string
  id, // string
  children,
}) => {
  if (!children) return null;

  return (
    <ComponentWrapper type="accordion" className={className} id={id}>
      {children}
    </ComponentWrapper>
  );
};

export const AccordionItem = ({
  title = "Title", // string
  expanded = false, // bool
  id, // string
  children,
}) => {
  if (!children) return null;

  return (
    <div className="cmp-accordion__item" id={id}>
      <h3 className="cmp-accordion__header">
        <button
          className={`cmp-accordion__button${
            expanded ? " cmp-accordion__button--expanded" : ""
          }`}
          id={id ? `${id}-button` : null}
        >
          <span className="cmp-accordion__title">{title}</span>
          <span className="cmp-accordion__icon"></span>
        </button>
      </h3>
      <div
        className={`cmp-accordion__panel cmp-accordion__panel--${
          expanded ? "expanded" : "hidden"
        }`}
        id={id ? `${id}-panel` : null}
      >
        {children}
      </div>
    </div>
  );
};

export const AccordionExamples = () => {
  return (
    <Accordion id="accordion1">
      <AccordionItem title="Item 1" id="item1" expanded>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </AccordionItem>
      <AccordionItem title="Item 2" id="item2">
        Donec ut ex urna. Nullam pretium tortor eu lectus laoreet viverra.
      </AccordionItem>
      <AccordionItem title="Item 3" id="item3">
        Sed gravida consectetur tincidunt. Vestibulum id dignissim eros.
      </AccordionItem>
    </Accordion>
  );
};
