export const HomeBackImage = ({ url }) => {
  return (
    <div className="h-screen absolute -z-10 backdrop-filter backdrop-blur-md">
      <img src={url} className="w-full bg-no-repeat bg-cover overflow-hidden" alt=""></img>
    </div>
  );
};
