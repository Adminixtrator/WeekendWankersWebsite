import React, { useState } from 'react';

function QuantitySelector({ onChange, maxValue = 5, minValue = 1 }) {
  const [quantity, setQuantity] = useState(1);
  
  const increment = () => {
    if (quantity < maxValue) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      if (onChange) onChange(newValue);
    }
  };
  
  const decrement = () => {
    if (quantity > minValue) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      if (onChange) onChange(newValue);
    }
  };
  
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      margin: '15px 0'
    }}>
      <button 
        onClick={decrement}
        disabled={quantity <= minValue}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '10px',
          border: 'none',
          backgroundColor: quantity <= minValue ? '#262221' : '#5cbb5c',
          color: 'white',
          fontSize: '20px',
          cursor: quantity <= minValue ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        −
      </button>
      
      <div style={{
        margin: '0 15px',
        fontSize: '18px',
        fontWeight: 'bold',
        width: '40px',
        color: 'white',
        textAlign: 'center'
      }}>
        {quantity}
      </div>
      
      <button 
        onClick={increment}
        disabled={quantity >= maxValue}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '10px',
          border: 'none',
          backgroundColor: quantity >= maxValue ? '#262221' : '#5cbb5c',
          color: 'white',
          fontSize: '20px',
          cursor: quantity >= maxValue ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;