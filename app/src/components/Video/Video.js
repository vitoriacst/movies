import { apiKey } from "../../constants/constants";
import UseApi from "../../hooks/useApi";

const Video = () => {
  const movieId = 502356;
  const { video } = UseApi(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
  );

  //   const teste = {
  //     key: 'abcd1234',
  //     site: 'YouTube'
  //   };

  //   const videoFrame = document.getElementById('video-frame');

  //   videoFrame.src = `https://www.${video.site}.com/watch?v=${video.key}`;

  //   console.log(video);

  return (
    <div>
      <iframe
        width="600"
        height="315"
        src={`https://www.youtube.com/embed/LTFGH0rJ-EY`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
