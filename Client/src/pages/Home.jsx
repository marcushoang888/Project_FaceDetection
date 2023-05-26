import ParticlesBg from "particles-bg";
import { useContext, useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Logo from "../components/Logo/Logo";
import Rank from "../components/Rank/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

const returnClarifaiRequestOptions = (imageUrl) => {
  const PAT = "29fab58fd3324025bf31a78558628748";
  const USER_ID = "marcushoang";
  const APP_ID = "test";
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  return requestOptions;
};

export default function Home() {
  const inputValue = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});

  const onPro = () => {
    setImageUrl(inputValue.current.value);
    fetch(
      "https://api.clarifai.com/v2/models/" +
        "face-detection" +
        "/versions/" +
        "6dc7e46bc9124c5c8824be4822abe105" +
        "/outputs",
      returnClarifaiRequestOptions(inputValue.current.value)
    )
      .then((response) => response.json())
      .then((data) => calculateFaceLocation(data))
      .catch((error) => console.log(error));
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    setBox({
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    });
  };

  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/sign_in");
    }
  }, [auth]);

  return (
    <>
      {auth && (
        <div>
          <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={200} />
          <div className="flex justify-between pt-3">
            <Logo />
            <Navigation />
          </div>
          <Rank />
          <ImageLinkForm inputValue={inputValue} onPro={onPro} />
          <FaceRecognition imageUrl={imageUrl} box={box} />
        </div>
      )}
    </>
  );
}
