import React, { useState, useCallback } from 'react';

import styles from './index.module.scss';

interface InputPlusProps {
  onAdd: (title: string) => void;
}

export const InputPlus: React.FC<InputPlusProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');
  const addTaks = useCallback(() => {
    onAdd(inputValue);
    setInputValue('');
  }, [inputValue]);

  return (
    <div className={styles.inputPlus}>
      <input
        type="text"
        placeholder="Type here"
        value={inputValue}
        className={styles.inputPlusValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            addTaks();
          }
        }}
      />
      <button
        onClick={addTaks}
        aria-label="Add"
        className={styles.inputPlusButton}
      />
    </div>
  );
};
