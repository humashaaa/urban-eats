const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer bg-neutral text-neutral-content p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
      <footer className="footer footer-center bg-neutral text-neutral-content p-4">
        <aside>
          <p className="font-semibold">
            Copyright © {new Date().getFullYear()} - All right reserved by
            UrbanEats Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
