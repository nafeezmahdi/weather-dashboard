import RedHeartIcon from "../../assets/heart-red.svg";

// eslint-disable-next-line react/prop-types
export default function Favorite({ onShow }) {
  return (
    <div
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      // onMouseEnter={() => onShow(true)}
      onClick={onShow}
      // onMouseLeave={() => onShow(false)}
    >
      <img src={RedHeartIcon} alt="" />
      <span>Favorite Locations</span>
    </div>
  );
}
