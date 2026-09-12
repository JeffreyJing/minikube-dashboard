import React from 'react';

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const icon = (children) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...stroke}>
    {children}
  </svg>
);

export const RESOURCE_ICONS = {
  pods: icon(
    <path d="M12 2 3 6.5v11L12 22l9-4.5v-11L12 2Zm0 0v9m0 0-9-4.5m9 4.5 9-4.5" />
  ),
  services: icon(
    <>
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <path d="M12 7.5v4m0 0-6 5m6-5 6 5" />
    </>
  ),
  replicasets: icon(
    <>
      <rect x="5" y="4" width="14" height="6" rx="1.5" />
      <rect x="5" y="14" width="14" height="6" rx="1.5" />
    </>
  ),
  deployments: icon(
    <path d="M12 2 4 7v6c0 5 4 8 8 9 4-1 8-4 8-9V7l-8-5Zm0 6v6m0 0-3-3m3 3 3-3" />
  ),
  nodes: icon(
    <>
      <rect x="3.5" y="4" width="17" height="6" rx="1.2" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.2" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  namespaces: icon(
    <path d="M3 6.5c0-.8.7-1.5 1.5-1.5H9l2 2h8.5c.8 0 1.5.7 1.5 1.5V18c0 .8-.7 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V6.5Z" />
  ),
  persistent_volumes: icon(
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </>
  ),
  persistent_volume_claims: icon(
    <>
      <rect x="5.5" y="3.5" width="13" height="17" rx="1.5" />
      <path d="M9 3.5v3h6v-3M8.5 11h7M8.5 15h5" />
    </>
  ),
};

export const DEFAULT_ICON = icon(<circle cx="12" cy="12" r="8" />);
