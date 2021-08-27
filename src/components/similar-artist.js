import React from "react";
import ArtistCard from "./artist-card";

function SimilarArtist() {
  return (
    <div>
      <h5>Similar Artist</h5>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <ArtistCard pic="https://place-hold.it/350x350" name="band name" />
        </div>
        <div className="col-md-3">
          <ArtistCard pic="https://place-hold.it/350x350" name="band name" />
        </div>
        <div className="col-md-3">
          <ArtistCard pic="https://place-hold.it/350x350" name="band name" />
        </div>
        <div className="col-md-3">
          <ArtistCard pic="https://place-hold.it/350x350" name="band name" />
        </div>
      </div>
    </div>
  );
}

export default SimilarArtist;
