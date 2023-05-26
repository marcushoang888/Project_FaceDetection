import "./ImageLinkForm.css";
export default function ImageLinkForm({ inputValue, onPro }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p className="text-xl">
        {
          "This Magic Brain will detect faces in your pictures. Give it a chance"
        }
      </p>
      <div className=" form flex flex-col  p-5 w-[60%] justify-center items-center gap-4 shadow-xl shadow-indigo-200 rounded-2xl">
        <input
          className="text-2xl p-2 w-full  rounded-2xl  border-black border-2"
          type="text"
          ref={inputValue}
        />
        <button
          onClick={onPro}
          className=" bg-purple-500/80 text-white border  w-[100px] px-3 py-2 rounded-xl active:scale-110 transition-all hover:bg-purple-500/100 "
        >
          Detect
        </button>
      </div>
    </div>
  );
}
