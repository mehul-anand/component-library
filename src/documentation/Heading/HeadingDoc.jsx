import Heading from "../../components/Heading/Heading";

const HeadingDoc = () => {
  return (
    <>
      <h1>Heading Component</h1>
      <section>
        <Heading />
      </section>
      <h2>How to use heading component</h2>
      <pre>
        <code>
          &lt;h1&gt;Heading 1&lt;/h1&gt;
          <br />
          &lt;h2&gt;Heading 2&lt;/h2&gt;
          <br />
          &lt;h3&gt;Heading 3&lt;/h3&gt;
          <br />
          &lt;h4&gt;Heading 2&lt;/h4&gt;
          <br />
          &lt;h5&gt;Heading 5&lt;/h5&gt;
          <br />
          &lt;h6&gt;Heading 6&lt;/h6&gt;
        </code>
      </pre>
    </>
  );
};
export default HeadingDoc;
