export const ComponentWrapper = ({
  type,
  className = "",
  hideWrapper = false,
  hideInner = false,
  wrapperClass = "",
  children,
  ...other
}) => {
  if (!type) return null;

  const classes = `${
    wrapperClass ? wrapperClass : type
  } cru-${type} ${className}`;

  function whitespaceCleanup(string) {
    let tmp = string.trim();
    tmp = tmp.replace(/  +/g, " ");
    return tmp;
  }

  let DynamicInnerTag;
  switch (type) {
    case "breadcrumb":
      DynamicInnerTag = "nav";
      break;
    case "form":
      DynamicInnerTag = "form";
      break;
    case "list":
      DynamicInnerTag = "ul";
      break;
    case "search":
      DynamicInnerTag = "section";
      break;
    default:
      DynamicInnerTag = "div";
  }

  if (hideWrapper) {
    return (
      <DynamicInnerTag className={`cmp-${type}`} {...other}>
        {children}
      </DynamicInnerTag>
    );
  } else if (hideInner) {
    return <div className={whitespaceCleanup(classes)}>{children}</div>;
  } else {
    return (
      <div className={whitespaceCleanup(classes)}>
        <DynamicInnerTag className={`cmp-${type}`} {...other}>
          {children}
        </DynamicInnerTag>
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
