import React from 'react';

export default function Button({onClick, buttonValue, className}) {
  return <button className={className} onClick={() => onClick()}>{buttonValue}</button>
}
