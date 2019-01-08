import Vue from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

library.add(faThumbsUp);
library.add(faThumbsDown);
library.add(faChevronRight);
library.add(faChevronLeft);

// Register the component globally
Vue.component("font-awesome-icon", FontAwesomeIcon);
