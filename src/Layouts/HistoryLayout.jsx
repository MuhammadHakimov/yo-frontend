import React, { Suspense } from "react";
import HistoryHeader from "../components/headers/HistoryHeader";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div>
      <HistoryHeader />
      <main>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                <p className="text-blue-600 text-lg font-semibold">
                  Лутфан интизор шавед...
                </p>
              </div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
