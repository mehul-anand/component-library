import Button from "../../components/Buttons/Button";
import FloatingButton from "../../components/Buttons/FloatingButton";
import IconButton from "../../components/Buttons/IconButton";
import LinkButton from "../../components/Buttons/LinkButton";

const ButtonDoc = () => {
  return (
    <>
      <h1>Button Component</h1>
      <section className="avatarSection">
        <Button text="primary" />
        <LinkButton text="link" />
        <IconButton tag="search" text="search" />
        <IconButton tag="edit" text="edit" />
        <IconButton tag="delete" text="delete" />
        <IconButton tag="add" text="add" />
        <FloatingButton tag="search" />
        <FloatingButton tag="edit" />
        <FloatingButton tag="delete" />
        <FloatingButton tag="add" />
      </section>
      <h2>How to use button component </h2>
      <pre>
        <code>
          &lt;Button text="primary" /&gt;
          <br />
          &lt;LinkButton text="link" /&gt;
          <br />
          &lt;IconButton tag="search" text="search" /&gt;
          <br />
          &lt;IconButton tag="edit" text="edit" /&gt;
          <br />
          &lt;IconButton tag="delete" text="delete" /&gt;
          <br />
          &lt;IconButton tag="add" text="add" /&gt;
          <br />
          &lt;FloatingButton tag="search" /&gt;
          <br />
          &lt;FloatingButton tag="edit" /&gt;
          <br />
          &lt;FloatingButton tag="delete" /&gt;
          <br />
          &lt;FloatingButton tag="add" /&gt;
        </code>
      </pre>
    </>
  );
};
export default ButtonDoc;
