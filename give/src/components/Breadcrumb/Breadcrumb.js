import "./Breadcrumb.css";

export const Breadcrumb = ({
  className = "", // string
  content = [], // array of objects with `title` and `href` keys, each key containing a string
  color = "gray-dark", // string - "yellow" | "gray-dark" | "gray-medium" | "gray-light" | "white"
}) => {
  if (content.length === 0) return null;

  const classes = className !== "" ? " " + className : className;
  const colorClass = color !== "" ? " cru-breadcrumb-" + color : "";

  const BreadcrumbItem = ({ item }) => {
    if (item.title === "") return null;

    return item.href !== "" ? (
      <li className="cmp-breadcrumb__item">
        <a href={item.href} class="cmp-breadcrumb__item-link">
          <span>{item.title}</span>
        </a>
      </li>
    ) : (
      <li className="cmp-breadcrumb__item cmp-breadcrumb__item--active">
        <span>{item.title}</span>
      </li>
    );
  };

  return (
    <div className={"breadcrumb cru-breadcrumb" + colorClass + classes}>
      <nav className="cmp-breadcrumb">
        <ol className="cmp-breadcrumb__list">
          {content.map((item, index) => (
            <BreadcrumbItem item={item} key={item.title} />
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
