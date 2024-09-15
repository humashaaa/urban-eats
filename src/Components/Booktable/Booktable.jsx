import "./booktable.css";
const Booktable = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl text-gray-700 text-center mt-28 mb-20 uppercase">
        book a table
      </h1>
      {/* book section */}
      <section className="book-table ">
        <div className="bg-gray-200  w-[34rem]">
          <div className=" flex-col lg:flex-row-reverse">
            <div className="card p-12 shrink-0 w-full  shadow-2xl bg-base-100">
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

                <div className="flex items-center justify-center">
                  <input
                    className="btn btn-primary bg-blue-400 hover:bg-blue-500 border-none text-white text-xl"
                    type="submit"
                    value="BOOK NOW!"
                  />
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
