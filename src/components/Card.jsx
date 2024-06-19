export const Card = ({ image, title }) => {
  return (
    //Al posicionar el mouse sobre cada resultado la caja debe reducir su opacidad y mostrar borde blanco.
    <div className="flex flex-col justify-between border border-black w-44 cursor-pointer  hover:border-white">
      <div className="w-44 h-60 mb-5 object-contain">
        <img src={image} alt={title} className="hover:opacity-40" />
      </div>
      <p className="text-start">{title}</p>
    </div>
  );
};
