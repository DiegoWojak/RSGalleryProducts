import pic0 from "./0.png"; // Ensure this path is correct
import pic1 from "./1.png"; // This one work
import asd from "./asd.png";
import dsa from "./das.png";
import vr from "./vr.mp4";

export interface Picture {
    src: string;
    width: number;
    height: number;
    title?: string;
    description?: string;
  }

  export const furnituresPicturesSubArray: Picture[] = [
    {src:pic0, height:512, width:436},
    {src:pic1, height:511, width:437},
    {src:asd, height:1024, width:1030},
    {src:dsa, height:550, width:580},
    {src:vr, height:511, width:437},
  ];

  export const furnituresPictures: Picture[] = [
    ...furnituresPicturesSubArray,
  ...furnituresPicturesSubArray,
  ...furnituresPicturesSubArray,
  ...furnituresPicturesSubArray,
  ...furnituresPicturesSubArray,
  ];


  

