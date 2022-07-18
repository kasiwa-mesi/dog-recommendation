import { fetchBreeds, fetchImages } from "../api/index";
import { useEffect, useState } from "react";
import Button from "../atoms/button";
import Select from "../atoms/Select";
import Loading from "../atoms/Loading";
import Gallery from "../molecules/Gallery";

function Form(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { breed } = event.target.elements;
    props.onFormSubmit(breed.value);
  }
  const {list} = props;
  if (list == null) {
    return <Loading />;
  }
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
    }}>
      <form onSubmit={handleSubmit}>
        <Select list={list} default="shiba" />
        <Button text="検索する" />
      </form>
    </div>
  );
}

function Main() {
  const [breeds, setBreeds] = useState(null);
  useEffect(() => {
    fetchBreeds().then((breeds) => {
      setBreeds(breeds);
    });
  }, []);
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImages("shiba").then((urls) => {
      setUrls(urls);
    });
  }, []);
  function reloadImages(breed) {
    fetchImages(breed).then((urls) => {
      setUrls(urls);
    });
  }
  return (
    <main>
      <section className="section">
        <div className="container">
          <h2 style={{
            textAlign: "center",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            fontSize: "2rem",
            color: "#78BBE6"
          }}>
            好きな種類を選んで可愛いワンちゃんの画像を調べよう！
          </h2>
          <Form list={breeds} onFormSubmit={reloadImages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
}

export default Main;