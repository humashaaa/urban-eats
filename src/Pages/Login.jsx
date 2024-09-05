import img1 from '../assets/icon.png'
const Login = () => {
    return (
        <div>
            <div className="h-[550px] w-3/4 mx-auto mt-20  bg-red-400 rounded-2xl p-10">

            <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse gap-5">
    <div className="text-center lg:text-left">
      <img src={img1} alt="" />
    </div>
    <div className="card bg-red-400 w-full max-w-sm shrink-0 shadow-xl mt-10">
      <form className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold text-xl">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-semibold text-xl">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white font-semibold">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white text-xl bg-red-700 border-none">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</div>

            </div>
        </div>
    );
};

export default Login;