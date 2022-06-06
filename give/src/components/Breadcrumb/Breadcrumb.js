// Based on v3
// https://www.aemcomponents.dev/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1/level-2/breadcrumb.html
// https://github.com/adobe/aem-core-wcm-components/blob/main/content/src/content/jcr_root/apps/core/wcm/components/breadcrumb/v3/breadcrumb/breadcrumb.html

import { ComponentWrapper, LinkWrapper } from "../shared";
import "./Breadcrumb.css";

const BreadcrumbItem = ({ item, active = false }) => {
  if (!item.title) return null;

  const activeClass = active ? " cmp-breadcrumb__item--active" : "";

  return (
    <li className={`cmp-breadcrumb__item${activeClass}`}>
      <LinkWrapper
        href={item.href}
        unwrap={!item.href || active}
        className="cmp-breadcrumb__item-link"
      >
        <span>{item.title}</span>
      </LinkWrapper>
    </li>
  );
};

export const Breadcrumb = ({
  className = "", // string
  content = [], // array of objects with `title` and `href` props, each key containing a string
  color = "", // string - "yellow" | "gray-dark" | "gray-medium" | "gray-light" | "white"
}) => {
  if (content.length === 0) return null;

  const colors = ["yellow", "gray-dark", "gray-medium", "gray-light", "white"];
  const colorClass = `cru-breadcrumb-${
    colors.includes(color) ? color : colors[1]
  }`;

  return (
    <ComponentWrapper
      type="breadcrumb"
      className={`${colorClass} ${className}`}
    >
      <ol className="cmp-breadcrumb__list">
        {content.map((item, index) => (
          <BreadcrumbItem
            item={item}
            active={content.length === index + 1}
            key={item.title}
          />
        ))}
      </ol>
    </ComponentWrapper>
  );
};

export const BreadcrumbExamples = () => {
  const content = [
    { title: "Home", href: "https://google.com" },
    { title: "Level 1", href: "https://facebook.com" },
    { title: "Level 2", href: "https://twitter.com" },
    { title: "Current", href: "https://microsoft.com" },
  ];

  return (
    <>
      <Breadcrumb content={content} />
      <Breadcrumb content={content} color="gary-dark" />
      <Breadcrumb content={content} color="gray-medium" />
      <Breadcrumb content={content} color="gray-light" />
      <Breadcrumb content={content} color="white" />
      <Breadcrumb content={content} color="yellow" />
    </>
  );
};
