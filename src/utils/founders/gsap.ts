import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function experienceAnim() {
  const contentElement = document.querySelector('.founders-experience_content');

  if (contentElement && contentElement instanceof HTMLElement) {
    gsap.set('.founders-experience_cards', {
      opacity: 0.4,
      scale: 0.9,
    });
    gsap.to('.founders-experience_line-wrapper', {
      scrollTrigger: {
        markers: false,
        trigger: '.founders-experience_content',
        start: '0% 65%',
        end: '150% 65%',
        scrub: 0,
      },
      y: '60rem',
    });
    document.querySelectorAll('.founders-experience_cards').forEach(function (cardExp) {
      gsap.to(cardExp, {
        scrollTrigger: {
          trigger: cardExp,
          start: '0% 65%',
          end: '150% 65%',
          scrub: 1,
        },
        opacity: 1,
        scale: 1,
      });
    });
  }
}

export function launchAnim() {
  const contentElement = document.querySelector('.founders-experience_content');

  if (contentElement && contentElement instanceof HTMLElement) {
    gsap.set('.founders-launch_cards', {
      opacity: 0.4,
      scale: 0.9,
      border: '1px solid rgba(255, 255, 255, 0)',
    });
    document.querySelectorAll('.founders-launch_cards').forEach(function (cardLaunch) {
      gsap.to(cardLaunch, {
        scrollTrigger: {
          markers: false,
          trigger: cardLaunch,
          start: '0% 65%',
          end: '100% 65%',
          scrub: 1,
        },
        opacity: 1,
        scale: 1,
        border: '1px solid rgba(255, 255, 255, 0.1)',
      });
    });
  }
}
