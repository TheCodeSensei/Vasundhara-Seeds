import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="w-full bg-gray-200 py-3 px-8 text-gray-700 text-sm">
      <nav className="flex space-x-2">
        <Link to="/" className="hover:text-yellow-500 font-extrabold font-serif">Home</Link>
        {pathnames.length > 0 && <span>{">"}</span>}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          
          return (
            <span key={name} className="flex space-x-2">
              {!isLast ? (
                <Link to={routeTo} className="hover:text-yellow-500 capitalize">
                  {name.replace("-", " ")}
                </Link>
              ) : (
                <span className="text-yellow-500 capitalize font-extrabold font-serif">{name.replace("-", " ")}</span>
              )}
              {index < pathnames.length - 1 && <span>{">"}</span>}
            </span>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumb;
