import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
        </div>
        <p>
          Consectetur Lorem cillum mollit ipsum laboris sint ipsum laborum
          exercitation deserunt do anim. Minim ullamco officia culpa tempor ea
          eu id aliqua. Eiusmod et laborum irure excepteur enim Lorem
          consectetur tempor est sunt consectetur consectetur.
        </p>
        <Link to="/register" className="btn btn-hero">
          Login/Register
        </Link>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </Wrapper>
  );
};

export default Landing;
