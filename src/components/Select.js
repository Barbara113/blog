import React, { Component } from "react";
import "./style/select.css";

export default class Select extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
      isOpen: false,
      titleState: "",
      clicked: false,
    };
  }
  isTitleVisible = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  onClickItem = (index, title) => {
    this.setState({
      selectedIndex: index,
      title,
      clicked: true,
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    let { selectedIndex, isOpen, clicked } = this.state;
    let { options } = this.props;

    return (
      <div className="selectWrapper">
        <div className="titleSelect" onClick={this.isTitleVisible}>
          {clicked ? this.state.title : this.props.title}
          <span className={isOpen ? "iconOpen" : "iconClosed"}>&#10094;</span>
        </div>
        <div className="optionsWrapper">
          {options && isOpen
            ? options.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={
                      selectedIndex === index
                        ? "itemsSelect active"
                        : "itemsSelect"
                    }
                    onClick={(value) => {
                      value = item;
                      this.props.onClick(value);
                      this.onClickItem(index, item);
                    }}
                  >
                    {item}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
