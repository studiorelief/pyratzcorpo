import './index.css';

import { approachAnim } from '$utils/corpo/gsap';
import { experienceAnim, LaunchAnim } from '$utils/founders/gsap';
import { loadModelViewerScript } from '$utils/loadModalViewer';
import { videoLoop } from '$utils/loadScript';
import { homeSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  /**
   * * Load Script
   * TODO : Page launcher
   */

  loadModelViewerScript();
  videoLoop();

  if (window.location.pathname === '/') {
    homeSwiper();
    approachAnim();
  }

  if (window.location.pathname.includes('/founders')) {
    experienceAnim();
    LaunchAnim();
  }
});
