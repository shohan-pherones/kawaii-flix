import Link from "next/link";

const navItems = [
  { id: 1, route: "/", label: "Home" },
  { id: 2, route: "/about", label: "About" },
  { id: 3, route: "/anime", label: "Anime" },
  { id: 4, route: "/characters", label: "Characters" },
  { id: 5, route: "/ranking", label: "Ranking" },
  { id: 6, route: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="navbar bg-base-300 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.route}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Kawaii Flix
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.route}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/sign-in" className="btn btn-secondary">
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
