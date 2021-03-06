import { IMAGES } from "../../assets";

const SHOP_DATA = {
  hats: {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: IMAGES.Shop_Data_Hats_brown_brim,
        price: 25,
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: IMAGES.Shop_Data_Hats_blue_beanie,
        price: 18,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: IMAGES.Shop_Data_Hats_brown_cowboy,
        price: 35,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: IMAGES.Shop_Data_Hats_grey_brim,
        price: 25,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: IMAGES.Shop_Data_Hats_green_beanie,
        price: 18,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: IMAGES.Shop_Data_Hats_palm_tree_cap,
        price: 14,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: IMAGES.Shop_Data_Hats_red_beanie,
        price: 18,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: IMAGES.Shop_Data_Hats_wolf_cap,
        price: 14,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: IMAGES.Shop_Data_Hats_blue_beanie,
        price: 16,
      },
    ],
  },
  sneakers: {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: IMAGES.Shop_Data_Sneakers_adidas,
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: IMAGES.Shop_Data_Sneakers_yeezy,
        price: 280,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: IMAGES.Shop_Data_Sneakers_black_converse,
        price: 110,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: IMAGES.Shop_Data_Sneakers_white_nike,
        price: 160,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: IMAGES.Shop_Data_Sneakers_nikes_red,
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: IMAGES.Shop_Data_Sneakers_nike_brown,
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: IMAGES.Shop_Data_Sneakers_nike_funky,
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: IMAGES.Shop_Data_Sneakers_timberlands,
        price: 200,
      },
    ],
  },
  jackets: {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185,
      },
    ],
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20,
      },
    ],
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
};
export default SHOP_DATA;
