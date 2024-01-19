export const ServiceCard = (props) => {
  return (
    <article
      className="
          relative w-96 h-80 
          bg-ServiceIva bg-cover bg-no-repeat rounded-lg shadow-md
          child:top-[277px]
          child-hover:top-28
          hover:scale-105 transition-all
          overflow-hidden
      "
    >
      <div className="bg-White65 p-2 h-4/6 w-full transition-all ease-linear absolute flex flex-col justify-between">
        <p>
          <strong className="text-customBrown text-2xl">{props.title}</strong>
        </p>
        <span className="text-base">{props.description}</span>
      </div>
    </article>
  );
};
