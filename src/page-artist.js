import React from "react";
import SearchBar from "./components/search-bar";
import SimilarArtist from "./components/similar-artist";
import { Fragment } from "react";
import "./page-artist.css";

function PageArtist() {
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <div className="row center">
          <div className="col-md-3" />
          <div className="col-md-6">
            <img
              src="https://img.discogs.com/lfSZIlRmRmE5KCB2F0zaKMXI7hQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10402046-1543754102-2589.jpeg.jpg"
              alt=""
              className="pic-artist margenes50 "
            />
            <h2>Gustavo Cerati</h2>
            <p>
              Gustavo Adrián Cerati fue un músico, cantautor, actor, y productor
              discográfico argentino que obtuvo reconocimiento internacional por
              haber sido el líder de la banda de rock Soda Stereo. Es
              considerado por parte de la prensa, cantantes y críticos como uno
              de los músicos más influyentes del rock latinoamericano.
            </p>
          </div>
        </div>
        <div className="row center">
          <SimilarArtist />
        </div>
      </div>
    </Fragment>
  );
}

export default PageArtist;
