// Based on v2
// https://www.aemcomponents.dev/content/core-components-examples/library/core-content/text.html
// https://github.com/adobe/aem-core-wcm-components/blob/main/content/src/content/jcr_root/apps/core/wcm/components/text/v2/text/text.html

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
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th>Column 4</th>
            </tr>
            <tr>
              <td>1.1</td>
              <td>1.2</td>
              <td>1.3</td>
              <td>1.4</td>
            </tr>
            <tr>
              <td>2.1</td>
              <td>2.2</td>
              <td>2.3</td>
              <td>2.4</td>
            </tr>
          </tbody>
        </table>
      </Text>
    </>
  );
};
