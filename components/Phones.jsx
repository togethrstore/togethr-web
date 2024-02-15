import React, { useState } from "react";
import Recorded from "../public/assets/images/form/recorded.png";
import Image from "next/image";
import ArrowDown from "../public/assets/images/arrow-down.png";
import { motion, AnimatePresence } from "framer-motion";
import EditIcon from "../public/assets/images/form/edit.png";
import Cart from "../public/assets/images/form/cart.png";
import Link from "next/link";
import AppleIphone15 from "../public/assets/images/phones/apple-iphone-15.png";
import Oneplus10r5g from "../public/assets/images/phones/oneplus-10r-5g.png";
import OneplusNord35g from "../public/assets/images/phones/oneplus-nord-3-5g.png";
import OneplusNordCe3Lite5g from "../public/assets/images/phones/oneplus-nord-ce-3-lite-5g.png";
import Realme11x5g from "../public/assets/images/phones/realme-11x-5g.png";
import Redmi125g from "../public/assets/images/phones/redmi-12-5g.png";
import Redmi13c5g from "../public/assets/images/phones/redmi-13c-5g.png";
import Redmi13c from "../public/assets/images/phones/redmi-13c.png";
import SamsungGalaxyA255g from "../public/assets/images/phones/samsung-galaxy-a25-5g.png";
import SamsungGalaxyF545g from "../public/assets/images/phones/samsung-galaxy-f54-5g.png";
import SamsungGalaxyM145g from "../public/assets/images/phones/samsung-galaxy-m14-5g.png";
import SamsungGalaxyS21Fe from "../public/assets/images/phones/samsung-galaxy-s21-fe.png";
import VivoV29e from "../public/assets/images/phones/vivo-v29e.png";
import Iqoo125g from "../public/assets/images/phones/iqoo-12-5g.png";
import IqooNeo7Pro from "../public/assets/images/phones/iqoo-neo-7-pro.png";
import IqooNeo7 from "../public/assets/images/phones/iqoo-neo-7.png";
import IqooZ7Pro from "../public/assets/images/phones/iqoo-z7-pro.png";
import MotorolaRazr40 from "../public/assets/images/phones/motorola-razr-40.png";
import Oneplus11 from "../public/assets/images/phones/oneplus-11.png";
import Oneplus11r5g from "../public/assets/images/phones/oneplus-11r-5g.png";
import PocoF45g from "../public/assets/images/phones/poco-f4-5g.png";
import PocoM65g from "../public/assets/images/phones/poco-m6-5g.png";
import PocoM6Pro5g from "../public/assets/images/phones/poco-m6-pro-5g.png";
import PocoX5 from "../public/assets/images/phones/poco-x5.png";
import PocoX65g from "../public/assets/images/phones/poco-x6-5g.png";
import RealmeC535g from "../public/assets/images/phones/realme-c53-5g.png";
import RealmeC675g from "../public/assets/images/phones/realme-c67-5g.png";
import RealmeGtNeo3 from "../public/assets/images/phones/realme-gt-neo-3.png";
import SamsungGalaxyA145g from "../public/assets/images/phones/samsung-galaxy-a14-5g.png";
import SamsungGalaxyA155g from "../public/assets/images/phones/samsung-galaxy-a15-5g.png";
import SamsungGalaxyA345g from "../public/assets/images/phones/samsung-galaxy-a34-5g.png";
import SamsungGalaxyF145g from "../public/assets/images/phones/samsung-galaxy-f14-5g.png";
import SamsungGalaxyM34 from "../public/assets/images/phones/samsung-galaxy-m34.png";
import SamsungGalaxyS235g from "../public/assets/images/phones/samsung-galaxy-s23-5g.png";
import SamsungGalaxyS23Fe from "../public/assets/images/phones/samsung-galaxy-s23-fe.png";
import SamsungGalaxyS23Ultra5g from "../public/assets/images/phones/samsung-galaxy-s23-5g.png";
import VivoT2x5g from "../public/assets/images/phones/vivo-t2x-5g.png";
import VivoV27 from "../public/assets/images/phones/vivo-v27.png";
import VivoY2005g from "../public/assets/images/phones/vivo-y200-5g.png";
import XiaomiRedmiNote13 from "../public/assets/images/phones/xiaomi-redmi-note-13.png";
import AppleIphone14Pro from "../public/assets/images/phones/apple-iphone-14-pro.png";
import AppleIphone15Plus from "../public/assets/images/phones/apple-iphone-15-plus.png";
import AppleIphone15ProMax from "../public/assets/images/phones/apple-iphone-15-pro-max.png";
import GooglePixel6a from "../public/assets/images/phones/google-pixel-6a.png";
import GooglePixel7 from "../public/assets/images/phones/google-pixel-7.png";
import GooglePixel7a from "../public/assets/images/phones/google-pixel-7a.png";
import MotorolaEdge40Neo from "../public/assets/images/phones/motorola-edge-40-neo.png";
import MotorolaEdge40 from "../public/assets/images/phones/motorola-edge-40.png";
import MotorolaG545g from "../public/assets/images/phones/motorola-g54-5g.png";
import NothingPhone1 from "../public/assets/images/phones/nothing-phone-(1).png";
import NothingPhone2 from "../public/assets/images/phones/nothing-phone-(2).png";
import OneplusOpen from "../public/assets/images/phones/oneplus-open.png";
import OppoReno105g from "../public/assets/images/phones/oppo-reno10-5g.png";
import OppoReno10Pro from "../public/assets/images/phones/oppo-reno10-pro.png";
import PocoF5 from "../public/assets/images/phones/poco-f5.png";
import PocoX5Pro5g from "../public/assets/images/phones/poco-x5-pro-5g.png";
import PocoX6Pro from "../public/assets/images/phones/poco-x6-pro.png";
import Realme11Pro5g from "../public/assets/images/phones/realme-11-pro-5g.png";
import Realme11ProPlus from "../public/assets/images/phones/realme-11-pro-plus.png";
import RedmiNote12Pro5g from "../public/assets/images/phones/redmi-note-12-pro-5g.png";
import RedmiNote13Pro from "../public/assets/images/phones/redmi-note-13-pro.png";
import SamsungGalaxyA545g from "../public/assets/images/phones/samsung-galaxy-a54-5g.png";
import SamsungGalaxyS22 from "../public/assets/images/phones/samsung-galaxy-s22.png";
import SamsungGalaxyZFlip3 from "../public/assets/images/phones/samsung-galaxy-z-flip3.png";
import VivoT2 from "../public/assets/images/phones/vivo-t2.png";
import VivoV27Pro from "../public/assets/images/phones/vivo-v27-pro.png";
import InfinixZero305g from "../public/assets/images/phones/infinix-zero-30-5g.png";
import OppoReno11Pro from "../public/assets/images/phones/oppo-reno11-pro.png";
import Realme115g from "../public/assets/images/phones/realme-11-5g.png";
import RealmeGt2Pro5g from "../public/assets/images/phones/realme-gt-2-pro-5g.png";
import RedmiNote125g from "../public/assets/images/phones/redmi-note-12-5g.png";
import RedmiNote13ProPlus from "../public/assets/images/phones/redmi-note-13-pro-plus.png";
import SamsungGalaxyF345g from "../public/assets/images/phones/samsung-galaxy-f34-5g.png";
import SamsungGalaxyS24Ultra from "../public/assets/images/phones/samsung-galaxy-s24-ultra.png";
// import VivoT2Pro5g from "../public/assets/images/phones/vivo-t2-pro-5g.png";
import VivoV29Pro from "../public/assets/images/phones/vivo-v29-pro.png";
import VivoV29 from "../public/assets/images/phones/vivo-v29.png";
import VivoX100Pro5g from "../public/assets/images/phones/vivo-x100-pro-5g.png";
import VivoX100 from "../public/assets/images/phones/vivo-x100.png";
import { a } from "react-spring";

