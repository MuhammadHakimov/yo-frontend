import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AdminSidebar />

      <main className="ml-17 md:ml-64 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;