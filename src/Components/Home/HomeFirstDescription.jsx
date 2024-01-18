export const HomeFirstDescription = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="flex justify-between items-center w-full h-1/2 p-40 bg-Black65 gap-20">
        <section className="w-4/5 text-white">
          <strong className="text-6xl">
            <p>Tu aliado en la gestión financiera.</p>
          </strong>
          <span className="text-4xl">
            Simplificamos la administración de tus archivos financieros, desde
            impuestos hasta contabilidad. Accede fácilmente, ahorra tiempo y
            concéntrate en hacer crecer tu negocio. ¡Únete ahora!
          </span>
        </section>
        <section className="w-1/5 flex text-center flex-col items-center justify-center gap-2">
          <button className="text-4xl text-customBrown bg-white px-4 py-2 rounded-md font-bold">
            Registrate
          </button>
          <p className="text-gray-400 text-2xl">
            o{" "}
            <span className="text-white hover:cursor-pointer hover:underline">
              inicia sesion
            </span>{" "}
            si ya tiene una cuenta
          </p>
        </section>
      </div>
    </div>
  );
};
