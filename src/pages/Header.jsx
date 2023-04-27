import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="hd">
      <div className="hd_logo">
        <Link to="/">
          <img src="/img/logo.svg" alt="logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
