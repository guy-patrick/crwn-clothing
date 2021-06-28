import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../redux/directory/directory.selectors";
import MenuItem from "./MenuItem";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map((item) => (
      <MenuItem key={item.id} item={item} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
