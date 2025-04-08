// import Raphael from 'raphael';
import JustGage from 'justgage';
import { styles } from "./assets.js";

class OccupancyWidget {
  constructor() {
    this.initialize();
  }

  widgetContainer = null;

  async initialize() {
    // Create the main container div
    const container = document.createElement("div");
    container.classList.add("widget__container");
    
    document.body.appendChild(container);

    // Create widget container
    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__occupancy");

    // Create widget content and inject styles
    this.createWidgetContent();
    this.injectStyles(container); // Pass container to injectStyles

    // Append widget to container
    container.appendChild(this.widgetContainer);

    // Initialize JustGage after the widget content is in the DOM
    requestAnimationFrame(() => {
      this.initializeJustGage();
    });
  }

  createWidgetContent() {
    this.widgetContainer.innerHTML = `
      <a href="https://newbooks.ucd.ie/dashboard/" class="ucd-box ucd-box--widget">
        <div class="ucd-box__widget">
          <div id="occupancy-gage-569614" class="occupancy-gage" data-gage-max="2000" data-gage-label="James Joyce Library" data-gage-location-code="JJL"></div>
        </div>
        <div class="ucd-box__title">
          <span>Library availability today</span>
          <span>View full screen
            <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.8283 0L15.5768 1.24746L21.481 7.1322H0V8.8678H21.481L15.5768 14.7525L16.8283 16L24.229 8.62373L24.8276 8L24.229 7.37627L16.8283 0Z" fill="#008ACC"></path>
            </svg>
          </span>
        </div>
      </a>
    `;
  }

  injectStyles(container) {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
    document.head.appendChild(styleTag); // Append to document head
  }

  initializeJustGage() {
    const gageElement = document.getElementById("occupancy-gage-569614");
    if (gageElement) {
      new JustGage({
        id: "occupancy-gage-569614",
        value: this.getRandomValue(),
        min: 0,
        max: 2000,
        title: "James Joyce Library",
        label: "",
        levelColors: ["#00FF00", "#FFA500", "#FF0000"],
        levelColorsGradient: false,
        parentNode: gageElement,
      });
    } else {
      console.error("JustGage element not found.");
    }
  }

  getRandomValue() {
    return Math.floor(Math.random() * 2000);
  }
}

function initializeWidget() {
  return new OccupancyWidget();
}

initializeWidget();