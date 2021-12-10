import React, { Component } from "react";
import "./style/tabs.css";

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      prevSelected: "",
      isSmaller: true,
      firstLoad: true,
    };
    this.onClickTab = this.onClickTab.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClickTab(index) {
    const { prevSelected, selectedIndex, selectedIndexNow, firstLoad } =
      this.state;
    this.setState({ selectedIndex: index, firstLoad: false });
    if (index > selectedIndex) {
      this.setState({ isSmaller: false });
    } else {
      this.setState({ isSmaller: true });
    }
  }
  handleChange(e) {
    e.target.style.color = this.props.colorUnselected;
  }
  render() {
    const { selectedIndex, isSmaller, firstLoad } = this.state;
    const { tabs, color, background, colorUnselected, scroll } = this.props;
    return (
      <div>
        <div
          id={scroll ? "tabsContainerScroll" : "tabsContainer"}
          style={{ backgroundColor: background }}
        >
          {tabs
            ? tabs.map((item, index) => {
                return (
                  <>
                    <div
                      style={
                        selectedIndex === index
                          ? { color: color }
                          : { color: colorUnselected }
                      }
                      id={
                        selectedIndex === index
                          ? scroll
                            ? "tabItemSelectedScroll"
                            : "tabItemSelected"
                          : scroll
                          ? "tabItemScroll"
                          : "tabItem"
                      }
                      onClick={() => {
                        this.onClickTab(index);
                      }}
                      onMouseOver={(e) =>
                        selectedIndex === index ? null : this.handleChange(e)
                      }
                      onMouseOver={(e) =>
                        selectedIndex === index ? null : this.handleChange(e)
                      }
                    >
                      {item}
                      <div
                        style={
                          selectedIndex === index
                            ? { backgroundColor: color }
                            : null
                        }
                        id={
                          selectedIndex === index
                            ? isSmaller
                              ? firstLoad
                                ? "lineSelectedFirstLoad"
                                : "lineSelectedSmaller"
                              : "lineSelected"
                            : ""
                        }
                      />
                    </div>
                  </>
                );
              })
            : null}
        </div>
        {this.props.children
          ? this.props.children.map((item, index) => {
              return (
                <div>
                  {index === selectedIndex ? (
                    <div id="childrens">{item} </div>
                  ) : null}
                </div>
              );
            })
          : null}
      </div>
    );
  }
}
