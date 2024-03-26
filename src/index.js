import introJs from "intro.js";
import { DIRECTIVES } from "./directives";

const DEFAULT_OPTIONS = {
  waitTimeout: 400,
};

const Plugin = {
  install(app, options) {
    options = Object.assign({}, DEFAULT_OPTIONS, options);
    app.config.globalProperties.$intro = (...args) => {
      return introJs(...args);
    };

    app.directive("intro", DIRECTIVES.intro);
    app.directive("intro-step", DIRECTIVES.step);
    app.directive("intro-position", DIRECTIVES.position);
    app.directive("intro-tooltip-class", DIRECTIVES.tooltipClass);
    app.directive("intro-highlight-class", DIRECTIVES.highlightClass);
    app.directive("intro-scroll-to", DIRECTIVES.scrollTo);
    app.directive("intro-disable-interaction", DIRECTIVES.disableInteraction);
    app.directive("intro-hint", DIRECTIVES.hint);
    app.directive("intro-hint-position", DIRECTIVES.hintPosition);
    app.directive("intro-autostart", DIRECTIVES.autostart);
    app.directive("intro-if", DIRECTIVES.conditional);
  },
};

export default Plugin;
