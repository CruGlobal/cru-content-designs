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
  classes = "", // string
}) => {
  if (src === "") return null;

  return (
    <div className={`image cru-image${classes ? " " + classes : ""}`}>
      <div className="cmp-image">
        <LinkWrapper href={href}>
          <img src={src} className="cmp-image__image" alt={alt} />
        </LinkWrapper>
        {alt && <meta content={alt}></meta>}
        {caption && <span className="cmp-image__title">{caption}</span>}
      </div>
    </div>
  );
};

export const ImageExamples = () => {
  const src = lava1;
  const alt = "Lava flowing into the ocean";
  const caption = "Lava flowing into the ocean";
  const href = "https://unsplash.com/photos/E4944K_4SvI";

  return (
    <>
      <h2>Standard</h2>
      <Image src={src} alt={alt} />

      <h2>Caption</h2>
      <Image src={src} alt={alt} caption={caption} />

      <h2>Linked</h2>
      <Image src={src} alt={alt} href={href} />

      <h2>Caption/Linked</h2>
      <Image src={src} alt={alt} caption={caption} href={href} />
    </>
  );
};
