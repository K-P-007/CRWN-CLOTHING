import { IMAGES } from "../../assets";

const INITIAL_STATE = {
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

const directoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

export default directoryReducer;
