import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <main className='w-full h-screen bg-zinc-950 text-zinc-50 overflow-hidden'>
      <Navbar />
      <div className='w-full h-[calc(100%-3.5rem)]'>
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
