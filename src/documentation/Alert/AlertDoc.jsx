import Alert from "../../components/Alert/Alert";
const AlertDoc = () => {
  return (
    <>
      <h1>Alert Component</h1>
      <section>
        <Alert
          type="dangerous"
          info="there was an error processing your request"
        />
        <Alert type="done" info="data uploaded to server, Fire on!" />
        <Alert
          type="warning"
          info="Your subscription is about to end pls recharge"
        />
        <Alert type="info" info="Exam dates coming soon!" />
      </section>
      <h2>How to use alert component?</h2>
      <pre>
        <code>
          &lt;Alert type="dangerous" info="your message" /&gt;
          <br />
          &lt;Alert type="done" info="your message" /&gt;
          <br />
          &lt;Alert type="warning" info="your message" /&gt;
          <br />
          &lt;Alert type="info" info="your message" /&gt;
        </code>
      </pre>
    </>
  );
};
export default AlertDoc;
