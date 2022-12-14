import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SimpleSlider(){

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000
  };

  return(
      <>
        <div style={{overflow: "hidden"}}>
          <h2 style={{fontSize:"30px"}}> Single Item</h2>
          <Slider {...settings}>
            <div>
              <div className="slide">
                <img src="https://www.constructconnect.com/hubfs/Imported_Blog_Media/projmgt-e1473358613687.jpg" alt="logo"></img>
              </div>
            </div>
            <div>
              <div className="slide">
                <img src="https://image.shutterstock.com/image-illustration/3d-render-conceptual-urban-building-260nw-1855601581.jpg" alt="logo"></img>
              </div>
            </div>
            <div>
              <div className="slide">
                <img src="https://image.shutterstock.com/image-illustration/3d-render-conceptual-urban-building-260nw-1855601581.jpg" alt="logo"></img>
              </div>
            </div>
            <div>
              <div class="slide">
                <img src="https://wallpapercave.com/wp/wp1842337.jpg" alt="logo"></img>
              </div>
            </div>
            <div>
              <div class="slide">
                <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/r/e/real_estate_photo_mosaic_architecture_collage_buildings_ppt_images_Slide01.jpg" alt="logo"></img>
              </div>
            </div>
          </Slider>
        </div>
      </>
  )
}
export default SimpleSlider;