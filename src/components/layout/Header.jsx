import Logo from '../../assets/logo.png';
import { LoggingButtons } from '../../auth/LoggingButtons.jsx';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0
 */
export default function Header() {
  // TODO: Replace me
  const { isAuthenticated } = useAuth0();
  return (
  <header className='w-[100%] primary-c px-14 pt-1 py-4'>
  <div className='flex justify-between items-center'>
    <a href='https://www.humanrightsfirst.org/' target='_blank' rel="noreferrer">
      <img className='w-[100px]' src={Logo} alt='HRF logo white' />
    </a>
    <div className='flex items-center gap-16 pt-1'>
      <NavLink to='/' className='nav-btn'>Home</NavLink>
      <NavLink to='/graphs' className='nav-btn'>Graphs</NavLink>
        {isAuthenticated && (
          <NavLink to='/profile' className='nav-btn'>
            Profile
          </NavLink>
        )}
      <LoggingButtons />
    </div>
  </div>

  <div className='flex flex-col items-center text-center text-white max-w-3xl mx-auto pt-1'>
    <h1 className='text-4xl font-bold'>
      Asylum Office Grant Rate Tracker
    </h1>
    <p className='text-sm whitespace-nowrap pt-4'>
      The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers and the public an interactive tool to explore USCIS data on Asylum Office decisions
    </p>
  </div>
</header>
  );
}
