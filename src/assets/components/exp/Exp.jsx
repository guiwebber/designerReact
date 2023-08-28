import React from "react";
import "../topo/topo.css";
function Exp(props) {
  return (
    <div className={`exp ${props.dayOrNight === 'dia' ? 'mid-theme' : 'mid-theme-light'}` } >
      <div className="topExp">
        <h3>Experiências de trabalho</h3>
        <p className="borderB">________</p>
        <p className="grayThin textTop">
          Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.
        </p>
      </div>
      <div className="boxCards">
        <div className="cards">
          <p className="grayThin">Junho 2012 - 2016</p>
          <h4>Web designer</h4>
          <p className="grayThin corp">Pied Piper StartUp</p>
          <p className="grayThin">
            Criação de Landing pages, sites institucionais e E-commerces
            completamente personalizados e otimizados para buscadores
          </p>
        </div>
        <div className="cards">
          <p className="grayThin">Agosto 2016 - 2019</p>
          <h4>Product Designer</h4>
          <p className="grayThin corp">E Corp.</p>
          <p className="grayThin">
            Criação de modelos estratégicos de conversão identificando o cliente
            e mapeando toda a sua jornada de compra
          </p>
        </div>
        <div className="cards">
          <p className="grayThin">Fevereiro 2019 - 2021</p>
          <h4>Digital Consulting</h4>
          <p className="grayThin corp">Arasaka Inc.</p>
          <p className="grayThin">
            Consultoria em estratégias digitais para todas as etapas do ciclo do
            projeto, desde a definição inicial até a execução
          </p>
        </div>
      </div>
    </div>
  );
}

export default Exp;
