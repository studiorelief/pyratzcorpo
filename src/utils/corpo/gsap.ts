import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function approachAnim() {
  /**
   ** Éléments
   */

  const step1: string = '.approach_step-percent.is-1';
  const step2: string = '.approach_step-percent.is-2';
  const step3: string = '.approach_step-percent.is-3';
  const step4: string = '.approach_step-percent.is-4';

  const isText1: string = '.is-text-1';
  const isText2: string = '.is-text-2';
  const isText3: string = '.is-text-3';
  const isText4: string = '.is-text-4';

  const elemDarkEye: string = '.approach_image.is-dark-eye';
  const elemBase: string = '.approach_image.is-base';
  const elemGlossyEye: string = '.approach_image.is-glossy-eye';
  const elemRadar: string = '.approach_image.is-radar';
  const elemBullet: string = '.approach_image.is-bullet';
  const elemRocket: string = '.approach_image.is-rocket';
  const elemGrille: string = '.approach_image.is-grille';

  /**
   ** Initialisation
   */

  gsap.set(
    [
      elemDarkEye,
      elemBase,
      elemGlossyEye,
      elemRadar,
      elemBullet,
      elemRocket,
      elemGrille,
      isText1,
      isText2,
      isText3,
      isText4,
    ],
    {
      opacity: 0,
    }
  );

  /**
   ** Step 1
   *! En cours
   */

  ScrollTrigger.create({
    trigger: step1,
    start: '0% 75%',
    end: '100% 75%',
    markers: false,
    onEnter: () => {
      gsap.to(isText1, {
        opacity: 1,
      });
      gsap.to([elemBase, elemGrille, elemRadar, elemBullet], {
        opacity: 1,
      });
      gsap.to(elemRadar, {
        rotation: -360,
        duration: 2,
        ease: 'linear',
        repeat: -1,
      });
      gsap.to(elemBullet, {
        rotation: -360,
        duration: 30,
        ease: 'linear',
        repeat: -1,
      });
    },
    onLeave: () => {
      gsap.to(isText1, {
        opacity: 0,
      });
      gsap.to([elemRadar, elemBullet], {
        opacity: 0,
        duration: 0.25,
      });
      gsap.killTweensOf([elemRadar, elemBullet], { rotation: true });
      gsap.set([elemRadar, elemBullet], { rotation: 0 });
    },
    onEnterBack: () => {
      gsap.to(isText1, {
        opacity: 1,
      });
      gsap.to([elemGrille, elemRadar, elemBullet], {
        opacity: 1,
        duration: 0.5,
        scale: 1,
      });
      gsap.to(elemRadar, {
        rotation: -360,
        duration: 2,
        ease: 'linear',
        repeat: -1,
      });
      gsap.to(elemBullet, {
        rotation: -360,
        duration: 30,
        ease: 'linear',
        repeat: -1,
      });
    },
    onLeaveBack: () => {
      gsap.killTweensOf([elemRadar, elemBullet], { rotation: true });
      gsap.set([elemRadar, elemBullet], { rotation: 0 });
    },
  });

  ScrollTrigger.create({
    trigger: step1,
    start: '0% 75%',
    end: '100% 75%',
    scrub: true,
    markers: false,
    onUpdate: (self) => {
      const { progress } = self;
      gsap.to('.approach_process-line.is-step-1', {
        width: progress * 100 + '%',
      });
    },
  });

  /**
   ** Step 2
   *! En cours
   */

  ScrollTrigger.create({
    trigger: step2,
    start: '0% 75%',
    end: '15% 75%',
    markers: false,

    onEnter: () => {
      gsap.to([elemRadar, elemBullet], {
        opacity: 0,
        duration: 0.25,
      });
      gsap.to(isText2, {
        opacity: 1,
      });
      gsap.to(elemGrille, {
        opacity: 1,
        scale: 0.26,
      });
      gsap.to(elemRocket, {
        opacity: 1,
        scale: 0,
      });
      gsap.to(elemRocket, {
        opacity: 1,
        scale: 0.25,
      });
    },
    onLeave: () => {
      gsap.to(elemGrille, {
        opacity: 0,
        scale: 0,
      });
      gsap.to(elemRocket, {
        scale: 1,
        duration: 2,
        onComplete: () => {
          gsap.to(elemRocket, {
            scale: 1.1,
            duration: 1.5,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
          });
        },
      });
    },
    onEnterBack: () => {
      gsap.killTweensOf(elemRocket, { scale: true, opacity: true });
      gsap.to(elemRocket, {
        opacity: 1,
        scale: 0.25,
      });
      gsap.to(elemGrille, {
        opacity: 1,
        scale: 0.26,
      });
    },
    onLeaveBack: () => {
      gsap.to(isText2, {
        opacity: 0,
      });
      gsap.to(elemRocket, {
        opacity: 1,
        scale: 0,
        duration: 0.5,
      });
    },
  });

  ScrollTrigger.create({
    trigger: step2,
    start: '2.5% 75%',
    end: '100% 75%',
    scrub: true,
    markers: false,
    onUpdate: (self) => {
      const { progress } = self;
      gsap.to('.approach_process-line.is-step-2', {
        width: progress * 100 + '%',
      });
    },
  });

  /* ScrollTrigger.create({
    trigger: step2,
    start: '30% 75%',
    end: '100% 75%',
    scrub: true,
    markers: true,
    onUpdate: (self) => {
      const { progress } = self;

      gsap.to(elemDarkEye, {
        opacity: progress,
      });
    },
  }); */

  /**
   ** Step 3
   */

  ScrollTrigger.create({
    trigger: step3,
    start: '0% 75%',
    end: '100% 75%',
    markers: false,
    onEnter: () => {
      gsap.killTweensOf(elemRocket, { scale: true, opacity: true });
      gsap.to(isText2, {
        opacity: 0,
      });
      gsap.to(isText3, {
        opacity: 1,
      });
      gsap.set(elemDarkEye, {
        scale: 0.25,
        opacity: 1,
      });
      gsap.to(elemRocket, {
        opacity: 0,
        scale: 2.5,
        duration: 2,
      });
      gsap.to(elemDarkEye, {
        opacity: 1,
        scale: 1,
        duration: 4,
        delay: 0,
      });
      gsap.to(elemDarkEye, {
        rotation: 360,
        duration: 15,
        ease: 'linear',
        repeat: -1,
      });
    },
    onLeave: () => {
      gsap.to(isText3, {
        opacity: 0,
      });
      gsap.to(elemDarkEye, {
        opacity: 0,
        scale: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(isText3, {
        opacity: 1,
      });
      gsap.to(elemDarkEye, {
        opacity: 1,
        scale: 1,
      });
      gsap.set(elemDarkEye, {
        rotation: 0,
      });
      gsap.to(elemDarkEye, {
        rotation: 360,
        duration: 25,
        ease: 'linear',
        repeat: -1,
      });
    },
    onLeaveBack: () => {
      gsap.to(isText2, {
        opacity: 1,
      });
      gsap.to(isText3, {
        opacity: 0,
      });
      gsap.killTweensOf(elemDarkEye, { rotation: true, scale: true });

      gsap.to(elemDarkEye, {
        opacity: 0,
        scale: 0,
      });
      gsap.killTweensOf(elemRocket, { scale: true, opacity: true });

      gsap.to(elemRocket, {
        opacity: 1,
        scale: 1,
        onComplete: () => {
          gsap.to(elemRocket, {
            scale: 1.1,
            duration: 1,
            repeat: -1,
            yoyo: true,
          });
        },
      });
    },
  });

  ScrollTrigger.create({
    trigger: step3,
    start: '2.5% 75%',
    end: '100% 75%',
    scrub: true,
    markers: false,
    onUpdate: (self) => {
      const { progress } = self;
      gsap.to('.approach_process-line.is-step-3', {
        width: progress * 100 + '%',
      });
    },
  });

  /**
   ** Step 4
   */

  ScrollTrigger.create({
    trigger: step4,
    start: '0% 75%',
    end: '100% 75%',
    markers: false,
    onEnter: () => {
      gsap.to(isText4, {
        opacity: 1,
      });
      gsap.to(elemDarkEye, {
        opacity: 0,
        scale: 1,
        overwrite: true,
      });
      gsap.to(isText4, {
        display: 'block',
      });
      gsap.to(elemGlossyEye, {
        opacity: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(isText4, {
        opacity: 1,
      });
      gsap.to(elemGlossyEye, {
        opacity: 1,
        scale: 1,
      });
    },
    onLeave: () => {
      gsap.to(isText4, {
        opacity: 0,
      });
      gsap.to(elemGlossyEye, {
        opacity: 0,
      });
    },
    onLeaveBack: () => {
      gsap.to(isText4, {
        opacity: 0,
      });
      gsap.to(elemGlossyEye, {
        opacity: 0,
      });
    },
  });

  ScrollTrigger.create({
    trigger: step4,
    start: '2.5% 75%',
    end: '100% 75%',
    scrub: true,
    markers: false,
    onUpdate: (self) => {
      const { progress } = self;
      gsap.to('.approach_process-line.is-step-4', {
        width: progress * 100 + '%',
      });
    },
  });
}
