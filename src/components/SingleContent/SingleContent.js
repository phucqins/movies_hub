import "./SingleContent.css";
import { img_300, unavailable } from "../../config/config";
import { Badge } from "@mui/material";
import TransitionModal from "../ContentModal/ContentModal";

export default function SingleContent({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
})  {
  console.log(media_type, id)
  return (
    <TransitionModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      ></img>
      <b className={title}>{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movies"}
        <span className="subTitle">{date}</span>
      </span>
    </TransitionModal>
  );
};


