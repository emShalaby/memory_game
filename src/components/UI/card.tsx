interface ICard {
  title?: string;
  imgSrc?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export default function Card({ title, imgSrc, onClick }: ICard) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-solid text-center hover:bg-gray-200"
    >
      <img src={imgSrc} alt={title + "-img"} width={"200px"} />
      {title}
    </button>
  );
}
