import React, { useState } from 'react';
import './ObjectSection.css';
import { RESOURCE_ICONS, DEFAULT_ICON } from './resourceIcons';

function ObjectSection({ type, items = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`node${isOpen ? ' node-open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="node-header">
        <span className="node-icon">{RESOURCE_ICONS[type] || DEFAULT_ICON}</span>
        <span className="node-title">{type.replace(/_/g, ' ').toUpperCase()}</span>
        <span className="node-count">{items.length}</span>
        <svg className="node-chevron" viewBox="0 0 24 24" width="14" height="14">
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="dropdown-panel">
        <div className="dropdown-panel-inner">
          {items.length > 0 ? (
            <ul className="dropdown">
              {items.map((item, i) => (
                <li key={i}>{item.name}</li>
              ))}
            </ul>
          ) : (
            <div className="dropdown-empty">No {type.replace(/_/g, ' ')} found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ObjectSection;
