import React from 'react';

const Reservas = ({ reservas }) => {
  return (
    <div>
      <h2>Reservas</h2>
      {reservas.length > 0 ? (
        <ul>
          {reservas.map((reserva, index) => (
            <li key={index}>
              {reserva.data} - {reserva.atividade}
            </li>
          ))}
        </ul>
      ) : (
        <p>Você não tem reservas ainda.</p>
      )}
    </div>
  );
};

export default Reservas;
