import {
    Menu,
    Bell,
    House,
    Truck,
    Package,
    Wallet,
    UserRound,
    Info,
} from "lucide-react";

import "./perfil.css";

type PerfilProps = {
    clickCarteira?: () => void;
    clickHome?: () => void;
    clickPerfil?: () => void;
    clickMaps?: () => void;
    clickPedidos?: () => void;
}
export default function Perfil({ clickCarteira, clickHome, clickPerfil, clickMaps, clickPedidos }: PerfilProps) {
    return (
        <main className="perfil-page">

            {/* HEADER */}
            <header className="perfil-header">
                <button className="header-button">
                    <Menu size={31} strokeWidth={2} />
                </button>

                <h1>PERFIL</h1>

                <button className="header-button">
                    <Bell size={31} strokeWidth={2} />
                </button>
            </header>

            {/* PERFIL */}
            <section className="profile-info">

                <div className="avatar">
                    <div className="avatar-head"></div>
                    <div className="avatar-body"></div>
                </div>

                <div className="profile-data">
                    <h2>Nome</h2>

                    <p>Profissão</p>

                    <div className="status">
                        <Info size={17} strokeWidth={2.5} />
                        <span>STATUS</span>
                    </div>
                </div>

            </section>

            <div className="divider"></div>

            {/* DADOS PESSOAIS */}
            <section className="data-section">

                <h3>Dados Pessoais</h3>

                <div className="data-row">
                    <strong>E-mail</strong>
                    <a href="mailto:emaildocara@gmail.com">
                        emaildocara@gmail.com
                    </a>
                </div>

                <div className="data-row">
                    <strong>Telefone</strong>
                    <span>( 86 ) 98100-00-00</span>
                </div>

            </section>

            {/* DADOS DO VEÍCULO */}
            <section className="data-section vehicle-section">

                <h3>Dados do Veiculo</h3>

                <div className="data-row">
                    <strong>Veiculo</strong>
                    <span>Scania R540</span>
                </div>

                <div className="data-row">
                    <strong>Placa</strong>
                    <span>ABCD123</span>
                </div>

            </section>

            {/* BOTTOM NAVIGATION */}
            <nav className="bottom-nav">

                <button onClick={clickHome}>
                    <House />
                </button>

                <button onClick={clickMaps}>
                    <Truck />
                </button>

                <button onClick={clickPedidos}>
                    <Package />
                </button>

                <button onClick={clickCarteira}>
                    <Wallet />
                </button>

                <button className="active" onClick={clickPerfil}>
                    <UserRound />
                </button>

            </nav>

        </main>
    );
}