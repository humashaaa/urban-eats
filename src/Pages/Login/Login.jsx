import './login.css'
const Login = () => {
    return (
      <div className="hero  bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div className="card bg-base-100 w-full max-w-sm p-10 shadow-2xl">
            <h1>LOGIN NOW</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
  type="email"
  placeholder="email"
  className="w-full appearance-none border-b-4 border-[#E2725B] bg-white focus:outline-none focus:border-blue-500"
  required
  style={{ backgroundColor: "white", boxShadow: "none" }}

/>            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;