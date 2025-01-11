import prodImage from "../../assets/main-prod.png";
import Slider from "react-slick";

export function ProductCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={prodImage} alt="..." className="h-full w-full object-cover" />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

// {productDetails?.imageSection?.map((image) => (
//     <img
//       key={image.id}
//       src={image.image}
//       alt="..."
//       className="h-full w-full object-cover"
//     />
//   ))}
