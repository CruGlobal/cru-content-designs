import "./Text.css";
import "../List/List.css";

export const Text = ({
  className = "", // string
  small = false, // bool
  children,
}) => {
  if (!children) return null;

  const classes = className !== "" ? " " + className : className;
  const smallClass = small ? " cru-text-sm" : "";

  return (
    <div className={"text cru-text" + smallClass + classes}>
      <div className="cmp-text">{children}</div>
    </div>
  );
};

export const TextExamples = () => {
  return (
    <>
      <Text>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi
          bibendum neque egestas congue quisque egestas. Varius morbi enim nunc
          faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate
          sapien nec sagittis.
        </p>
      </Text>
      <Text small>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi
          bibendum neque egestas congue quisque egestas. Varius morbi enim nunc
          faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate
          sapien nec sagittis.
        </p>
      </Text>
      <Text>
        <p>
          <b>Bold </b>can be used to emphasize a word or phrase, as can{" "}
          <u>underline</u> and <i>italics.</i>
          <sup>Superscript</sup> and <sub>subscript</sub> are useful for
          mathematical (E = mc<sup>2</sup>) or scientific (h<sub>2</sub>O)
          expressions. Paragraph styles can provide alternative renderings, such
          as quote sections:
        </p>
        <blockquote>
          "<i>Be yourself; everyone else is already taken.</i>"
        </blockquote>
        <blockquote>- Oscar Wilde</blockquote>
      </Text>
      <Text>
        <ul>
          <li>List item</li>
          <li>
            <a href="http://google.com">List item</a>
          </li>
          <li>List item</li>
          <li>
            <a href="http://google.com">List item</a>
          </li>
        </ul>
        <ol>
          <li>List Item</li>
          <li>
            <a href="http://google.com">List item</a>
          </li>
          <li>List item</li>
          <li>
            <a href="http://google.com">List item</a>
          </li>
        </ol>
      </Text>
      <Text>
        <table cellPadding="5" cellSpacing="0" border="1">
          <tbody>
            <tr>
              <td>Column 1</td>
              <td>Column 2</td>
              <td>Column 3</td>
              <td>Column 4</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </Text>
    </>
  );
};
