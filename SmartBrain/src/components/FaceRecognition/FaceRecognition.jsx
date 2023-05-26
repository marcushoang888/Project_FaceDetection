import "./FaceRecognition.css";
export default function FaceRecognition({ imageUrl, box }) {
  return (
    <div className=" flex justify-center">
      <div className="absolute mt-2">
        <img
          id="inputimage"
          src={imageUrl}
          alt=""
          className="w-[500px] h-auto"
        />
        <div
          className={`bounding-box `}
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
}
