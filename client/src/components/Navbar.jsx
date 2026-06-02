import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link
          to="/"
          className="text-4xl tracking-widest"
        >
          SOULCHARGE
        </Link>

        <div className="flex gap-8 text-sm uppercase tracking-wider">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/coffee">
            Coffee
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

      </div>

    </nav>
  );
}