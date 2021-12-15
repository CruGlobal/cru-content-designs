import "./Teaser.css";
import epcot from "../../epcot.jpeg";

const TeaserTitle = ({ link, children }) => {
  if (!children) return null;

  return (
    <h2 className="cmp-teaser__title">
      {link !== "" ? (
        <a className="cmp-teaser__title-link" href={link}>
          {children}
        </a>
      ) : (
        children
      )}
    </h2>
  );
};

const TeaserImage = ({ obj, link }) => {
  if (obj.src === "") return null;

  const image = () => (
    <img src={obj.src} className="cmp-image__image" alt={obj.alt} />
  );

  return (
    <div className="cmp-teaser__image">
      <div className="cmp-image">
        {link !== "" ? (
          <a className="cmp-image__link" href={link}>
            {image()}
          </a>
        ) : (
          image()
        )}
        <meta content={obj.alt} />
      </div>
    </div>
  );
};

const TeaserPreTitle = ({ children }) => {
  if (!children) return null;

  return <div className="cmp-teaser__pretitle">{children}</div>;
};

const TeaserDescription = ({ children }) => {
  if (!children) return null;

  return (
    <div className="cmp-teaser__description">
      <p>{children}</p>
    </div>
  );
};

const TeaserButtons = ({ btns }) => {
  if (btns.length === 0) return null;

  return (
    <div className="cmp-teaser__action-container">
      {btns.map((btn) => (
        <a className="cmp-teaser__action-link" href={btn.href} key={btn.href}>
          {btn.text}
        </a>
      ))}
    </div>
  );
};

export const Teaser = ({
  className = "", // string
  type = "", // string - "featured" | "layered"
  title = "", // string
  img = { src: "", alt: "" }, // object with `src` and `alt` keys, each key containing a string
  pre = "", // string
  desc = "", // string
  btns = [], // array of objects with `href` and `text` keys, each key containing a string
  link = "", // string - URL
}) => {
  if (title === "") return null;

  const classes = className !== "" ? " " + className : className;
  const typeClass = type !== "" ? " cru-teaser-" + type : type;

  return (
    <div className={"teaser" + typeClass + classes}>
      <div className="cmp-teaser">
        <TeaserImage obj={img} link={link} />
        <div className="cmp-teaser__content">
          <TeaserPreTitle>{pre}</TeaserPreTitle>
          <TeaserTitle link={link}>{title}</TeaserTitle>
          <TeaserDescription>{desc}</TeaserDescription>
          <TeaserButtons btns={btns} />
        </div>
      </div>
    </div>
  );
};

export const TeaserExamples = () => {
  return (
    <>
      <Teaser
        type="featured"
        pre="Pretitle 1"
        title="Title 1"
        desc="Description 1"
        img={{ src: epcot, alt: "EPCOT 1" }}
        link="http://facebook.com"
        btns={[
          { href: "http://google.com", text: "CTA 1" },
          { href: "http://twitter.com", text: "CTA 2" },
        ]}
      />
      <Teaser
        type="featured"
        className="cru-teaser-featured-gray-dark"
        pre="Pretitle 2"
        title="Title 2"
        desc="Description 2"
        img={{ src: epcot, alt: "EPCOT 2" }}
        btns={[
          { href: "http://google.com", text: "CTA 1" },
          { href: "http://twitter.com", text: "CTA 2" },
        ]}
      />
      <Teaser
        type="layered"
        pre="Pretitle 3"
        title="Title 3"
        desc="Description 3"
        img={{ src: epcot, alt: "EPCOT 3" }}
        btns={[
          { href: "http://google.com", text: "CTA 1" },
          { href: "http://twitter.com", text: "CTA 2" },
        ]}
      />
    </>
  );
};
