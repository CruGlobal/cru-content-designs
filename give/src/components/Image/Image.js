import "./Image.css";
import epcot from "../../epcot.jpeg";

const ImageLink = ({ href, children }) => {
  return href ? (
    <a className="cmp-image__link" href={href}>
      {children}
    </a>
  ) : (
    children
  );
};

const ImageCaption = ({ caption }) => {
  if (caption === "") return null;

  return <span className="cmp-image__title">{caption}</span>;
};

export const Image = ({
  className = "", // string
  img = { src: "", alt: "" }, // object with `src` and `alt` keys, each key containing a string
  caption = "", // string
  href = "", // string - URL
}) => {
  if (img.src === "") return null;

  const classes = className !== "" ? " " + className : className;

  return (
    <div className={"image cru-image" + classes}>
      <div className="cmp-image">
        <ImageLink href={href}>
          <img src={img.src} className="cmp-image__image" alt={img.alt} />
        </ImageLink>
        <meta itemprop="caption" content={img.alt}></meta>
        <ImageCaption caption={caption} />
      </div>
    </div>
  );
};

export const ImageExamples = () => {
  return (
    <>
      <Image
        img={{ src: epcot, alt: "EPCOT" }}
        caption="photo credit: Tom Bricker"
        href="https://tombricker.smugmug.com/Disney/Epcot/i-jHVJP3N/A"
      />
    </>
  );
};
