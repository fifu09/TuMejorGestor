export const TimeLineItem = (props) => {
  return (
    <li className="ms-4 flex-1 mb-4">
      <div className="absolute w-3 h-3 bg-customBrown rounded-full mt-2.5 -start-1.5 border border-black"></div>
      <time className="text-base font-normal leading-none text-gray-600">
        {props.date}
      </time>
      <h3 className="text-xl font-bold text-customBrown">{props.title}</h3>
      <p className="text-base font-normal text-black">{props.text}</p>
    </li>
  );
};