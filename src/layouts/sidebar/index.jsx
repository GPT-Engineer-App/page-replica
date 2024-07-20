import { Outlet } from "react-router-dom";
import { MobileSidebar } from "./_components/MobileSidebar";
import { NavbarAndSidebar } from "./_components/NavbarAndSidebar";
import { Button } from "@/components/ui/button";
import { Download, RotateCcw, Maximize2 } from "lucide-react";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr]">
      <NavbarAndSidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileSidebar />
          <div className="w-full flex-1 flex justify-between items-center">
            <div>
              {/* Left side of navbar */}
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Presets</Button>
              <Button size="sm">Save</Button>
              <Button variant="ghost" size="icon"><Download className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><RotateCcw className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Maximize2 className="h-4 w-4" /></Button>
            </div>
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