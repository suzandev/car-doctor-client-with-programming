import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div
      className="card bg-base-100 shadow-xl"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500">Price: ${price}</p>
        <div className="card-actions">
          <button
            className="btn btn-primary"
            data-aos="zoom-in-up"
            data-aos-duration="2500"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.node,
};
