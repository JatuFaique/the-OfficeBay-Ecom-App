import { v4 as uuid } from "uuid";
import decor from "../../assets/decor.jpg";
import desk from "../../assets/desk.jpg";
// import chair from "../assets/chair.jpg";
import chair from "../../assets/chair.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    image: decor,
    categoryName: "Decor",
    description:
      "An Collection of home essestials and comfort that gives gives home your personal TOUCH..",
  },
  {
    _id: uuid(),
    image: chair,
    categoryName: "Office",
    description:
      "For all your work needs and a fullfilling professional career, a nit grit stationaries that comes near handy",
  },
  {
    _id: uuid(),
    image: desk,
    categoryName: "Desk",
    description:
      "For EveryDay Productivity and quality of work from home needs.",
  },
];
