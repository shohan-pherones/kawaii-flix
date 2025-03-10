import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <Link href="/" className="link link-hover">
            Kawaii Flix Ltd
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
