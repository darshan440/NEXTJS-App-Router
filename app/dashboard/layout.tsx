import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen  w-screen flex-col md:flex-row md:overflow-hidden" >
      <div className="w-full flex-none bg-black md:w-64 ">
        <SideNav />
      </div>
      <div className="flex-grow p-6 bg-yellow-200   md:overflow-hidden-y-layout md:p-12 ">
        {children}
      </div>
    </div>
  );
}
