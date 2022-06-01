// Based on v3
// https://www.aemcomponents.dev/content/core-components-examples/library/core-content/title.html
// https://github.com/adobe/aem-core-wcm-components/blob/main/content/src/content/jcr_root/apps/core/wcm/components/title/v3/title/title.html

import { ComponentWrapper, LinkWrapper } from "../shared";
import "./Title.css";

export const Title = ({
  className = "", // string
  element = "", // string = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size = "", // string - "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs"
  href = "", // string - URL
  children,
}) => {
  if (!children) return null;

  const tags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const DynamicHeadingTag = tags.includes(element) ? `${element}` : tags[1];

  const sizes = ["xxl", "xl", "lg", "md", "sm", "xs", "xxs"];
  const sizeClass = `cru-title-${sizes.includes(size) ? size : sizes[3]}`;

  return (
    <ComponentWrapper type="title" className={`${sizeClass} ${className}`}>
      <DynamicHeadingTag className="cmp-title__text">
        <LinkWrapper href={href} className="cmp-title__link">
          {children}
        </LinkWrapper>
      </DynamicHeadingTag>
    </ComponentWrapper>
  );
};

export const TitleExamples = () => {
  return (
    <>
      <Title size="xxl" element="h1">
        Heading XXL
      </Title>
      <Title size="xl" element="h2" href="https://google.com">
        Heading XL
      </Title>
      <Title size="lg" element="h3">
        Heading LG
      </Title>
      <Title size="md" element="h4" href="https://apple.com">
        Heading MD
      </Title>
      <Title size="sm" element="h5">
        Heading SM
      </Title>
      <Title size="xs" element="h6" href="https://facebook.com">
        Heading XS
      </Title>
      <Title size="xxs">Heading XXS</Title>
    </>
  );
};
