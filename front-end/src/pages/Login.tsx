import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h2 className="text-3xl font-bold">Faça seu login</h2>
        <form className="flex w-full flex-col gap-2">
          <input
            type="email"
            placeholder="Digite seu email"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
          />
          <button
            type="submit"
            className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 text-white"
          >
            Login
          </button>
        </form>
        <p>
          Ainda não tem conta?{""}
          <Link to="/registrar" className="font-semibold underline">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
