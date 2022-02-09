import React, { Component } from "react";
import "./style/checkbox.css";

export default class Select extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    const checkedValue = e.target.value;
    checkedValue = this.props.value;
    this.props.onChange(checkedValue);
  };
  render() {
    let {} = this.state;
    let { label, positionLabel, onChange, value, disabled, checked } =
      this.props;

    return (
      <div className="checkboxWrapper">
        {positionLabel == "down" ? (
          <input type="checkbox" id="incheckbox"></input>
        ) : null}
        <label
          for="incheckbox"
          className={
            positionLabel == "up"
              ? "labelCheckbox Up"
              : positionLabel == "down"
              ? "labelCheckbox Down"
              : positionLabel == "right"
              ? "labelCheckbox Right"
              : "labelCheckbox Left"
          }
        >
          {label}
        </label>
        <input
          type="checkbox"
          id="incheckbox"
          value={value}
          checked={checked}
          disabled={disabled}
          className={positionLabel == "down" ? "none" : null}
        ></input>
      </div>
    );
  }
}
