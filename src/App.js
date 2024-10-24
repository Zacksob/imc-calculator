import { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const pesoKg = parseFloat(peso);
    if (alturaMetros && pesoKg) {
      const imcCalculado = (pesoKg / (alturaMetros ** 2)).toFixed(2);
      setImc(imcCalculado);
      setClassificacao(classificarIMC(imcCalculado));
    }
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <div className="form-group">
        <label>Altura (cm):</label>
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Ej: 170.5"
        />
      </div>
      <div className="form-group">
        <label>Peso (kg):</label>
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Ej: 65.5"
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>

      {imc && (
        <div className="result">
          <h2>Seu IMC: {imc}</h2>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;


