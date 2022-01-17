import React, { Component } from "react";
import "./style/input.css";
import PropTypes from "prop-types";

export default class Input extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    children: PropTypes.node,
    variant: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string,
    disabledClassName: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    className: "",
    label: "",
    size: "",
    variant: "basic",
    disabled: false,
    disabledClassName: "",
    color: "",
    border: "",
    radius: "",
    height: "",
    width: "",
    textColor: "",
    placeholder: "",
    value: "",
    id: "",
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      className,
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
      value,
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
