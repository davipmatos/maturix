import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function AppLayout() {
  return (
    <div className="flex min-h-screen bg-ink-950">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="relative flex-1">
          <div className="absolute inset-0 grid-bg pointer-events-none opacity-[0.6]" />
          <div className="relative mx-auto w-full max-w-[1400px] px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
