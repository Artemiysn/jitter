import SideNav from "@/app/ui/Sidenav/Sidenav";
import "@/app/globals.css";

//add fonts

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex h-screen flex-row ">
          <div className="lg:w-72 w-24 bg-green-400">
            <SideNav />
          </div>
          <div className="grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