const phones = [
  {
    Name: "Motorola g54 5G",
    Price: 13999.0,
    Batteryscore: 86.0,
    Displayscore: 75.0,
    Secondparameter: 80.5,
    Thirdparameter: 63.0,
    Fourthparameter: 38.0,
    image: MotorolaG545g,
    link: "https://fktr.in/eXNt4em",
  },
  {
    Name: "Redmi 12 5G",
    Price: 13499.0,
    Batteryscore: 85.0,
    Displayscore: 70.0,
    Secondparameter: 77.5,
    Thirdparameter: 54.0,
    Fourthparameter: 37.0,
    image: Redmi125g,
    link: "https://amzn.to/3HXJYC6",
  },
  {
    Name: "Xiaomi Redmi 13C 5G",
    Price: 12499.0,
    Batteryscore: 78.0,
    Displayscore: 62.0,
    Secondparameter: 70.0,
    Thirdparameter: 56.0,
    Fourthparameter: 33.0,
    image: XiaomiRedmiNote13,
    link: "https://amzn.to/49vAUQN",
  },
  {
    Name: "realme C67 5G",
    Price: 14499.0,
    Batteryscore: 86.0,
    Displayscore: 81.0,
    Secondparameter: 83.5,
    Thirdparameter: 58.0,
    Fourthparameter: 32.0,
    image: RealmeC675g,
    link: "https://fktr.in/xv1p5kB",
  },
  {
    Name: "POCO M6 5G",
    Price: 10999.0,
    Batteryscore: 78.0,
    Displayscore: 62.0,
    Secondparameter: 70.0,
    Thirdparameter: 56.0,
    Fourthparameter: 33.0,
    image: PocoM65g,
    link: "https://fktr.in/h01iNP3",
  },
  {
    Name: "realme C53",
    Price: 10999.0,
    Batteryscore: 79.0,
    Displayscore: 69.0,
    Secondparameter: 74.0,
    Thirdparameter: 57.0,
    Fourthparameter: 24.0,
    image: RealmeC535g,
    link: "https://fktr.in/92twsJg",
  },
  {
    Name: "Xiaomi Redmi 13C",
    Price: 8999.0,
    Batteryscore: 73.0,
    Displayscore: 59.0,
    Secondparameter: 66.0,
    Thirdparameter: 62.0,
    Fourthparameter: 21.0,
    link: "https://amzn.to/49n7PHc",
    image: XiaomiRedmiNote13,
  },
  {
    Name: "POCO X5",
    Price: 12999.0,
    Batteryscore: 70.0,
    Displayscore: 79.0,
    Secondparameter: 74.5,
    Thirdparameter: 61.0,
    Fourthparameter: 37.0,
    image: PocoX5,
    link: "https://fktr.in/CuyRl04",
  },
  {
    Name: "Samsung Galaxy A14 5G",
    Price: 16999.0,
    Batteryscore: 78.0,
    Displayscore: 64.0,
    Secondparameter: 71.0,
    Thirdparameter: 58.0,
    Fourthparameter: 34.0,
    image: SamsungGalaxyA145g,
    link: "https://amzn.to/3umJjar",
  },
  {
    Name: "POCO M6 Pro 5G",
    Price: 11999.0,
    Batteryscore: 85.0,
    Displayscore: 70.0,
    Secondparameter: 77.5,
    Thirdparameter: 54.0,
    Fourthparameter: 37.0,
    image: PocoM6Pro5g,
    link: "https://fktr.in/2zqipLq",
  },
  {
    Name: "Samsung galaxy m14 5G",
    Price: 11499.0,
    Batteryscore: 83.0,
    Displayscore: 69.0,
    Secondparameter: 76.0,
    Thirdparameter: 59.0,
    Fourthparameter: 36.0,
    image: SamsungGalaxyM145g,
    link: "https://amzn.to/4bt2fVD",
  },
  {
    Name: "Xiaomi Redmi Note 13",
    Price: 17940.0,
    Batteryscore: 86.0,
    Displayscore: 88.0,
    Secondparameter: 87.0,
    Thirdparameter: 66.0,
    Fourthparameter: 36.0,
    image: XiaomiRedmiNote13,
    link: "https://fktr.in/6c5sKJe",
  },
  {
    Name: "realme 11 pro 5g",
    Price: 23999.0,
    Batteryscore: 77.0,
    Displayscore: 84.0,
    Secondparameter: 80.5,
    Thirdparameter: 69.0,
    Fourthparameter: 42.0,
    image: Realme11Pro5g,
    link: "https://fktr.in/DWXKy8W",
  },
  {
    Name: "Poco x5 Pro 5g",
    Price: 25999.0,
    Batteryscore: 74.0,
    Displayscore: 85.0,
    Secondparameter: 79.5,
    Thirdparameter: 72.0,
    Fourthparameter: 46.0,
    image: PocoX5Pro5g,
    link: "https://fktr.in/OqN7cj4",
  },
  {
    Name: "POCO F4 5G 8GB",
    Price: 29999.0,
    Batteryscore: 65.0,
    Displayscore: 83.0,
    Secondparameter: 74.0,
    Thirdparameter: 77.0,
    Fourthparameter: 56.0,
    image: PocoF45g,
    link: "https://fktr.in/f80C7ay",
  },

  {
    Name: "Samsung Galaxy A34 8GB RAM",
    Price: 27499.0,
    Batteryscore: 83.0,
    Displayscore: 83.0,
    Secondparameter: 83.0,
    Thirdparameter: 67.0,
    Fourthparameter: 43.0,
    image: SamsungGalaxyA345g,
    link: "https://amzn.to/3uySZ1t",
  },
  {
    Name: "realme GT Neo 3 5G",
    Price: 25999.0,
    Batteryscore: 79.0,
    Displayscore: 81.0,
    Secondparameter: 80.0,
    Thirdparameter: 72.0,
    Fourthparameter: 56.0,
    image: RealmeGtNeo3,
    link: "https://amzn.to/48eiaEp",
  },
  {
    Name: "vivo V27",
    Price: 32999.0,
    Batteryscore: 80.0,
    Displayscore: 86.0,
    Secondparameter: 83.0,
    Thirdparameter: 74.0,
    Fourthparameter: 50.0,
    image: VivoV27,
    link: "https://fktr.in/ejhjqrl",
  },
  {
    Name: "POCO X6 5G",
    Price: 21999.0,
    Batteryscore: 69.0,
    Displayscore: 92.0,
    Secondparameter: 80.5,
    Thirdparameter: 66.0,
    Fourthparameter: 45.0,
    image: PocoX65g,
    link: "https://fktr.in/74VhD1S",
  },
  {
    Name: "Motorola Edge 40 Neo",
    Price: 24999.0,
    Batteryscore: 76.0,
    Displayscore: 89.0,
    Secondparameter: 82.5,
    Thirdparameter: 72.0,
    Fourthparameter: 42.0,
    image: MotorolaEdge40Neo,
    link: "https://fktr.in/gnG3c87",
  },
  {
    Name: "Infinix Zero 30 5G",
    Price: 21999.0,
    Batteryscore: 67.0,
    Displayscore: 81.0,
    Secondparameter: 74.0,
    Thirdparameter: 77.0,
    Fourthparameter: 51.0,
    image: InfinixZero305g,
    link: "https://fktr.in/ahS8Gpm",
  },
  {
    Name: "realme 11 5G",
    Price: 19999.0,
    Batteryscore: 84.0,
    Displayscore: 74.0,
    Secondparameter: 79.0,
    Thirdparameter: 54.0,
    Fourthparameter: 34.0,
    image: Realme115g,
    link: "https://fktr.in/20WY54W",
  },

  {
    Name: "Redmi Note 12 Pro 5G",
    Price: 23999.0,
    Batteryscore: 74.0,
    Displayscore: 83.0,
    Secondparameter: 78.5,
    Thirdparameter: 72.0,
    Fourthparameter: 41.0, //no image
    link: "https://fktr.in/xHiHcBx",
  },
  {
    Name: "iQOO Neo 7",
    Price: 24999.0,
    Batteryscore: 96.0,
    Displayscore: 85.0,
    Secondparameter: 90.5,
    Thirdparameter: 70.0,
    Fourthparameter: 63.0,
    image: IqooNeo7,
    link: "https://amzn.to/3UB7lJc",
  },
  {
    Name: "Samsung Galaxy A15 5G",
    Price: 19499.0,
    Batteryscore: 82.0,
    Displayscore: 76.0,
    Secondparameter: 79.0,
    Thirdparameter: 57.0,
    Fourthparameter: 36.0,
    image: SamsungGalaxyA155g,
    link: "https://amzn.to/3OD1G1q",
  },
  {
    Name: "Redmi note 12 5g",
    Price: 16999.0,
    Batteryscore: 70.0,
    Displayscore: 78.0,
    Secondparameter: 74.0,
    Thirdparameter: 60.0,
    Fourthparameter: 35.0,
    image: Redmi125g,
    link: "https://fktr.in/6KSaaV7",
  },
  {
    Name: "OnePlus Nord CE 3 lite 5G",
    Price: 19999.0,
    Batteryscore: 90.0,
    Displayscore: 75.0,
    Secondparameter: 82.5,
    Thirdparameter: 62.0,
    Fourthparameter: 40.0,
    image: OneplusNordCe3Lite5g,
    link: "https://amzn.to/3SV9xKq",
  },
  {
    Name: "Samsung Galaxy M34",
    Price: 17499.0,
    Batteryscore: 88.0,
    Displayscore: 83.0,
    Secondparameter: 85.5,
    Thirdparameter: 65.0,
    Fourthparameter: 39.0,
    image: SamsungGalaxyM34,
    link: "https://amzn.to/3T4SjdT",
  },
  {
    Name: "Xiaomi Redmi Note 13 Pro Plus",
    Price: 31999.0,
    Batteryscore: 96.0,
    Displayscore: 92.0,
    Secondparameter: 94.0,
    Thirdparameter: 68.0,
    Fourthparameter: 52.0,
    image: XiaomiRedmiNote13,
    link: "https://fktr.in/CmCVu98",
  },
  {
    Name: "Xiaomi Redmi Note 13 Pro",
    Price: 25999.0,
    Batteryscore: 97.0,
    Displayscore: 92.0,
    Secondparameter: 94.5,
    Thirdparameter: 68.0,
    Fourthparameter: 46.0,
    image: XiaomiRedmiNote13,
    link: "https://fktr.in/FrxuwS9",
  },
  {
    Name: "POCO X6 Pro",
    Price: 26999.0,
    Batteryscore: 73.0,
    Displayscore: 92.0,
    Secondparameter: 82.5,
    Thirdparameter: 74.0,
    Fourthparameter: 82.0,
    image: PocoX6Pro,
    link: "https://fktr.in/gTxaNS2",
  },
  {
    Name: "Samsung Galaxy S21 FE",
    Price: 31999.0,
    Batteryscore: 60.0,
    Displayscore: 80.0,
    Secondparameter: 70.0,
    Thirdparameter: 74.0,
    Fourthparameter: 56.0,
    image: SamsungGalaxyS21Fe,
    link: "https://amzn.to/48aObNv",
  },
  {
    Name: "Google Pixel 6A",
    Price: 43999.0,
    Batteryscore: 69.0,
    Displayscore: 68.0,
    Secondparameter: 68.5,
    Thirdparameter: 71.0,
    Fourthparameter: 63.0,
    image: GooglePixel6a,
    link: "https://fktr.in/Fq5XVeo",
  },
  {
    Name: "Nothing Phone 1",
    Price: 29999.0,
    Batteryscore: 74.0,
    Displayscore: 80.0,
    Secondparameter: 77.0,
    Thirdparameter: 70.0,
    Fourthparameter: 47.0,
    image: NothingPhone1,
    link: "https://fktr.in/DCOStoV",
  },
  {
    Name: "Motorola Edge 40",
    Price: 26999.0,
    Batteryscore: 74.0,
    Displayscore: 87.0,
    Secondparameter: 80.5,
    Thirdparameter: 74.0,
    Fourthparameter: 57.0,
    image: MotorolaEdge40,
    link: "https://fktr.in/mpo1cJ7",
  },
  {
    Name: "realme GT 2 Pro 5G",
    Price: 29999.0,
    Batteryscore: 81.0,
    Displayscore: 87.0,
    Secondparameter: 84.0,
    Thirdparameter: 72.0,
    Fourthparameter: 68.0,
    image: RealmeGt2Pro5g,
    link: "https://fktr.in/PsHxWN2",
  },
  {
    Name: "realme 11 Pro Plus",
    Price: 27999.0,
    Batteryscore: 80.0,
    Displayscore: 84.0,
    Secondparameter: 82.0,
    Thirdparameter: 77.0,
    Fourthparameter: 45.0,
    image: Realme11ProPlus,
    link: "https://fktr.in/S38DBuh",
  },
  {
    Name: "POCO F5 256GB",
    Price: 29999.0,
    Batteryscore: 78.0,
    Displayscore: 86.0,
    Secondparameter: 82.0,
    Thirdparameter: 70.0,
    Fourthparameter: 72.0,
    image: PocoF5,
    link: "https://fktr.in/RkuPhYE",
  },
  {
    Name: "Samsung Galaxy A25 5G",
    Price: 26999.0,
    Batteryscore: 85.0,
    Displayscore: 85.0,
    Secondparameter: 85.0,
    Thirdparameter: 64.0,
    Fourthparameter: 39.0,
    image: SamsungGalaxyA255g,
    link: "https://amzn.to/3uBvQeI",
  },
  {
    Name: "OnePlus Nord 3 5G",
    Price: 29999.0,
    Batteryscore: 79.0,
    Displayscore: 91.0,
    Secondparameter: 85.0,
    Thirdparameter: 75.0,
    Fourthparameter: 60.0,
    image: OneplusNord35g,
    link: "https://amzn.to/3SU2uS7",
  },
  {
    Name: "vivo V29",
    Price: 32999.0,
    Batteryscore: 71.0,
    Displayscore: 91.0,
    Secondparameter: 81.0,
    Thirdparameter: 70.0,
    Fourthparameter: 46.0,
    image: VivoV29,
    link: "https://fktr.in/xRoh51O",
  },
  {
    Name: "OPPO Reno10 5G",
    Price: 32999.0,
    Batteryscore: 73.0,
    Displayscore: 84.0,
    Secondparameter: 78.5,
    Thirdparameter: 74.0,
    Fourthparameter: 45.0,
    image: OppoReno105g,
    link: "https://fktr.in/eFu2bpm",
  },
  {
    Name: "OnePlus 10R 5G",
    Price: 34999.0,
    Batteryscore: 92.0,
    Displayscore: 83.0,
    Secondparameter: 87.5,
    Thirdparameter: 68.0,
    Fourthparameter: 57.0,
    image: Oneplus10r5g,
    link: "https://amzn.to/4bzbpzF",
  },
  {
    Name: "vivo V27 Pro 256GB",
    Price: 39990.0,
    Batteryscore: 78.0,
    Displayscore: 81.0,
    Secondparameter: 79.5,
    Thirdparameter: 75.0,
    Fourthparameter: 63.0,
    image: VivoV27Pro,
    link: "https://fktr.in/64CRvNb",
  },
  {
    Name: "iQOO Neo 7 Pro",
    Price: 30999.0,
    Batteryscore: 96.0,
    Displayscore: 87.0,
    Secondparameter: 91.5,
    Thirdparameter: 78.0,
    Fourthparameter: 75.0,
    image: IqooNeo7Pro,
    link: "https://amzn.to/3unglXY",
  },
  {
    Name: "OnePlus 11R 5G",
    Price: 39999.0,
    Batteryscore: 96.0,
    Displayscore: 90.0,
    Secondparameter: 93.0,
    Thirdparameter: 73.0,
    Fourthparameter: 77.0,
    image: Oneplus11r5g,
    link: "https://amzn.to/49xsica",
  },
  {
    Name: "Nothing Phone (2)",
    Price: 39999.0,
    Batteryscore: 81.0,
    Displayscore: 86.0,
    Secondparameter: 83.5,
    Thirdparameter: 72.0,
    Fourthparameter: 76.0,
    image: NothingPhone2,
    link: "https://fktr.in/zgvduuU",
  },
  {
    Name: "OPPO Reno11 Pro",
    Price: 39999.0,
    Batteryscore: 92.0,
    Displayscore: 87.0,
    Secondparameter: 89.5,
    Thirdparameter: 76.0,
    Fourthparameter: 64.0,
    image: OppoReno11Pro,
    link: "https://fktr.in/9DCTNBh",
  },
  {
    Name: "Samsung Galaxy S22",
    Price: 39999.0,
    Batteryscore: 77.0,
    Displayscore: 82.0,
    Secondparameter: 79.5,
    Thirdparameter: 79.0,
    Fourthparameter: 70.0,
    image: SamsungGalaxyS22,
    link: "https://fktr.in/whc3FSn",
  },
  {
    Name: "vivo V29 Pro",
    Price: 39999.0,
    Batteryscore: 72.0,
    Displayscore: 91.0,
    Secondparameter: 81.5,
    Thirdparameter: 76.0,
    Fourthparameter: 59.0,
    image: VivoV29Pro,
    link: "https://fktr.in/t5N5b0H",
  },
  {
    Name: "Google Pixel 7a",
    Price: 39999.0,
    Batteryscore: 65.0,
    Displayscore: 81.0,
    Secondparameter: 73.0,
    Thirdparameter: 78.0,
    Fourthparameter: 62.0,
    image: GooglePixel7a,
    link: "https://fktr.in/7Wncai7",
  },
  {
    Name: "Google Pixel 7",
    Price: 46999.0,
    Batteryscore: 64.0,
    Displayscore: 77.0,
    Secondparameter: 70.5,
    Thirdparameter: 78.0,
    Fourthparameter: 62.0,
    image: GooglePixel7,
    link: "https://fktr.in/Ril8c2h",
  },
  {
    Name: "Oppo Reno 10 Pro",
    Price: 37999.0,
    Batteryscore: 71.0,
    Displayscore: 84.0,
    Secondparameter: 77.5,
    Thirdparameter: 78.0,
    Fourthparameter: 46.0,
    image: OppoReno10Pro,
    link: "https://fktr.in/ib4xJUq",
  },
  {
    Name: "Samsung Galaxy A54 5G",
    Price: 35499.0,
    Batteryscore: 76.0,
    Displayscore: 86.0,
    Secondparameter: 81.0,
    Thirdparameter: 71.0,
    Fourthparameter: 47.0,
    image: SamsungGalaxyA545g,
    link: "https://fktr.in/5edBh0L",
  },
  {
    Name: "Samsung Galaxy Z Flip 3",
    Price: 44999.0,
    Batteryscore: 49.0,
    Displayscore: 81.0,
    Secondparameter: 65.0,
    Thirdparameter: 72.0,
    Fourthparameter: 61.0,
    image: SamsungGalaxyZFlip3,
    link: "https://fktr.in/LDnq5RS",
  },
  {
    Name: "Motorola Razr 40",
    Price: 44999.0,
    Batteryscore: 66.0,
    Displayscore: 88.0,
    Secondparameter: 77.0,
    Thirdparameter: 72.0,
    Fourthparameter: 48.0,
    image: MotorolaRazr40,
    link: "https://amzn.to/49sIc7R",
  },
  {
    Name: "Samsung Galaxy S24 Ultra",
    Price: 129999.0,
    Batteryscore: 96.0,
    Displayscore: 97.0,
    Secondparameter: 96.5,
    Thirdparameter: 86.0,
    Fourthparameter: 99.0,
    image: SamsungGalaxyS24Ultra,
    link: "https://fktr.in/KTWw4uG",
  },
  {
    Name: "vivo X100 Pro 5G",
    Price: 89999.0,
    Batteryscore: 79.0,
    Displayscore: 94.0,
    Secondparameter: 86.5,
    Thirdparameter: 92.0,
    Fourthparameter: 98.0,
    image: VivoX100Pro5g,
    link: "https://fktr.in/axPNe7b",
  },
  {
    Name: "iQOO 12 5G",
    Price: 52999.0,
    Batteryscore: 80.0,
    Displayscore: 94.0,
    Secondparameter: 87.0,
    Thirdparameter: 84.0,
    Fourthparameter: 97.0,
    image: Iqoo125g,
    link: "https://amzn.to/3STZjdb",
  },
  {
    Name: "vivo X100",
    Price: 63999.0,
    Batteryscore: 96.0,
    Displayscore: 93.0,
    Secondparameter: 94.5,
    Thirdparameter: 89.0,
    Fourthparameter: 98.0,
    image: VivoX100,
    link: "https://fktr.in/2NXkdov",
  },
  {
    Name: "Samsung Galaxy S23 Ultra 5G",
    Price: 124999.0,
    Batteryscore: 87.0,
    Displayscore: 93.0,
    Secondparameter: 90.0,
    Thirdparameter: 90.0,
    Fourthparameter: 91.0,
    image: SamsungGalaxyS23Ultra5g,
    link: "https://amzn.to/42FPPWf",
  },
  {
    Name: "Samsung Galaxy S23 5G",
    Price: 69999.0,
    Batteryscore: 73.0,
    Displayscore: 89.0,
    Secondparameter: 81.0,
    Thirdparameter: 83.0,
    Fourthparameter: 86.0,
    image: SamsungGalaxyS235g,
    link: "https://amzn.to/4bwHWGJ",
  },
  {
    Name: "Apple iPhone 15 Pro Max",
    Price: 156900.0,
    Batteryscore: 93.0,
    Displayscore: 93.0,
    Secondparameter: 93.0,
    Thirdparameter: 91.0,
    Fourthparameter: 98.0,
    image: AppleIphone15ProMax,
    link: "https://amzn.to/42Dn8JN",
  },
  {
    Name: "OnePlus 11",
    Price: 56999.0,
    Batteryscore: 77.0,
    Displayscore: 90.0,
    Secondparameter: 83.5,
    Thirdparameter: 79.0,
    Fourthparameter: 87.0,
    image: Oneplus11,
    link: "https://amzn.to/42FQwyP",
  },
  {
    Name: "Apple iPhone 15",
    Price: 84900.0,
    Batteryscore: 78.0,
    Displayscore: 78.0,
    Secondparameter: 78.0,
    Thirdparameter: 82.0,
    Fourthparameter: 94.0,
    image: AppleIphone15,
    link: "https://amzn.to/48cmi7N",
  },
  {
    Name: "Apple iPhone 14 Pro",
    Price: 119900.0,
    Batteryscore: 74.0,
    Displayscore: 89.0,
    Secondparameter: 81.5,
    Thirdparameter: 87.0,
    Fourthparameter: 94.0,
    image: AppleIphone14Pro,
    link: "https://fktr.in/Znh608E",
  },
  {
    Name: "Samsung Galaxy S23 FE",
    Price: 54999.0,
    Batteryscore: 58.0,
    Displayscore: 88.0,
    Secondparameter: 73.0,
    Thirdparameter: 82.0,
    Fourthparameter: 71.0,
    image: SamsungGalaxyS23Fe,
    link: "https://amzn.to/3HU400e",
  },
  {
    Name: "Apple iPhone 15 Plus",
    Price: 92990.0,
    Batteryscore: 89.0,
    Displayscore: 78.0,
    Secondparameter: 83.5,
    Thirdparameter: 82.0,
    Fourthparameter: 97.0,
    image: AppleIphone15Plus,
    link: "https://amzn.to/3SVqu7t",
  },
  {
    Name: "OnePlus Open",
    Price: 139999.0,
    Batteryscore: 77.0,
    Displayscore: 92.0,
    Secondparameter: 84.5,
    Thirdparameter: 83.0,
    Fourthparameter: 93.0,
    image: OneplusOpen,
    link: "https://amzn.to/3I2Hz9b",
  },
];

