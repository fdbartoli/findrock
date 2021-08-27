import ArtistCard from "./artist-card";
import { Fragment } from "react";

function SearchResults() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <ArtistCard
            name={"Iron Maiden"}
            pic={
              "https://archivorockmetal.com/wp-content/uploads/2020/12/ironmaiden-killers-300x300.jpg"
            }
          />
          <ArtistCard
            name="Meallica"
            pic={
              "https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/8/b/e/a/38dc-3976-46d3-b8a4-60361cf3aa1e.jpg"
            }
          />
          <ArtistCard
            name="Muse"
            pic={
              "http://nasmirtraslados.com.ar/wp-content/uploads/Muse-2019.jpg"
            }
          />
          <ArtistCard
            name="SOAD"
            pic={
              "https://store-images.s-microsoft.com/image/apps.51136.9007199266346971.3a1b9c43-2cd9-4096-8436-22d47ed45978.5a181ba5-bd32-4b04-bc35-fd07566c76bb?mode=scale&q=90&h=300&w=300"
            }
          />
        </div>
      </div>
    </Fragment>
  );
}

export default SearchResults;
