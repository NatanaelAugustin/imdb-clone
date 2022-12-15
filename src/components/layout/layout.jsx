import React from 'react'
import Header from '../header/Header'
import RecentlyViewed from '../recentlyViewed/recentlyViewed'

function Layout({children}) {
  return (
    <> 
    <Header />
    {children}
    <RecentlyViewed />
    </>
  )
}

export default Layout