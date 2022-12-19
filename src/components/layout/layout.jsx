import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import RecentlyViewed from "../recentlyViewed/recentlyViewed";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <RecentlyViewed />
      <Footer />
    </>
  );
}

export default Layout;
