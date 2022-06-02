// Based on v2
// https://www.aemcomponents.dev/content/core-components-examples/library/core-content/teaser.html
// https://github.com/adobe/aem-core-wcm-components/blob/main/content/src/content/jcr_root/apps/core/wcm/components/teaser/v2/teaser/teaser.html

import { ComponentWrapper, LinkWrapper } from "../shared";
import { Image } from "../Image/Image";
import "./Teaser.css";
import lava1 from "../../assets/lava1.jpeg";

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
  if (!title) return null;

  const types = ["featured", "layered"];
  const typeClass = types.includes(type) ? "cru-teaser-" + type : "";

  return (
    <ComponentWrapper type="teaser" className={`${typeClass} ${className}`}>
      <LinkWrapper href={link} className="cmp-teaser__link">
        {/* Content */}
        <div className="cmp-teaser__content">
          {/* Pre-title */}
          {pre && <p className="cmp-teaser__pretitle">{pre}</p>}

          {/* Title */}
          <h2 className="cmp-teaser__title">
            <LinkWrapper href={link} className="cmp-teaser__title-link">
              {title}
            </LinkWrapper>
          </h2>

          {/* Description */}
          {desc && (
            <div className="cmp-teaser__description">
              <p>{desc}</p>
            </div>
          )}

          {/* Buttons */}
          {btns.length > 0 && (
            <div className="cmp-teaser__action-container">
              {btns.map((btn) => (
                <a
                  className="cmp-teaser__action-link"
                  href={btn.href}
                  key={btn.href}
                >
                  {btn.text}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        {img.src && (
          <div className="cmp-teaser__image">
            <Image src={img.src} alt={img.alt} hideWrapper />
          </div>
        )}
      </LinkWrapper>
    </ComponentWrapper>
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
        img={{ src: lava1, alt: "Lava 1" }}
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
        img={{ src: lava1, alt: "Lava 2" }}
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
        img={{ src: lava1, alt: "Lava 3" }}
        btns={[
          { href: "http://google.com", text: "CTA 1" },
          { href: "http://twitter.com", text: "CTA 2" },
        ]}
      />
    </>
  );
};
