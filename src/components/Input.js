import React, { Component } from "react";
import "./style/input.css";
import PropTypes from "prop-types";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      color,
      border,
      radius,
      height,
      width,
      textColor,
      disabled,
      onClick,
      placeholder,
      label,
      onChange,
      id,
      type,
    } = this.props;
    return (
      <div>
        <input
          placeholder={placeholder ? placeholder : ""}
          label={label}
          style={{
            backgroundColor: color,
            border: border,
            borderRadius: radius,
            height: height,
            width: width,
            color: textColor,
          }}
          onClick={() => (onClick ? onClick() : null)}
          onChange={(e) => (onChange ? onChange(e) : null)}
          className={disabled ? "inputDisabled" : "inputClass"}
          id={id}
          type={type}
        />
      </div>
    );
  }
}
