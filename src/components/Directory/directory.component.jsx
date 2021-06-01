import React from "react";
import MenuItem from "../Menu-Item/Menu-Item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://forever21.imgix.net/img/app/product/5/503793-3785892.jpg?w=412&auto=format",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://images.pexels.com/photos/887898/pexels-photo-887898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl:
            "https://goop-img.com/wp-content/uploads/2021/03/The-Spring-2021-Sneaker-Guide_anouk-1.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl:
            "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/5_day_womens_dumbbell_workout_-_1200x630.jpg?itok=9FiVclc5",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl:
            "https://www.qarotmen.com/uploads/qarot/slideshows/hot-mobile-492416_m.jpg?v=1",
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
        {this.state.sections.map(({ id, imageUrl, title, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
