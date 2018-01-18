import React from "react";

import "particles.js";

import "./index.less";

class Stars extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.particlesJS("Stars", {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          }
        },
        size: {
          value: 1,
          random: true
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 0.3
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false
          },
          onclick: {
            enable: false
          },
          resize: true
        }
      },
      retina_detect: true
    });
  }
  render() {
    return <div className="Stars" id="Stars" />;
  }
}

export default Stars;
