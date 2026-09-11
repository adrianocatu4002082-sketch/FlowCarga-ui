import {
  Menu,
  Bell,
  Eye,
  Truck,
  Home,
  Package,
  Wallet,
  UserRound,
} from "lucide-react";

import "./carteira.css";

type PerfilProps = {
    clickCarteira?: () => void;
    clickHome?: () => void;
    clickPerfil?: () => void;
    clickMaps?: () => void;
    clickPedidos?: () => void;
}

export default function Carteira({ clickCarteira, clickHome, clickPerfil, clickMaps, clickPedidos }: PerfilProps) {
  return (
    <main className="carteira-page">

      {/* HEADER */}
      <header className="carteira-header">
        <button className="header-button">
          <Menu size={31} strokeWidth={2} />
        </button>

        <h1>CARTEIRA</h1>

        <button className="header-button">
          <Bell size={31} strokeWidth={2} />
        </button>
      </header>

      {/* SALDO */}
      <section className="balance-card">

        <div className="balance-info">
          <span>Saldo disponível</span>

          <strong>R$ 4.680,80</strong>
        </div>

        <button className="extract-button">
          <Eye size={21} strokeWidth={2.5} />
          <span>Ver Extrato</span>
        </button>

      </section>

      {/* PRÓXIMOS PAGAMENTOS */}
      <section className="payments-card">

        <h2>Próximos pagamentos</h2>

        <article className="payment-item">

          <div className="payment-icon">
            <Truck size={66} strokeWidth={2} />
          </div>

          <div className="payment-info">

            <strong>TransLog Transportes</strong>

            <div className="payment-details">
              <span>Previsão: 15/05/2024</span>

              <strong>R$ 1.800,00</strong>
            </div>

          </div>

        </article>

      </section>

      {/* NAVEGAÇÃO */}
      <nav className="bottom-nav">

        <button onClick={clickHome}>
          <Home />
        </button>

        <button onClick={clickMaps}>
          <Truck />
        </button>

        <button onClick={clickPedidos}>
          <Package />
        </button>

        <button className="active" onClick={clickCarteira}>
          <Wallet />
        </button>

        <button onClick={clickPerfil}>
          <UserRound />
        </button>

      </nav>

    </main>
  );
}