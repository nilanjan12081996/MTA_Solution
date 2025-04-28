import { useEffect, useState } from "react";
import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../layout/header";
import Sidebar from "../layout/Sidebar";
import HeaderIner from "../layout/HeaderIner";

const InsideLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const token = sessionStorage.getItem("mtaToken");
  const parseToken = token ? JSON.parse(token)?.token : null;
  const nevigate = useNavigate();
  useEffect(() => {
    if (parseToken === null || parseToken === null) {
      nevigate("/");
    }
  }, []);

  return (
    <div className="inside_wrapper pt-8">
      <div>
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className="flex overflow-hidden">
          {/* <!-- ===== Sidebar Start ===== --> */}
          {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
          {/* <!-- ===== Sidebar End ===== --> */}

          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden max-w-6xl mx-auto">
            {/* <!-- ===== Header Start ===== --> */}
            <HeaderIner
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <main>
              {/* <div className="mx-auto max-w-screen-2xl p-4 md:p-6 lg:py-10 lg:px-0">
                <Outlet />
              </div> */}
              <div className="mx-auto p-4 md:p-0 2xl:py-0 my-12">
                <Outlet />
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    </div>
  );
};

export default InsideLayout;
