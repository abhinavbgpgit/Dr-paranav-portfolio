import { Link } from "react-router-dom";
import menuItems from "../json/menuItems.json";
import "../styles/header.css"; // keep if using delay effect

const Header = () => {
  return (
    <header className="bg-white w-full rounded-lg">
      {/* Full width background attached to top */}
      <div className="w-full flex justify-center">
        {/* Content container */}
        <div className="w-full max-w-7xl px-8 py-4 flex gap-10 rounded-corners">
          {menuItems.map((menu, idx) => (
            <div key={idx} className="relative group">
              {menu.children ? (
                <>
                  {/* Parent menu */}
                  <button
                    className={`${
                      menu.title === "Home"
                        ? "bg-blue-700 text-black px-4 py-2 rounded font-semibold hover:bg-blue-800"
                        : "text-black font-bold hover:text-blue-700"
                    }`}
                  >
                    {menu.title}
                  </button>

                  {/* Dropdown */}
                  <div
                    className="dropdown absolute left-0 mt-2 bg-white text-black rounded shadow-lg 
                               opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                               transition-all duration-200 ease-in-out"
                  >
                    {menu.children.map((item, subIdx) => (
                      <Link
                        key={subIdx}
                        to={item.path}
                        className="block px-4 py-2 hover:bg-gray-200 whitespace-nowrap"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={menu.path}
                  className={`${
                    menu.title === "Home"
                      ? "bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600"
                      : "text-white font-bold hover:text-yellow-400"
                  }`}
                >
                  {menu.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;


