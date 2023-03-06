import { useState } from "react";

// photos
import { Photos } from '../../data/Photos';

// album
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery = () => {
    const [index, setIndex] = useState(-1);

    const slides = Photos.map(({ src, width, height }) => ({
        src,
        width,
        height,
        srcSet: Photos.map((immagine) => ({
            src: immagine.src,
            width: immagine.width,
            height: immagine.height,
            title: immagine.title
        })),
    }));

    return (
        <>
            <PhotoAlbum
                photos={Photos}
                layout="rows"
                targetRowHeight={200}
                breakpoints={5}
                onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Slideshow, Thumbnails, Fullscreen]}
            />
        </>
    )
}

export default Gallery;