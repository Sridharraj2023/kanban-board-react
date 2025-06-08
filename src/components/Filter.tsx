import React, { useState } from 'react';
import './Filter.css';

interface FilterProps {
  onFilter: (assignees: string[], tags: string[], logic: 'AND' | 'OR' | 'NOT') => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [assignees, setAssignees] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [logic, setLogic] = useState<'AND' | 'OR' | 'NOT'>('AND');

  const handleFilter = () => {
    onFilter(assignees, tags, logic);
  };

  return (
    <div className="filter">
      <h2>Filter Tasks</h2>

      <div className="filter-inputs">
        <input
          type="text"
          placeholder="Assignees (comma separated)"
          onChange={(e) =>
            setAssignees(
              e.target.value
                .split(',')
                .map((s) => s.trim().toLowerCase())  // lowercase here
                .filter(Boolean)
            )
          }
        />

        <input
          type="text"
          placeholder="Tags (comma separated)"
          onChange={(e) =>
            setTags(
              e.target.value
                .split(',')
                .map((s) => s.trim().toLowerCase())  // lowercase here
                .filter(Boolean)
            )
          }
        />

        <select value={logic} onChange={(e) => setLogic(e.target.value as 'AND' | 'OR' | 'NOT')}>
          <option value="AND">AND</option>
          <option value="OR">OR</option>
          <option value="NOT">NOT</option>
        </select>

        <button onClick={handleFilter}>Apply Filter</button>
      </div>
    </div>
  );
};

export default Filter;
