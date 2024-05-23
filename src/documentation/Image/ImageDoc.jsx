import Image from "../../components/Image/Image";
const ImageDoc = () => {
  return (
    <>
      <h1>Image Component</h1>
      <section>
        <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Image
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          round={true}
        />
      </section>
      <h2>How to use image component</h2>
      <pre>
        <code>
          &lt;Image src="https://images.unsplash.upload_your_image" /&gt;
          <br />
          &lt;Image src="https://images.unsplash.upload_your_image" round=true
          /&gt;
        </code>
      </pre>
    </>
  );
};
export default ImageDoc;
