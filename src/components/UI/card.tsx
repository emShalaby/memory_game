interface ICard {
  title?: string;
  imgSrc?: string;
}
export default function Card({ title, imgSrc }: ICard) {
  return (
    <div>
      <img src={imgSrc} alt={title + "-img"} />
      {title}
    </div>
  );
}
