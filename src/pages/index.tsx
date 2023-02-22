import { FaBuilding } from "react-icons/fa";
import { useState, useRef } from "react";

export default function Home() {
  const [cnpj, setCnpj] = useState("");
  const razaoSocialRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const telefoneRef = useRef<HTMLInputElement>(null);
  const dddRef = useRef<HTMLInputElement>(null);
  const fantasiaRef = useRef<HTMLInputElement>(null);


  const consultarCNPJ = require('consultar-cnpj')

  async function handleGetCompanyData() {

    const empresa = await consultarCNPJ(`${cnpj}`)

    razaoSocialRef.current ? (razaoSocialRef.current.value = empresa.razao_social) : null;
    emailRef.current ? (emailRef.current.value = empresa.estabelecimento.email) : null;
    telefoneRef.current ? (telefoneRef.current.value = empresa.estabelecimento.telefone1) : null;
    dddRef.current ? (dddRef.current.value = empresa.estabelecimento.ddd1) : null;
    fantasiaRef.current ? (fantasiaRef.current.value = empresa.estabelecimento.nome_fantasia) : null;


  }
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Cadastro de Cliente</h1>
          <form className="space-y-4">
            <div className="flex items-center mb-4">
              <label className=" text-gray-700 font-bold mr-2" htmlFor="cnpj">
                CNPJ
              </label>
              <div className="relative flex">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cnpj"
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                />
              </div>
              <FaBuilding
                className="pl-2 w-auto h-7 text-gray-400 cursor-pointer"
                onClick={handleGetCompanyData}
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="razaoSocial"
              >
                Razão Social
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="razaoSocial"
                ref={razaoSocialRef}
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="nomeFantasia"
              >
                Nome Fantasia
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nomeFantasia"
                ref={fantasiaRef}
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="telefone"
              >
                Telefone
              </label>
              <div className="flex ">
                <input className="shadow appearance-none w-16 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="ddd"
                  ref={dddRef}
                  type="number"
                />
                <input
                  className="shadow appearance-none border rounded py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="telefone"
                  ref={telefoneRef}
                  type="text"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"

              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                ref={emailRef}
                type="text"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}