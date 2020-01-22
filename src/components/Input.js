import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Input = ({submitHandler}) => {
    const [value, setValue] = useState('');

    const handleChange = (value) => {
        setValue(value);
    }

    const handleClick = () => {
        submitHandler(value);
    }

    return(
        <div>
            <input type='text' value={value} onChange={(e) => handleChange(e.target.value)}/>
            <Button onClick={handleClick}>Search</Button>
        </div>
    )
}

export default Input;