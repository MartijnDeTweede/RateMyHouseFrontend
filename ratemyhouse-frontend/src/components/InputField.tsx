import React from 'react';

const InputField: React.FC<{
  fieldName: string;
  labelText: string;
  onBlur: Function,
  type: string,
  defaultValue?: string | number,
}> = ({
  fieldName,
  labelText,
  onBlur,
  type,
  defaultValue
}) => {
  return(
    <div>
    <label htmlFor={fieldName}>{labelText}</label>
    <input defaultValue={defaultValue} type={type} name={fieldName} id={fieldName} onBlur={(event) => onBlur(event)}></input>
  </div>
  )
}

export default InputField;