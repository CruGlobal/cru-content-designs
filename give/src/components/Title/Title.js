// Based on v3
// https://www.aemcomponents.dev/content/core-components-examples/library/core-content/title.html
// https://github.com/adobe/aem-core-wcm-components/blob/main/content/src/content/jcr_root/apps/core/wcm/components/title/v3/title/title.html

import "./Title.css";

const LinkWrapper = ({ href, children }) => {
  return href ? (
    <a className="cmp-title__link" href={href}>
      {children}
    </a>
  ) : (
    children
  );
};

export const Title = ({
  className = "", // string
  component = "", // string = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size = "", // string - "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs"
  href = "", // string - URL
  children,
}) => {
  if (!children) return null;

  const classes = className !== "" ? " " + className : className;

  const tags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const DynamicHeadingTag = tags.includes(component) ? `${component}` : "h2";

  const sizes = ["xxl", "xl", "lg", "md", "sm", "xs", "xxs"];
  let sizeClass = " cru-title-";
  sizeClass += sizes.includes(size) ? size : sizes[3];

  return (
    <div className={"title cru-title" + sizeClass + classes}>
      <div className="cmp-title">
        <DynamicHeadingTag className="cmp-title__text">
          <LinkWrapper href={href}>{children}</LinkWrapper>
        </DynamicHeadingTag>
      </div>
    </div>
  );
};

export const TitleExamples = () => {
  return (
    <>
      <Title size="xxl" component="h1">
        Heading XXL
      </Title>
      <Title size="xl" component="h2" href="https://google.com">
        Heading XL
      </Title>
      <Title size="lg" component="h3">
        Heading LG
      </Title>
      <Title size="md" component="h4" href="https://apple.com">
        Heading MD
      </Title>
      <Title size="sm" component="h5">
        Heading SM
      </Title>
      <Title size="xs" component="h6" href="https://facebook.com">
        Heading XS
      </Title>
      <Title size="xxs">Heading XXS</Title>
    </>
  );
};
