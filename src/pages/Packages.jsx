const packages = [
  { id: 1, name: "Icons", npm: ["lucide-react"] },
  { id: 2, name: "Props Validate", npm: ["prop-types"] },
  { id: 3, name: "Routing", npm: ["react-router-dom"] },
  {
    id: 4,
    name: "Fonts",
    npm: [
      "@fontsource/montserrat",
      "@fontsource/poppins",
      "@fontsource/roboto",
    ],
  },
  {
    id: 5,
    name: "Styling",
    npm: ["-D tailwindcss postcss autoprefixer"],
    npx: ["tailwindcss init -p"],
  },
  {
    id: 6,
    name: "State Management Library",
    npm: ["react-redux", "@reduxjs/toolkit"],
  },
];

const Packages = () => {
  console.log(packages);
  return (
    <section className='w-full h-full overflow-y-scroll p-5'>
      <div className='w-3/5 h-full mx-auto mb-10'>
        <h1 className='text-center font-extrabold text-3xl text-indigo-500 mb-3'>
          Already Installed Packages
        </h1>

        {packages.map((pkg) => (
          <div className='mb-3' key={pkg.id}>
            <h1 className='font-bold text-lg mb-2'>{pkg.name}</h1>
            <ul className='w-full p-3 bg-zinc-900 rounded-md'>
              {pkg.npm &&
                pkg.npm.map((npm, idx) => {
                  return (
                    <li className='text-zinc-300' key={idx}>
                      <span className='text-indigo-500'>npm</span> i {npm}
                    </li>
                  );
                })}
              {pkg.npx &&
                pkg.npx.map((npx, idx) => {
                  return (
                    <li className='text-zinc-300' key={idx}>
                      <span className='text-indigo-500'>npm</span> i {npx}
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
