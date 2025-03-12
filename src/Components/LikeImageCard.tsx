import "../utils/index.scss";
import type { Picture } from "../Pictures/furnituresPictures.jsx";
import LikeIcon from "./LikeIcon.jsx";
import { useState } from "@lynx-js/react";

import ImageDetailView from "./ImageDetailView.jsx";

export default function LikeImageCard(props: { picture: Picture }) {
  const { picture } = props;
  const [ isDetailViewOpen, setIsDetailViewOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleCardTap = () => {
    setIsDetailViewOpen(true);
  };

  const closeDetailView = () => {
    setIsDetailViewOpen(false);
  };

  const onTap = () =>{
    handleCardTap();
  }

  const handleLike = () => {
    setIsLiked(true);
  };

  return (
    <>
      <view className="picture-wrapper">
        <image 
          style={{ width: "100%", aspectRatio: picture.width / picture.height }}
          src={picture.src} bindtap={onTap}
        />
        <LikeIcon isLiked={isLiked} onLike={handleLike} />
      </view>
      {isDetailViewOpen && (
        <ImageDetailView 
        picture={picture} 
        onClose={closeDetailView}
        isLiked={isLiked}
        onLike={handleLike}
         />
      )}
    </>

    
  );
}