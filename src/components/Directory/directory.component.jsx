import React from "react";
import { IMAGES } from "../../assets";
import MenuItem from "../Menu-Item/Menu-Item.component";
import "./directory.styles.scss";

console.log(IMAGES);
class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: IMAGES.LandingPage_Hat,
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: IMAGES.LandingPage_Jackets,
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: IMAGES.LandingPage_Sneakers,
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: IMAGES.LandingPage_Womens,
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: IMAGES.LandingPage_Men,
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
