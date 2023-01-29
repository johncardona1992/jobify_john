import React from 'react'

const FormRowSelect = ({labelText, name, value, handleChange, listItems}) => {
  return (
    <div className="form-row">
    <label htmlFor={name} className="form-label">
      {labelText || name}
    </label>
    <select
      name={name}
      value={value}
      onChange={handleChange}
      className="form-select"
    >
      {listItems.map((itemValue, index) => {
        return (
          <option key={index} value={itemValue}>
            {itemValue}
          </option>
        );
      })}
    </select>
  </div>
  )
}

export default FormRowSelect