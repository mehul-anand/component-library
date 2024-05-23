import "./Avatar.css";
const Avatar = ({ size, src, badge }) => {
  return (
    <div className={`${size} avatar`}>
      <img className="avatarImg" src={src} alt="user-img" />
      {badge && <span className="badge">{badge}+</span>}
    </div>
  );
};
export default Avatar;
