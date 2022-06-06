export const ComponentWrapper = ({
  type,
  className = "",
  hideWrapper = false,
  children,
}) => {
  if (!type) return null;

  const classes = `${type} cru-${type} ${className}`;

  function whitespaceCleanup(string) {
    let tmp = string.trim();
    tmp = tmp.replace(/  +/g, " ");
    return tmp;
  }

  const DynamicInnerTag =
    type === "breadcrumb" ? "nav" : type === "list" ? "ul" : "div";

  if (!hideWrapper) {
    return (
      <div className={whitespaceCleanup(classes)}>
        <DynamicInnerTag className={`cmp-${type}`}>{children}</DynamicInnerTag>
      </div>
    );
  } else {
    return (
      <DynamicInnerTag className={`cmp-${type}`}>{children}</DynamicInnerTag>
    );
  }
};

export const LinkWrapper = ({ href, className, children }) => {
  return href ? (
    <a className={className} href={href}>
      {children}
    </a>
  ) : (
    children
  );
};
