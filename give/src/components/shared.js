export const ComponentWrapper = ({
  type,
  className = "",
  hideWrapper = false,
  children,
}) => {
  if (!type) return null;

  const classes = `${type} cru-${type} ${className}`;

  const DynamicInnerTag = type === "breadcrumb" ? "nav" : "div";

  if (!hideWrapper) {
    return (
      <div className={classes.trim()}>
        <DynamicInnerTag className={`cmp-${type}`}>{children}</DynamicInnerTag>
      </div>
    );
  } else {
    return (
      <DynamicInnerTag className={`cmp-${type}`}>{children}</DynamicInnerTag>
    );
  }

  // return (
  //   <div className={classes.trim()}>
  //     <DynamicInnerTag className={`cmp-${type}`}>{children}</DynamicInnerTag>
  //   </div>
  // );
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
