import { Outlet } from "react-router-dom";
import AdminSideBar from "./sidebar";


function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
        {/* admin side bar */}
        <AdminSideBar/>
        <div className="flex flex-1 flex-col">
            {/* admin header */}
            <AdminSideBar/>
            <main className="flex-1 flex bg-muted/40 p-d md:p-6">
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default AdminLayout;