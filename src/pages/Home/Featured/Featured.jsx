import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle subHeading="Check It Out" heading="Featured Item" />
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>

        <div className="md:ml-10 space-y-4">
          <p>Aug20, 2029</p>
          <p className="uppercase">where i can get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            obcaecati nihil temporibus dolores perferendis vitae doloremque
            aliquam aperiam labore, odit saepe! Corporis saepe sapiente aliquid
            sunt. Sunt quisquam obcaecati corrupti similique adipisci incidunt
            architecto, perferendis nam, consequuntur, deserunt reprehenderit
            repudiandae? Sed, ut voluptates. Ducimus magnam amet reiciendis,
            enim vitae recusandae.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
