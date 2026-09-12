import React, { useEffect, useState } from 'react';
import './App.css';
import ObjectSection from './components/ObjectSection';
import k8sLogo from './assets/k8s-logo.png';

function App() {
  const [data, setData] = useState({});
  const objectTypes = ['pods', 'services', 'replicasets', 'deployments', 'nodes', 'namespaces', 'persistent_volumes', 'persistent_volume_claims']
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/snapshot.json`)
      .then(res => res.json())
      .then(setData)
      .catch(() => setData({}));
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src={k8sLogo} alt="" className="header-logo" />
        <h1 className="title">My Minikube Dashboard</h1>
      </header>
      <div className="dashboard-grid">
        {objectTypes.map((type, i) => (
          <ObjectSection key={i} type={type} items={data[type] || []} />
        ))}
      </div>
    </div>
  );
}

export default App;
