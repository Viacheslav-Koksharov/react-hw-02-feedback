import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onAddfeedback }) => (
  <ul>
    {options.map(key => (
      <li key={key}>
        <button
          className={s.button}
          type="button"
          name={key}
          onClick={onAddfeedback}
        >
          {key}
        </button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
