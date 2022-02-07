import React, { Component } from "react";
import "./style/button.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      background,
      border,
      radius,
      height,
      width,
      maxWidth,
      textColor,
      disabled,
      onClick,
      fontSize,
    } = this.props;
    return (
      <div>
        <button
          style={{
            background: background,
            border: border,
            borderRadius: radius,
            height: height,
            width: width,
            color: textColor,
            maxWidth: maxWidth,
            fontSize: fontSize,
          }}
          onClick={() => (onClick ? onClick() : null)}
          className={disabled ? "buttonClass disabled" : "buttonClass"}
        >
          {this.props.label}
        </button>
      </div>
    );
  }
}
