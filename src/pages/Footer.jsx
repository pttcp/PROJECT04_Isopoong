import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="ft">
      <div className="ft_logo">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/img/logo_ft.svg`} alt="logo" />
        </Link>
      </div>
      <p>Copyright 2023. SangHee Lee. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
