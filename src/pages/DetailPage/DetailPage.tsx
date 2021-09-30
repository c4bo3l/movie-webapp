import { useParams } from "react-router-dom";
import { DetailTitle, MovieDetail } from "../../components";

export const DetailPage = () => {
  let { imdbId } = useParams<{ imdbId: string }>();

  return (
    <>
      <DetailTitle />
      <MovieDetail imdbid={imdbId} />
    </>
  );
}