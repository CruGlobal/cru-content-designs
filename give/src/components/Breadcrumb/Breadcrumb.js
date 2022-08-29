// Based on v3
// https://www.aemcomponents.dev/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1/level-2/breadcrumb.html
// https://github.com/adobe/aem-core-wcm-components/tree/main/content/src/content/jcr_root/apps/core/wcm/components/breadcrumb/v3/breadcrumb

import { ComponentWrapper, LinkWrapper } from "../shared";
import "./Breadcrumb.css";

export const Breadcrumb = ({
  className, // string
  id, // string
  children,
}) => {
  if (!children) return null;

  return (
    <ComponentWrapper type="breadcrumb" className={className} id={id}>
      <ol className="cmp-breadcrumb__list">{children}</ol>
    </ComponentWrapper>
  );
};

export const BreadcrumbItem = ({
  href = "", // string
  active = false, // bool
  children,
}) => {
  if (!children) return null;

  return (
    <li
      className={`cmp-breadcrumb__item${
        active ? " cmp-breadcrumb__item--active" : ""
      }`}
    >
      <LinkWrapper
        href={href}
        unwrap={active || !href}
        className="cmp-breadcrumb__item-link"
      >
        <span>{children}</span>
      </LinkWrapper>
    </li>
  );
};

export const BreadcrumbExamples = () => {
  return (
    <Breadcrumb id="breadcrumb1">
      <BreadcrumbItem href="https://google.com">Home</BreadcrumbItem>
      <BreadcrumbItem href="https://facebook.com">Level 1</BreadcrumbItem>
      <BreadcrumbItem href="https://twitter.com">Level 2</BreadcrumbItem>
      <BreadcrumbItem href="https://microsoft.com" active>
        Current
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
