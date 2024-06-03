import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div>
      <nav className="flex w-full">
        <NavLink to="/">
          <Header />
        </NavLink>
        <NavLink to="/comics">Comics</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/series">Series</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
