import React, { Component } from "react";
import "./style/button.css";
import PropTypes from "prop-types";

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
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
      fontSize,
    } = this.props;
    return (
      <div>
        <button
          style={{
            backgroundColor: color,
            border: border,
            borderRadius: radius,
            height: height,
            width: width,
            color: textColor,
            fontSize: fontSize,
          }}
          onClick={() => (onClick ? onClick() : null)}
          className={disabled ? "buttonDisabled" : "buttonClass"}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}
