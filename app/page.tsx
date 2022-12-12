"use client";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
      <form>
        <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="space-y-4">
            <h1 className="text-center text-2xl font-semibold text-gray-600">
              Bienvanido a NFit
            </h1>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Usuario
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-600 font-semibold"
              >
                Contraseña
              </label>
              <input
                type="text"
                className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
              />
            </div>
          </div>
          <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
}
