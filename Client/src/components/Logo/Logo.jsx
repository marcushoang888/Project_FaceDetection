import Tilt from "react-parallax-tilt";
import  "./Logo.css"
export default function Logo() {
  return (
    <div className="m-4 mt-0">
      <Tilt className="Tilt w-[130px] bg-black shadow-xl  rounded-md">
          <img src="logo.png"  alt="logo" />
      </Tilt>
    </div>
  );
}

