export const ComponentWrapper = ({
  type,
  className = "",
  hideWrapper = false,
  hideInner = false,
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

  if (hideWrapper) {
    return (
      <DynamicInnerTag className={`cmp-${type}`}>{children}</DynamicInnerTag>
    );
  } else if (hideInner) {
    return <div className={whitespaceCleanup(classes)}>{children}</div>;
  } else {
    return (
      <div className={whitespaceCleanup(classes)}>
        <DynamicInnerTag className={`cmp-${type}`}>{children}</DynamicInnerTag>
      </div>
    );
  }
};

export const LinkWrapper = ({
  href,
  unwrap = false,
  className = "",
  children,
}) => {
  return !unwrap ? (
    <a className={className} href={href}>
      {children}
    </a>
  ) : (
    children
  );
};
