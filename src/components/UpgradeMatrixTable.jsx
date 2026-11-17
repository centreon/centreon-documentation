import React from 'react';

function UpgradeMatrixTable({ rows }) {
  const [versionFilter, setVersionFilter] = React.useState('all');
  const [supportedFilter, setSupportedFilter] = React.useState('all');

  const versions = Array.from(new Set(rows.map((row) => row.version)));

  const filteredRows = rows.filter((row) => {
    if (versionFilter !== 'all' && row.version !== versionFilter) {
      return false;
    }
    if (supportedFilter !== 'all' && (row.supported ? 'OUI' : 'NON') !== supportedFilter) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <label>
          Version de départ :{' '}
          <select value={versionFilter} onChange={(e) => setVersionFilter(e.target.value)}>
            <option value="all">Toutes</option>
            {versions.map((version) => (
              <option key={version} value={version}>{version}</option>
            ))}
          </select>
        </label>
        <label>
          OS toujours supporté :{' '}
          <select value={supportedFilter} onChange={(e) => setSupportedFilter(e.target.value)}>
            <option value="all">Tous</option>
            <option value="OUI">OUI</option>
            <option value="NON">NON</option>
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Version de départ</th>
            <th>OS supporté à l'époque</th>
            <th>OS toujours supporté ?</th>
            <th>Procédure à suivre</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.length === 0 ? (
            <tr>
              <td colSpan={4}>Aucun résultat pour ces filtres.</td>
            </tr>
          ) : (
            filteredRows.map((row, index) => (
              <tr key={`${row.version}-${row.os}-${index}`}>
                <td><strong>{row.version}</strong></td>
                <td>{row.os}</td>
                <td style={row.supported ? { color: 'green', fontWeight: 'bold' } : { color: 'red' }}>
                  {row.supported ? 'OUI' : 'NON'}
                </td>
                <td><a href={row.procedureHref}>{row.procedureLabel}</a></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UpgradeMatrixTable;
