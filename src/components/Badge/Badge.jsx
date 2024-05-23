import "./Badge.css";
const Badge = ({ badge }) => {
  return (
    <div className="icon">
      {badge && <sup className="badgeIcon">{badge}</sup>}
    </div>
  );
};
export default Badge;
