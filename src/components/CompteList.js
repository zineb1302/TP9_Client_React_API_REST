import React from 'react';

function CompteList() {
  const comptes = [
    { id: 1, solde: 12345, dateCreation: '2025-01-01', type: 'COURANT' },
    { id: 2, solde: 1000, dateCreation: '2025-02-02', type: 'EPARGNE' },
    { id: 3, solde: 30000, dateCreation: '2025-03-03', type: 'COURANT' }
  ];

  return (
    <div className="container mt-4">
      <h2>Liste des Comptes</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Solde</th>
            <th>Date de Création</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {comptes.map(compte => (
            <tr key={compte.id}>
              <td>{compte.id}</td>
              <td>{compte.solde}</td>
              <td>{compte.dateCreation}</td>
              <td>{compte.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompteList;