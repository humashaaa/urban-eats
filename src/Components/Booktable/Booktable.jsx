import { Link } from "react-router-dom";
import "./booktable.css";
const Booktable = ({sectionRef}) => {
  return (
    <div>
      <h1 className="font-bold text-5xl text-gray-700 text-center mt-28 mb-20 uppercase">
        reservation
      </h1>
      {/* book section */}
      <section ref={sectionRef} className="book-table ">
        <div className="bg-gray-200  w-[34rem] ">
          <div className=" flex-col lg:flex-row-reverse ">
            <div className="card p-12 shrink-0 w-full  shadow-2xl bg-base-100">
              <h1 className="font-bold text-2xl text-center mb-6">
                BOOK A TABLE
              </h1>
              <form className="space-y-4">
                {/* 1st row */}
                <div className="flex justify-between gap-5 ">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="number"
                      placeholder="Enter Phone Number"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                {/* 2nd row */}
                <div className="flex justify-between gap-5">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="dinner type drop down"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                {/* 3rd row */}
                <div className=" flex justify-between gap-5 w-[28rem]">
                  <div className="form-control w-full">
                    <input
                      type="date"
                      placeholder=""
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control w-full">
                    {/*  */}
                    <input
                      type="number"
                      placeholder="num  person drop down"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                </div>

                {/* 4th row */}

                <div className="form-control w-[28rem] relative">
                  <label className="absolute top-1 left-3 text-gray-400">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    placeholder=""
                    className="input input-bordered w-full h-20 pt-6"
                  />
                </div>

                <div className="flex items-center justify-center ">
                <Link to='/' className="relative inline-block px-4 py-2 font-medium group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#A8563F] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-[#E2725B] border-2 border-[#E2725B] group-hover:bg-[#E2725B]"></span>
<span className="relative text-white group-hover:text-white">BOOK NOW</span>
</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booktable;
