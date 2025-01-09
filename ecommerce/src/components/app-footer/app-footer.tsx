import Logo from "../../assets/images/logo-digital2.png";

import "./app-footer.scss";
import "primeicons/primeicons.css";

const AppFooter = () => {
  return (
    <div className="bg-bgFooter px-20 py-10">
      <div className="flex justify-between">
        <div className="w-72 flex flex-col gap-10 mr-72">
          <img src={Logo} alt="Logo digital" />
          <span className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </span>
          <div className="flex gap-5">
            <i
              className="pi pi-facebook"
              style={{ color: "white", fontSize: "1.5rem" }}
            ></i>
            <i
              className="pi pi-instagram"
              style={{ color: "white", fontSize: "1.5rem" }}
            ></i>
            <i
              className="pi pi-twitter"
              style={{ color: "white", fontSize: "1.5rem" }}
            ></i>
          </div>
        </div>
        <div className="flex gap-10">
            <div className="flex flex-col gap-3 w-1/3">
              <p className="text-white text-xl font-bold">Informação</p>
              <p className="text-white">Sobre DripStore</p>
              <p className="text-white">Segurança</p>
              <p className="text-white">Wishlist</p>
              <p className="text-white">Blog</p>
              <p className="text-white">Trabalhe Conosco</p>
              <p className="text-white">Meus Pedidos</p>
            </div>
            <div className="flex flex-col gap-3 w-1/3">
              <p className="text-white text-xl font-bold">Categoria</p>
              <p className="text-white">Camisetas</p>
              <p className="text-white">Calças</p>
              <p className="text-white">Bonés</p>
              <p className="text-white">Headphones</p>
              <p className="text-white">Tênis</p>
            </div>
            <div className="flex flex-col gap-3 w-1/3">
              <p className="text-white text-xl font-bold">Contato</p>
              <p className="text-white">
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </p>
              <p className="text-white">(85) 3051-3411</p>
            </div>
        </div>
      </div>
      <div className="style-border text-center mt-6">
        <p className="text-white mt-10">@ 2022 Digital College</p>
      </div>
    </div>
  );
};

export default AppFooter;
