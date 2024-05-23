import Avatar from "../../components/Avatar/Avatar";
import Badge from "../../components/Badge/Badge";

const BadgeDoc = () => {
  return (
    <>
      <h1>Badge Component</h1>
      <section className="avatarSection">
        <Avatar
          size="md"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          badge="100"
        />
        <Badge badge="4" />
      </section>
      <h2>How to use badge component?</h2>
      <pre>
        <code>
          &lt;Avatar size="md" src="https://images.upload_your_image"
          badge="badge_data" /&gt;
          <br />
          &lt;Badge badge="badge_data" /&gt;
        </code>
      </pre>
    </>
  );
};
export default BadgeDoc;
