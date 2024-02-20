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

    document.querySelectorAll('.founders-experience_cards').forEach(function (cardExp) {
      gsap.timeline({
        scrollTrigger: {
          markers: false,
          trigger: cardExp,
          start: '-25% 65%',
          end: '110% 65%',
          onEnter: () => {
            gsap.to(cardExp, {
              opacity: 1,
              scale: 1,
              duration: 0.15,
            });
          },
          onEnterBack: () => {
            gsap.to(cardExp, {
              opacity: 1,
              scale: 1,
              duration: 0.15,
            });
          },
          onLeave: () => {
            gsap.to(cardExp, {
              opacity: 0.4,
              scale: 0.9,
              duration: 0.15,
            });
          },
          onLeaveBack: () => {
            gsap.to(cardExp, {
              opacity: 0.4,
              scale: 0.9,
              duration: 0.15,
            });
          },
        },
      });
    });
  }
}

export function LaunchAnim() {
  const contentLaunch = document.querySelector('.founders-launch_content');

  if (contentLaunch && contentLaunch instanceof HTMLElement) {
    gsap.set('.founders-launch_cards', {
      opacity: 0.4,
      scale: 0.9,
      border: '1px solid rgba(255, 255, 255, 0)',
    });

    document.querySelectorAll('.founders-launch_cards').forEach(function (cardLaunch) {
      gsap.timeline({
        scrollTrigger: {
          markers: false,
          trigger: cardLaunch,
          start: '-25% 50%',
          end: '110% 50%',
          onEnter: () => {
            gsap.to(cardLaunch, {
              opacity: 1,
              scale: 1,
              duration: 0.15,
              border: '1px solid rgba(255, 255, 255, 0.1)',
            });
          },
          onEnterBack: () => {
            gsap.to(cardLaunch, {
              opacity: 1,
              scale: 1,
              duration: 0.15,
              border: '1px solid rgba(255, 255, 255, 0.1)',
            });
          },
          onLeave: () => {
            gsap.to(cardLaunch, {
              opacity: 0.4,
              scale: 0.9,
              duration: 0.15,
              border: '1px solid rgba(255, 255, 255, 0)',
            });
          },
          onLeaveBack: () => {
            gsap.to(cardLaunch, {
              opacity: 0.4,
              scale: 0.9,
              duration: 0.15,
              border: '1px solid rgba(255, 255, 255, 0)',
            });
          },
        },
      });
    });

    // Observer pour détecter les changements dans le layout et rafraîchir les triggers
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);
  }
}
