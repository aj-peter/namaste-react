import { TAGS } from "../../utils/constants";

const HeaderRight = () => (
  <div className="header-right">
    {TAGS.map(({ icon: Icon, text, id }) => (
      <div className="tag" key={id}>
        <Icon size={20} />
        <div className="tag-text">{text}</div>
      </div>
    ))}
  </div>
);

export default HeaderRight;
