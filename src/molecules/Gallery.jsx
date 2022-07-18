import Image from "../atoms/Image";
import Loading from "../atoms/Loading";

function Gallery(props) {
  const {urls} = props;
  if (urls == null) {
    return <Loading />;
  }
  return (
    <div>
      {urls.map((url) => {
        return (
          <div key={url}>
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;