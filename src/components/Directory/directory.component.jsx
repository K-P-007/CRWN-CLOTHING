import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { IMAGES } from "../../assets";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import MenuItem from "../Menu-Item/Menu-Item.component";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
