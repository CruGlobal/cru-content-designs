// Based on v3
// https://www.aemcomponents.dev/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1/level-2/breadcrumb.html
// https://github.com/adobe/aem-core-wcm-components/blob/main/content/src/content/jcr_root/apps/core/wcm/components/breadcrumb/v3/breadcrumb/breadcrumb.html

import "./Breadcrumb.css";

const LinkWrapper = ({ href, children }) => {
  return href ? (
    <a className="cmp-breadcrumb__item-link" href={href}>
      {children}
    </a>
  ) : (
    children
  );
};

const BreadcrumbItem = ({ item, last = false }) => {
  if (!item.title) return null;

  return (
    <li
      className={`cmp-breadcrumb__item${
        last ? " cmp-breadcrumb__item--active" : ""
      }`}
    >
      <LinkWrapper href={item.href}>
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

  const classes = className !== "" ? " " + className : className;

  const colors = ["yellow", "gray-dark", "gray-medium", "gray-light", "white"];
  const colorClass = `cru-breadcrumb-${
    colors.includes(color) ? color : colors[1]
  }`;

  return (
    <div className={`breadcrumb cru-breadcrumb ${colorClass}${classes}`}>
      <nav className="cmp-breadcrumb">
        <ol className="cmp-breadcrumb__list">
          {content.map((item, index) => (
            <BreadcrumbItem
              item={item}
              last={content.length === index + 1}
              key={item.title}
            />
          ))}
        </ol>
      </nav>
    </div>
  );
};

export const BreadcrumbExamples = () => {
  const content = [
    { title: "Home", href: "https://google.com" },
    { title: "Level 1", href: "https://facebook.com" },
    { title: "Level 2", href: "https://twitter.com" },
    { title: "Current", href: "" },
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
