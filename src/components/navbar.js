import {
  HeaderContainer,
  SideNav,
  SideNavItems,
  HeaderMenuItem,
  HeaderSideNavItems
} from 'carbon-components-react'
import {Link} from '../parts/link'
import {Launch16} from '@carbon/icons-react'

function Navbar() {
  return(
    <HeaderContainer 
      render={()=>(
        <SideNav>
          <SideNavItems>
            <HeaderSideNavItems>

              <Link to='/'>
              <HeaderMenuItem>Home</HeaderMenuItem>
              </Link>

              <Link to='/magazine'>
              <HeaderMenuItem>E-Magazine</HeaderMenuItem>
              </Link>

              <HeaderMenuItem href='https://www.mbs.sch.id' target='_blank'>
              Web MBS
              <Launch16 aria-label='open'/>
              </HeaderMenuItem>

            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
      )}
    />
  )
}
export default Navbar;