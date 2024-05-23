import CardBadge from "../../components/Cards/CardBadge";
import CardDismiss from "../../components/Cards/CardDismiss";
import CardOverlay from "../../components/Cards/CardOverlay";
import CardResponsive from "../../components/Cards/CardResponsive";
import CardShadow from "../../components/Cards/CardShadow";
import CardText from "../../components/Cards/CardText";
const data = {
  title: "Primary Title",
  about: "About Card",
  rating: "4.5",
  price: "1234",
  content:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quia optio, consectetur, aliquam sequi veniam culpa velit sapiente, facilis doloremque.",
  src:
    "https://images.unsplash.com/photo-1558455806-316856e5b499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29va2llJTIwamFyfGVufDB8fDB8fHww",
  tag: "new"
};
const CardDoc = () => {
  return (
    <>
      <h1>Card Component</h1>
      <section>
        <CardBadge data={data} />
        <br />
        <CardDismiss data={data} />
        <br />
        <CardOverlay data={data} />
        <br />
        <CardText data={data} />
        <br />
        <CardResponsive data={data} />
        <br />
        <CardShadow data={data} />
      </section>
      <h2>How to use card component</h2>
      <pre>
        <code>
          &lt;CardBadge data=&#123;data&#125;/&gt;
          <br />
          &lt;CardDismiss data=&#123;data&#125;/&gt;
          <br />
          &lt;CardOverlay data=&#123;data&#125;/&gt;
          <br />
          &lt;CardText data=&#123;data&#125;/&gt;
          <br />
          &lt;CardResponsive data=&#123;data&#125;/&gt;
          <br />
          &lt;CardShadow data=&#123;data&#125;/&gt;
        </code>
      </pre>
    </>
  );
};
export default CardDoc;
