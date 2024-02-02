import './index.css';

import { greetUser } from '$utils/greet';
import { approachAnim } from '$utils/gsap';
import { loadModelViewerScript } from '$utils/loadModalViewer';
import { homeSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);

  /**
   * * Load Script
   * TODO : Page launcher
   */

  loadModelViewerScript();
  homeSwiper();
  approachAnim();
});
