import Text from "../../components/Text/Text";

const TextDoc = () => {
  return (
    <>
      <h1>Text Component</h1>
      <section>
        <Text />
      </section>
      <h2>How to use text component</h2>
      <pre>
        <code>
          &lt;p className="xxxxlt"&gt;Text 1&lt;/p&gt;
          <br />
          &lt;p className="xxxlt"&gt;Text 2&lt;/p&gt;
          <br />
          &lt;p className="xxlt"&gt;Text 3&lt;/p&gt;
          <br />
          &lt;p className="xlt"&gt;Text 4&lt;/p&gt;
          <br />
          &lt;p className="lgt"&gt;Text 5&lt;/p&gt;
          <br />
          &lt;p className="mdt"&gt;Text 6&lt;/p&gt;
          <br />
          &lt;p&gt;Text Default&lt;/p&gt;
        </code>
      </pre>
    </>
  );
};
export default TextDoc;
