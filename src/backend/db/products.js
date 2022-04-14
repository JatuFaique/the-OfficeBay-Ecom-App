import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 *
 *
 * */

// //Office

// <a href="https://imgbb.com/"><img src="https://i.ibb.co/xCfqp1m/image-6.png" alt="image-6" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/y88ptSs/image-7.png" alt="image-7" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/LSFmGqb/image-9.png" alt="image-9" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/1ZcTDxg/image-11.png" alt="image-11" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/kK9J87R/image-14.png" alt="image-14" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/8zSFFYz/image-15.png" alt="image-15" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/jJ3JWLh/image-16.png" alt="image-16" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/TkFssSw/image-17.png" alt="image-17" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/2W7yS5L/image-18.png" alt="image-18" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/vYX2gG0/image-19.png" alt="image-19" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/gFT98rc/image-20.png" alt="image-20" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/FsX65qy/image-21.png" alt="image-21" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/0yppkv9/image-22.png" alt="image-22" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/m691Nfx/image-23.png" alt="image-23" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/C9cLXpc/image-35.png" alt="image-35" border="0"></a>

// //Table

// <a href="https://imgbb.com/"><img src="https://i.ibb.co/4md3grD/image-8.png" alt="image-8" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/1RXnx0w/image-25.png" alt="image-25" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/4Vm762Q/image-26.png" alt="image-26" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/s2Bgpvt/image-27.png" alt="image-27" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/KxBdJv4/image-28.png" alt="image-28" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/th52sRv/image-29.png" alt="image-29" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/sgtBFbL/image-33.png" alt="image-33" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/5s2XXww/image-34.png" alt="image-34" border="0"></a>

// // decor

// <a href="https://imgbb.com/"><img src="https://i.ibb.co/Jj2txqm/image-4.png" alt="image-4" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/k6QgCFT/image-5.png" alt="image-5" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/6HrBGCt/image-10.png" alt="image-10" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/f00jBGD/image-12.png" alt="image-12" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/bsMQnQK/image-13.png" alt="image-13" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/6XhdtfC/image-24.png" alt="image-24" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/zxJkxgj/image-30.png" alt="image-30" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/TcVJK9g/image-31.png" alt="image-31" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/SvwBM2R/image-36.png" alt="image-36" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/PC3H7MR/image-37.png" alt="image-37" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/SJqGm7L/image-38.png" alt="image-38" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/SVfTLjr/image-39.png" alt="image-39" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/FWMXQNS/image-40.png" alt="image-40" border="0"></a>

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "5000",
    categoryName: "office",
    img: "https://i.ibb.co/xCfqp1m/image-6.png",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qures",
    discount: 20,
    quantity: 1,
    price: "3000",
    categoryName: "office",
    img: "https://i.ibb.co/y88ptSs/image-7.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "office",
    img: "https://i.ibb.co/LSFmGqb/image-9.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "office",
    img: "https://i.ibb.co/1ZcTDxg/image-11.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "office",
    img: "https://i.ibb.co/kK9J87R/image-14.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "office",
    img: "https://i.ibb.co/8zSFFYz/image-15.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "office",
    img: "https://i.ibb.co/jJ3JWLh/image-16.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 30,
    quantity: 1,
    price: "1000",
    categoryName: "office",
    img: "https://i.ibb.co/TkFssSw/image-17.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "desk",
    img: "https://i.ibb.co/2W7yS5L/image-18.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 7,
    price: "1000",
    categoryName: "office",
    img: "https://i.ibb.co/vYX2gG0/image-19.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "office",
    img: "https://i.ibb.co/gFT98rc/image-20.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 50,
    quantity: 1,
    price: "1000",
    categoryName: "desk",
    img: "https://i.ibb.co/FsX65qy/image-21.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "office",
    img: "https://i.ibb.co/0yppkv9/image-22.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "office",
    img: "https://i.ibb.co/m691Nfx/image-23.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "office",
    img: "https://i.ibb.co/C9cLXpc/image-35.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 20,
    quantity: 1,
    price: "1000",
    categoryName: "decor",
    img: "https://i.ibb.co/4md3grD/image-8.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "decor",
    img: "https://i.ibb.co/1RXnx0w/image-25.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "decor",
    img: "https://i.ibb.co/4Vm762Q/image-26.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 70,
    quantity: 1,
    price: "1000",
    categoryName: "decor",
    img: "https://i.ibb.co/s2Bgpvt/image-27.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "decor",
    img: "https://i.ibb.co/KxBdJv4/image-28.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "decor",
    img: "https://i.ibb.co/th52sRv/image-29.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "decor",
    img: "https://i.ibb.co/sgtBFbL/image-33.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 70,
    quantity: 1,
    price: "1000",
    categoryName: "decor",
    img: "https://i.ibb.co/Jj2txqm/image-4.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "decor",
    img: "https://i.ibb.co/k6QgCFT/image-5.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "decor",
    img: "https://i.ibb.co/6HrBGCt/image-10.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "decor",
    img: "https://i.ibb.co/f00jBGD/image-12.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 60,
    quantity: 1,
    price: "1000",
    categoryName: "decor",
    img: "https://i.ibb.co/bsMQnQK/image-13.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "1000",
    categoryName: "decor",
    img: "https://i.ibb.co/6XhdtfC/image-24.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "4",
    categoryName: "office",
    img: "https://i.ibb.co/zxJkxgj/image-30.png",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    discount: 10,
    quantity: 1,
    price: "10",
    categoryName: "decor",
    img: "https://i.ibb.co/TcVJK9g/image-31.png",
  },
];
