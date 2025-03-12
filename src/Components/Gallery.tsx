import type { Picture } from "../Pictures/furnituresPictures.tsx";
import type { ScrollEvent, NodesRef } from "@lynx-js/types";
import { MainThread} from "@lynx-js/types"

import { useMainThreadRef, useEffect, useRef } from "@lynx-js/react";

import "../utils/index.scss";
import { calculateEstimatedSize } from "../utils/utils.jsx";

import LikeImageCard from "./LikeImageCard.jsx";
import { adjustScrollbarMTS, NiceScrollbarMTS } from "./NiceScrollBar.jsx"

export const Gallery = (props: { pictureData: Picture[] }) => {
  const { pictureData } = props;
  const scrollbarMTSRef = useMainThreadRef<MainThread.Element>(null);
  const galleryRef = useRef<NodesRef>(null);

  const onScrollMTS = (event: ScrollEvent) => {
    "main thread";
    adjustScrollbarMTS(event.detail.scrollTop, event.detail.scrollHeight, scrollbarMTSRef);
  };

  return (
    <view className="gallery-wrapper">
      <NiceScrollbarMTS main-thread:ref={scrollbarMTSRef} />
      <list
        className="list"
        list-type="waterfall"
        column-count={2}
        scroll-orientation="vertical"
        custom-list-name="list-container"
        main-thread:bindscroll={onScrollMTS}
      >
        {pictureData.map((picture: Picture, index: number) => (
          <list-item
            estimated-main-axis-size-px={calculateEstimatedSize(picture.width, picture.height)}
            item-key={"" + index}
            key={"" + index}
          >
            <LikeImageCard picture={picture} />
          </list-item>
        ))}
      </list>
    </view>
  );
};

export default Gallery;