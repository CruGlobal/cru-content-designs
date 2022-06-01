export const ComponentWrapper = ({ type, className = "", children }) => {
  if (!type) return null;

  const classes = `${type} cru-${type} ${className}`;

  return (
    <div className={classes.trim()}>
      <div className={`cmp-${type}`}>{children}</div>
    </div>
  );
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
