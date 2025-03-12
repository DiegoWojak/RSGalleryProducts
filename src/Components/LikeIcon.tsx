import { useState } from "@lynx-js/react";
import redHeart from "../Pictures/redHeart.png";
import whiteHeart from "../Pictures/whiteHeart.png";
import "../utils/index.scss";

export default function LikeIcon(props: { 
  isLiked: boolean;
  onLike: () => void;
}) {
  const {isLiked, onLike} = props;
  const handleTap = () => {
    onLike();
  };
  return (
    <view className="like-icon" bindtap={handleTap}>
      {isLiked && <view className="circle" />}
      {isLiked && <view className="circle circleAfter" />}
      <image src={isLiked ? redHeart : whiteHeart} className="heart-love" />
    </view>
  );
}