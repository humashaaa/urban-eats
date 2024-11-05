
const Register = () => {
    return (
        <div className="border-4 border-green-600 w-[22rem] p-4">
          <form
                // onSubmit={handleSubmit(onSubmit)}
                className="font-montserrat pr-4"
              >
                <div className="mb-4 ">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-bold "
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    // {...register("name", { required: "Name is required" })}
                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-primary"
                    placeholder="Enter your name"
                  />
                  {/* {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )} */}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    // {...register("email", { required: "Email is required" })}
                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-primary"
                    placeholder="Enter your email"
                  />
                  {/* {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )} */}
                </div>


                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-bold"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="text"
                    // {...register("email", { required: "Email is required" })}
                    className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-primary"
                    placeholder="Enter your password"
                  />
                  {/* {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )} */}
                </div>

                

                <button
                  type="submit"
                  className="bg-primary text-white w-full py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
        </div>
    );
};

export default Register;