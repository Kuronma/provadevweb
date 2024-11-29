import React from 'react';

const ResultsHome = ({ entradas, saidas, saldo }) => {
    return React.createElement('div', null,
        React.createElement('p', null, `Total Entradas: ${entradas}`),
        React.createElement('p', null, `Total Saídas: ${saidas}`),
        React.createElement('p', null, `Saldo Atual: ${saldo}`)
    );
};

export default ResultsHome;

