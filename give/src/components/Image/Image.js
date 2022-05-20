// Based on v3
// https://www.aemcomponents.dev/content/core-components-examples/library/core-content/image.html

import "./Image.css";
import lava1 from "../../assets/lava1.jpeg";

const LinkWrapper = ({ href, children }) => {
  return href ? (
    <a className="cmp-image__link" href={href}>
      {children}
    </a>
  ) : (
    children
  );
};

export const Image = ({
  src = "", // string
  alt = "", // string
  caption = "", // string
  href = "", // string - URL
  popupTitle = true, // boolean
  classes = "", // string
}) => {
  if (src === "" && alt === "") return null;

  return (
    <div className={`image cru-image${classes ? " " + classes : ""}`}>
      <div className="cmp-image">
        <LinkWrapper href={href}>
          <img
            src={src}
            className="cmp-image__image"
            alt={alt}
            title={popupTitle && caption ? caption : ""}
          />
        </LinkWrapper>
        {!popupTitle && caption && (
          <span className="cmp-image__title">{caption}</span>
        )}
      </div>
    </div>
  );
};

export const ImageExamples = () => {
  const src = lava1;
  const alt = "Alt: Lava flowing into the ocean";
  const caption = "Title: Lava flowing into the ocean";
  const href = "https://unsplash.com/photos/E4944K_4SvI";

  return (
    <>
      <h2>Standard</h2>
      <Image src={src} alt={alt} caption={caption} />

      <h2>Caption</h2>
      <Image src={src} alt={alt} caption={caption} popupTitle={false} />

      <h2>Linked</h2>
      <Image src={src} alt={alt} caption={caption} href={href} />
    </>
  );
};
