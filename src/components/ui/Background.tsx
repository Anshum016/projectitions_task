import RegisterUI from "./RegisterUI";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden h-screen flex justify-end items-start">
      <div className="absolute inset-0">
        <img
          src="img/charater.png"
          alt="Background Image"
          className="absolute inset-0 w-[1050px] h-full object-cover blur-2xl rounded-full"
        />
        <img
          src="img/charater.png"
          alt="Background Image"
          className="absolute inset-0 w-[1016px] h-full object-cover"
        />
      </div>
      <div className="left-0">
        <div>
          <RegisterUI />
        </div>
      </div>
    </div>
  );
};

export default Background;
