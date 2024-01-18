export const HomeBackImage = ({ url }) => {
  return (
    <div className="h-screen overflow-hidden absolute -z-10">
      <img src={url} className="w-full bg-no-repeat bg-cover" alt=""></img>
    </div>
  );
};
