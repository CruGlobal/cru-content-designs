import "./Accordion.css";

const AccordionItem = ({ content, first }) => {
  const expandedButton = first ? " cmp-accordion__button--expanded" : "";
  const expandedPanel = first ? "expanded" : "hidden";

  return (
    <div class="cmp-accordion__item">
      <h3 class="cmp-accordion__header">
        <button class={"cmp-accordion__button" + expandedButton}>
          <span class="cmp-accordion__title">{content.title}</span>
          <span class="cmp-accordion__icon"></span>
        </button>
      </h3>
      <div
        class={"cmp-accordion__panel cmp-accordion__panel--" + expandedPanel}
      >
        {content.content}
      </div>
    </div>
  );
};

export const Accordion = ({
  className = "", // string
  content = [], // array of objects with `title` and `content` keys, each key containing a string
  dark = false, // bool
  links = false, // bool
}) => {
  if (content.length === 0) return null;

  const classes = className !== "" ? " " + className : className;
  const darkClass = dark ? " cru-accordion-dark" : "";
  const linksClass = links ? " cru-accordion-links" : "";

  return (
    <div
      className={"accordion cru-accordion" + darkClass + linksClass + classes}
    >
      <div className="cmp-accordion">
        {content.map((item, index) => (
          <AccordionItem content={item} first={index === 0} key={item.title} />
        ))}
      </div>
    </div>
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
