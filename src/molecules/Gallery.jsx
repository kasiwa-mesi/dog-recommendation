import Image from "../atoms/Image";
import Loading from "../atoms/Loading";

function Gallery(props) {
  const {urls} = props;
  if (urls == null) {
    return <Loading />;
  }
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    }}>
      {urls.map((url) => {
        return (
          <div
            key={url}
            className="dog-grid"
          >
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;