import './App';
import Carteira from './carteira/carteira';
import Login from './login/login';
import Perfil from './perfil/perfil';
import { JSX, useState } from 'react';

function App() {
  const [component, setComponent] = useState<string>('login');

  const components: Record<string, JSX.Element> = {
    login: <Login onLoginSuccess={() => setComponent('perfil')} />,
    perfil: <Perfil clickCarteira={() => setComponent('carteira')} clickHome={() => setComponent('home')} clickPerfil={() => setComponent('perfil')} clickMaps={() => setComponent('maps')} clickPedidos={() => setComponent('pedidos')} />,
    carteira: <Carteira clickCarteira={() => setComponent('carteira')} clickHome={() => setComponent('home')} clickPerfil={() => setComponent('perfil')} clickMaps={() => setComponent('maps')} clickPedidos={() => setComponent('pedidos')} />,
  };

  return (
    <div className="App">
      {components[component]}
    </div>
  );
}

export default App;
