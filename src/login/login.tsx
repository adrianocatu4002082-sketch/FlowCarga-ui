import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ChevronDown,
  Truck,
} from "lucide-react";

import './login.css';

type LoginProps = {
  onLoginSuccess?: () => void;
};

export default function Login({ onLoginSuccess }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
        <div className="container">

        </div>
        <main className="login-page">
            <h1 className="login-title">LOGIN</h1>

            <div className="brand">
                <div className="brand-icon">
                <Truck size={72} strokeWidth={2.5} />
                </div>

                <div className="brand-text">
                <strong>FlowCargas</strong>
                <span>Gestão de Cargas</span>
                </div>
            </div>

            <section className="login-card">
                <h2>Entrar na Conta</h2>

                <p className="login-description">
                Digite suas credenciais para
                <br />
                acessar o sistema
                </p>

                <form>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>

                    <div className="input-wrapper">
                    <Mail size={23} />

                    <input
                        id="email"
                        type="email"
                        defaultValue="seu@email.com"
                        placeholder="seu@email.com"
                    />
                    </div>
                </div>

                <div className="form-group password-group">
                    <label htmlFor="password">Senha:</label>

                    <div className="input-wrapper">
                    <Lock size={23} />

                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        defaultValue="123456789012"
                    />

                    <button
                        type="button"
                        className="password-button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={
                        showPassword
                            ? "Ocultar senha"
                            : "Mostrar senha"
                        }
                    >
                        {showPassword ? (
                        <EyeOff size={23} />
                        ) : (
                        <Eye size={23} />
                        )}
                    </button>
                    </div>
                </div>

                <div className="form-group user-type-group">
                    <label htmlFor="userType">Tipo de Usuario</label>

                    <div className="select-wrapper">
                    <select id="userType" defaultValue="motorista">
                        <option value="motorista">Motorista</option>
                        <option value="transportadora">Transportadora</option>
                        <option value="gestor">Gestor</option>
                        <option value="administrador">Administrador</option>
                    </select>

                    <ChevronDown size={24} />
                    </div>
                </div>

                <div className="forgot-password">
                    <input
                    id="forgot"
                    type="checkbox"
                    />

                    <label htmlFor="forgot">
                    Esqueci minha senha
                    </label>
                </div>

                <button type="submit" className="login-button" onClick={onLoginSuccess}>
                    Entrar
                </button>
                </form>
            </section>
        </main>
    </div>
  );
}