export const Card = ({ imagen, titulo }) => {
  return (
    //Al posicionar el mouse sobre cada resultado la caja debe reducir su opacidad y mostrar borde blanco.
    <div className="flex flex-col justify-between border border-black w-44 cursor-pointer  hover:border-white">
      <div className="w-44 h-60 mb-5 object-contain">
        <img src={imagen} alt={titulo} className="hover:opacity-40" />
      </div>
      <p className="text-start">{titulo}</p>
    </div>
  );
};
