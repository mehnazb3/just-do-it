import React, {FC} from 'react';
import {LayoutWrapper} from './styles'
import TopNavigation from '../TopNavigation'
import ContentSection from '../ContentSection'
import Footer from '../Footer'

const Layout: FC  = () => {
  return (
      <LayoutWrapper>
          <TopNavigation/>
          <ContentSection/>
          <Footer/>
      </LayoutWrapper>
  )
}

export default Layout;