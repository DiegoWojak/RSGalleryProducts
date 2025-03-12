import "../utils/index.scss";
import type { Picture } from "../Pictures/furnituresPictures.jsx";
import LikeIcon from "./LikeIcon.jsx";

export default function ImageDetailView(props: { 
  picture: Picture;
  onClose: () => void;
  isLiked: boolean;
  onLike: () => void;
}) {
  const { picture, onClose, isLiked, onLike } = props;
  
  return (
    <view className="detail-view-overlay">
      <view className="detail-view-container">
        <view className="detail-header">
          <text className="detail-title">{picture.title || "Image Details"}</text>
          <view className="close-button" bindtap={onClose}> <text>X</text></view>
        </view>
        <image 
          className="detail-image"
          src={picture.src}
          style={{ aspectRatio: picture.width / picture.height }}
        />
        <view className="detail-info">
          {picture.description && <text className="detail-description">{picture.description}</text>}
          <LikeIcon isLiked={isLiked} onLike={onLike} />
        </view>
      </view>
    </view>
  );
}