import { Outlet } from "react-router-dom";
import { MobileSidebar } from "./_components/MobileSidebar";
import { NavbarAndSidebar } from "./_components/NavbarAndSidebar";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr]">
      <NavbarAndSidebar />
      <div className="flex flex-col">
        <header className="flex flex-col md:flex-row h-auto md:h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:px-6">
          <div className="flex w-full items-center justify-between md:justify-start">
            <MobileSidebar />
            <nav className="flex items-center space-x-4 lg:space-x-6">
              <NavLink to="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </NavLink>
              <NavLink to="/docs" className="text-sm font-medium transition-colors hover:text-primary">
                Docs
              </NavLink>
              <NavLink to="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
                Pricing
              </NavLink>
              <NavLink to="/login" className="text-sm font-medium transition-colors hover:text-primary">
                Log In
              </NavLink>
              <NavLink to="/signup" className="text-sm font-medium transition-colors hover:text-primary">
                Sign Up
              </NavLink>
            </nav>
          </div>
        </header>
        <main className="flex-grow overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;