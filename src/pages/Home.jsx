const Home = () => {
  return (
    <section className='w-full h-full grid place-items-center '>
      <div className='w-3/5 p-5 bg-zinc-900 rounded-md'>
        <h1 className='text-center font-extrabold text-4xl text-indigo-500 mb-3'>
          Vite Development Kit
        </h1>
        <h3 className='font-bold text-2xl text-indigo-500'>Vite + React</h3>
        <p className='font-semibold text-justify text-lg'>
          VDK (Vite Development Kit) is a robust and efficient template designed
          to streamline the development of React.js applications using Vite.
          This kit provides a ready-to-use structure, including optimized
          configurations and essential tools to enhance your development
          workflow. VDK aims to boost productivity and simplify the setup
          process, allowing developers to focus on building high-quality
          applications with ease and speed.
        </p>
      </div>
    </section>
  );
};

export default Home;
