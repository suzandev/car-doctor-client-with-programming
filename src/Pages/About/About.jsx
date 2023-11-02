import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="hero-content flex-col lg:flex-row">
        <div
          className="lg:w-1/2 relative"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute rounded-lg shadow-2xl right-5 top-1/2 border-8 border-white"
          />
        </div>
        <div
          className="lg:w-1/2 space-y-4 p-4 md:mt-11"
          data-aos="fade-left"
          data-aos-duration="2500"
        >
          <h3 className="text-3xl text-rose-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which do not look even slightly
            believable.
          </p>
          <button
            className="btn btn-warning"
            data-aos="zoom-in-up"
            data-aos-duration="2500"
          >
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
