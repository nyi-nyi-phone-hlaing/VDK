import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='w-full h-14 px-5 bg-zinc-900 flex items-center justify-between'>
      <h1 className='font-bold text-2xl text-indigo-500'>VDK</h1>

      <ul className='flex items-center gap-3'>
        <NavLink to='/' className='font-semibold text-zinc-300'>
          Home
        </NavLink>
        <NavLink to='/packages' className='font-semibold text-zinc-300'>
          Packages
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
