import React from 'react';

const TabelaTransacoes = ({ lista }) => {
    return (
        <section id="tabela">
            <div id="header_tabela">
                <div className="codigo">Código</div>
                <div className="descricao">Descrição</div>
                <div className="entrada">Entrada</div>
                <div className="saida">Saída</div>
                <div className="total">Total</div>
            </div>
            <div id="body_tabela">
                {
                    lista.map((item, index) => (
                        <div className="lista" key={index}>
                            <div className="codigo">{item.codigo}</div>
                            <div className="descricao">{item.descricao}</div>
                            <div className="entrada">{item.entrada.toFixed(2)}</div>
                            <div className="saida">{item.saida.toFixed(2)}</div>
                            <div className="total">{item.total.toFixed(2)}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default TabelaTransacoes;