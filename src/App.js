import "./App.css";
import { useEffect, useState } from "react";
import imageService from "./services/imageService";
import Api from "./api";

function App() {
  const [file, setFile] = useState();
  const [imageKeys, setImageKeys] = useState([]);

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const submit = async (event) => {
    event.preventDefault();

    const result = await imageService.postImage({ image: file });

    const imageKey = result.imagePath.replace(/^\/images\//, "");

    setImageKeys([imageKey, ...imageKeys]);
  };

  useEffect(() => {
    Api.get("/images").then(({ data }) => {
      const imageKeys = data.map((image) => image.Key);
      setImageKeys(imageKeys);
    });
  }, []);

  return (
    <div className="container">
      <form onSubmit={submit} className="form">
        <input
          onChange={fileSelected}
          type="file"
          name="uploadImg"
          accept="image/png, image/jpeg"
        />

        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>

      <div className="imageContainer">
        {imageKeys.map((key) => (
          <div key={key}>
            <img
              src={`http://localhost:8080/images/${key}`}
              alt={key}
              className="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