export default function Filtering({
  tabOneResponse,
  tabTwoResponse,
  tabThreeResponse,
  tabFourResponse,
  tabFiveResponse,
  tabSixResponse,
  setActiveTab,
}) {
  const filteredByPrice = phones.filter((phone) => {
    const lowerBound = tabTwoResponse * 0.8; // 20% lower bound
    const upperBound = tabTwoResponse * 1.15; // 15% upper bound
    return phone.Price >= lowerBound && phone.Price <= upperBound;
  });

  let batteryMultiplier;
  switch (tabThreeResponse) {
    case "Under 5 hours":
      batteryMultiplier = 0.5;
      break;
    case "5 to 7 hours":
      batteryMultiplier = 0.75;
      break;
    case "More than 7 hours":
      batteryMultiplier = 1;
      break;
    default:
      batteryMultiplier = 1;
      break;
  }

  const filteredByBattery = filteredByPrice.map((phone) => {
    return {
      ...phone,
      FirstScore: phone.Secondparameter * batteryMultiplier,
    };
  });

  const sortedFilteredPhones = filteredByBattery.sort(
    (a, b) => b.FirstScore - a.FirstScore
  );

  // console.log(sortedFilteredPhones);

  let cameraFilterMultiplier;
  switch (tabFourResponse) {
    case "I don't prioritize the phone's camera — I rarely use it":
      cameraFilterMultiplier = 0.5;
      break;
    case "I use the phone's camera to capture personal moments":
      cameraFilterMultiplier = 0.75;
      break;
    case "I extensively use the phone's camera for professional purposes":
      cameraFilterMultiplier = 1;
      break;
    default:
      cameraFilterMultiplier = 1;
      break;
  }

  const filteredByCamera = sortedFilteredPhones.map((phone) => {
    return {
      ...phone,
      SecondScore: phone.Thirdparameter * cameraFilterMultiplier,
    };
  });

  const semiFinalFilteredPhones = filteredByCamera.sort(
    (a, b) => b.SecondScore - a.SecondScore
  );

  // console.log(semiFinalFilteredPhones);

  let performanceFilterMultiplier;

  switch (tabFiveResponse) {
    case "Basic — Call, text, email, web surfing":
      performanceFilterMultiplier = 0.5;
      break;
    case "Balanced — Casual gaming, occasional photos/videos, multitasking":
      performanceFilterMultiplier = 0.75;
      break;
    case "Intensive — High graphics gaming, professional content creation":
      performanceFilterMultiplier = 1;
      break;
    default:
      performanceFilterMultiplier = 1;
      break;
  }

  const filteredByPerformance = semiFinalFilteredPhones.map((phone) => {
    return {
      ...phone,
      ThirdScore: phone.Fourthparameter * performanceFilterMultiplier,
    };
  });

  const finalFilteredPhones = filteredByPerformance.sort(
    (a, b) => b.ThirdScore - a.ThirdScore
  );

  // console.log(finalFilteredPhones);
  const sortedByPrice = finalFilteredPhones
    .slice(0, 3) // Take only the top 3 recommendations
    .sort((a, b) => b.Price - a.Price); // Sort by price

  const [openIndex, setOpenIndex] = useState(null);

  const toggleContentVisibility = () => {
    setOpenIndex(openIndex === null ? true : null);
  };

  const responseStates = [
    {
      index: 0,
      response: tabOneResponse,
      text: "1. Choose a category for expert guidance",
    },
    {
      index: 1,
      response: tabTwoResponse,
      text: "2. How much are you willing to spend?",
    },
    {
      index: 2,
      response: tabThreeResponse,
      text: "3. How many hours do you use your phone daily?",
    },
    {
      index: 3,
      response: tabFourResponse,
      text: "4. How do you use your phone’s camera?",
    },
    {
      index: 4,
      response: tabFiveResponse,
      text: "5. Choose the closest description of your phone’s usage:",
    },
    { index: 5, response: tabSixResponse },
  ];

  const ReloadPage = () => {
    // Reload the page
    window.location.reload();
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col gap-y-6 px-6 lg:px-0 max-w-4xl xl:max-w-7xl py-6">
          <button onClick={toggleContentVisibility}>
            <div className="w-full flex justify-between items-center rounded-2xl">
              <div className="flex items-center gap-x-2">
                <div className="w-6 inline-flex">
                  <Image src={Recorded} alt="" />
                </div>
                <div className="text-xl lg:text-2xl bold text-black">
                  Your responses{" "}
                </div>
              </div>
              <div className="w-6 inline-flex">
                <motion.div
                  initial={false}
                  animate={{
                    rotate: openIndex ? 180 : 0,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image src={ArrowDown} alt="" priority={true} />
                </motion.div>
              </div>
            </div>
          </button>
          <div>
            <AnimatePresence>
              {openIndex !== null && (
                <motion.div
                  key={openIndex}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-y-2"
                >
                  {responseStates.map((state, index) => (
                    <div key={index}>
                      <div className="medium text-base mb-2 text-black lg:text-lg">
                        {state.text}
                      </div>
                      {state.response && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          // onClick={() => setActiveTab(0)}
                          // onClick={ReloadPage}
                        >
                          <div className="w-max max-w-[330px] sm:max-w-sm md:max-w-none lg:max-w-none flex items-center gap-x-2 text-[#51636F] px-4 py-2 text-base border-2 border-[#51636F] rounded-2xl bold">
                            <div>{state.response}</div>
                            {/* <div className="w-4 lg:w-5 inline-flex">
                              <Image className="" src={EditIcon} alt="" />
                            </div> */}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="w-full flex items-start justify-start">
            <div className="flex items-center gap-x-2">
              <div className="w-6 inline-flex">
                <Image src={Cart} alt="" />
              </div>
              <div className="text-xl lg:text-2xl bold text-black">
                We found these products for you:{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 items-center pb-10 lg:pb-16 lg:flex-row lg:gap-x-6">
          {sortedByPrice.map((phone, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={phone.link}
            >
              <div className="w-max cursor-pointer p-4 lg:p-6 flex flex-col border-[3px] border-[#625DF533] rounded-2xl gap-y-3">
                <div className="w-full flex justify-center">
                  <div className="w-40 lg:w-40">
                    <Image src={phone.image} alt="" />
                  </div>
                </div>
                <div className="text-base lg:text-xl bold text-black">
                  {phone.Name}
                </div>
                <div className="flex justify-between">
                  <div className="px-2 lg:px-4 flex flex-col items-center gap-y-2">
                    <div className="text-sm text-[#51636F] medium text-center max-w-[5rem]">
                      Battery
                    </div>
                    <div className="text-[#625DF5] text-lg lg:text-xl bold">
                      <span>{phone.Batteryscore}</span>/100
                    </div>
                  </div>
                  <div className="px-2 lg:px-4 flex flex-col items-center gap-y-2 border-l-2 border-r-2 border-[#625DF533]">
                    <div className="text-sm text-[#51636F] medium text-center max-w-[5rem]">
                      Performance
                    </div>
                    <div className="text-[#625DF5] text-lg lg:text-xl bold">
                      <span>{phone.Thirdparameter}</span>/100
                    </div>
                  </div>
                  <div className="px-2 lg:px-4 flex flex-col items-center gap-y-2">
                    <div className="text-sm text-[#51636F] medium text-center max-w-[5rem]">
                      Camera
                    </div>
                    <div className="text-[#625DF5] text-lg lg:text-xl bold">
                      <span>{phone.Fourthparameter}</span>/100
                    </div>
                  </div>
                </div>
                {/* <div>
                <div className="text-base text-[#51636F] medium">
                  Phone price
                </div>
                <div className="text-lg lg:text-xl bold text-black">
                  ₹ {phone.Price}
                </div>
              </div> */}
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-4 justify-center items-center bg-[#625DF50D] py-8 lg:py-20">
        <div className="text-3xl lg:text-4xl bold text-black">
          Talk to an Expert{" "}
        </div>
        <div className="text-base lg:text-xl medium text-[#51636F] text-center">
          Passionate people who are happy to be your shopping buddies for your
          next big purchase{" "}
        </div>
        <a
          rel="noopener noreferrer"
          href="https://rebrand.ly/v4dwlzd"
          className="w-max mt-4 lg:mt-10 medium hero-button py-3 px-12 text-white text-lg"
        >
          Talk to an Expert{" "}
        </a>
      </div>
    </>
  );
}
