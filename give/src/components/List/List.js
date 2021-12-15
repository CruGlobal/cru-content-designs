import "./List.css";

const ListType = ({ type, children }) => {
  if (!children) return null;

  return type === "ordered" ? (
    <ol className="cmp-list">{children}</ol>
  ) : (
    <ul className="cmp-list">{children}</ul>
  );
};

const ListItems = ({ items, linked }) => {
  if (items.length === 0) return null;

  return items.map((item) => (
    <li className="cmp-list__item" key={item.title}>
      <article>
        <ListItemLink linked={linked} href={item.href}>
          <ListItemText className="cmp-list__item-title">
            {item.title}
          </ListItemText>
          <ListItemText className="cmp-list__item-date">
            {item.date}
          </ListItemText>
        </ListItemLink>
        <ListItemText className="cmp-list__item-description">
          {item.desc}
        </ListItemText>
      </article>
    </li>
  ));
};

const ListItemLink = ({ linked, href = "", children }) => {
  return linked && href !== "" ? (
    <a className="cmp-list__item-link" href={href}>
      {children}
    </a>
  ) : (
    children
  );
};

const ListItemText = ({ className, children }) => {
  if (!children) return null;

  return <span className={className}>{children}</span>;
};

export const List = ({
  className = "", // string
  type = "unordered", // string - "unordered" | "ordered"
  items = [], // array of objects with `title`, `date`, `desc`, and `href` keys, each key containing a string
  spaced = false, // bool
  linked = false, // bool
}) => {
  if (items.length === 0) return null;

  const classes = className !== "" ? " " + className : className;
  const spacedClass = spaced ? " cru-list-extra-spacing" : "";

  return (
    <div className={"list cru-list" + spacedClass + classes}>
      <ListType type={type}>
        <ListItems items={items} linked={linked} />
      </ListType>
    </div>
  );
};

export const ListExamples = () => {
  const content = [
    {
      title: "Item 1",
      date: "Dec. 25th",
      desc: "Description 1",
      href: "https://google.com",
    },
    {
      title: "Item 2",
      date: "Dec. 30th",
      desc: "Description 2",
      href: "https://facebook.com",
    },
    {
      title: "Item 3",
      date: "Jan. 1st",
      desc: "Description 3",
      href: "https://twitter.com",
    },
  ];

  return (
    <>
      <List type="unordered" items={content} linked></List>
      <List type="ordered" items={content}></List>
    </>
  );
};
