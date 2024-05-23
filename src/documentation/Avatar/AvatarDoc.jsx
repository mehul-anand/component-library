import Avatar from "../../components/Avatar/Avatar";
const AvatarDoc = () => {
  return (
    <>
      <h1>Avatar Component</h1>
      <section className="avatarSection">
        <Avatar
          size="sm"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Avatar
          size="md"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Avatar
          size="lg"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </section>
      <h2>How to use avatar component?</h2>
      <pre>
        <code>
          &lt;Avatar size="sm" src="https://images.upload_your_image" /&gt;
          <br />
          &lt;Avatar size="md" src="https://images.upload_your_image" /&gt;
          <br />
          &lt;Avatar size="lg" src="https://images.upload_your_image" /&gt;
        </code>
      </pre>
    </>
  );
};
export default AvatarDoc;
