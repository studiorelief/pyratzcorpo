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

  gsap.set([elemDarkEye, elemBase, elemGlossyEye, elemRadar, elemBullet, elemRocket, elemGrille], {
    opacity: 0,
  });

  gsap.set([isText1, isText2, isText3, isText4], {
    opacity: 0,
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

  /**
   ** Step 1
   */

  ScrollTrigger.create({
    trigger: step1,
    start: '0% 75%',
    end: '100% 75%',
    markers: false,
    onEnter: () => {
      gsap.to(isText1, {
        opacity: 1,
      }),
        gsap.to([elemBase, elemGrille, elemRadar, elemBullet], {
          opacity: 1,
        });
    },
    onLeave: () => {
      gsap.to(isText1, {
        opacity: 0,
      }),
        gsap.to([elemRadar, elemBullet], {
          opacity: 0,
          duration: 0.5,
        });
    },
    onEnterBack: () => {
      gsap.to(isText1, {
        opacity: 1,
      }),
        gsap.to([elemGrille, elemRadar, elemBullet], {
          opacity: 1,
          duration: 0.5,
          scale: 1,
        });
      gsap.to(elemRocket, {
        opacity: 0,
        scale: 0,
        duration: 0,
      });
    },
    onLeaveBack: () => {
      gsap.to(isText1, {
        opacity: 0,
      }),
        gsap.to([elemGrille, elemRadar, elemBullet], {
          opacity: 1,
          duration: 0.5,
        });
    },
  });

  /**
   ** Step 2
   */

  ScrollTrigger.create({
    trigger: step2,
    start: '0% 75%',
    end: '15% 75%',
    markers: false,

    onEnter: () => {
      gsap.to(isText2, {
        opacity: 1,
      }),
        gsap.set(elemRocket, {
          scale: 0,
          opacity: 0,
        }),
        gsap.to(elemGrille, {
          opacity: 1,
          scale: 0.26,
        });
      gsap.to(elemRocket, {
        opacity: 1,
        scale: 0.2,
      });
    },
    onEnterBack: () => {
      gsap.to(isText2, {
        opacity: 1,
      }),
        gsap.set(elemRocket, {
          scale: 0.2,
          opacity: 0,
        }),
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
        opacity: 0,
        scale: 0,
      });
    },
  });

  let loopAnimation: GSAPAnimation | null = null; // Pour garder une référence à l'animation en boucle

  ScrollTrigger.create({
    trigger: step2,
    start: '15% 75%',
    end: '75% 75%',
    markers: false,

    onEnter: () => {
      gsap.to(elemGrille, {
        opacity: 0,
        scale: 0,
      });
      gsap.to(elemRocket, {
        opacity: 1,
        scale: 1,
        duration: 2,
        onComplete: () => {
          loopAnimation = gsap.to(elemRocket, {
            scale: 1.1,
            duration: 1,
            repeat: -1,
            yoyo: true,
          });
        },
      });
    },
    onEnterBack: () => {
      if (loopAnimation) loopAnimation.kill();
      gsap.to(elemRocket, {
        opacity: 1,
        scale: 1,
        duration: 1,
      });
    },
    onLeave: () => {
      if (loopAnimation) loopAnimation.kill();
      gsap.to(isText2, {
        opacity: 0,
      });
    },
    onLeaveBack: () => {
      if (loopAnimation) loopAnimation.kill();
      gsap.to(elemRocket, {
        opacity: 1,
        scale: 0.2,
        duration: 1,
      });
    },
  });

  /**
   ** Step 3
   */

  ScrollTrigger.create({
    trigger: step3,
    start: '-25% 75%',
    end: '100% 75%',
    markers: false,
    onEnter: () => {
      gsap.set(elemDarkEye, {
        scale: 0.25,
      });
      gsap.to(isText3, {
        opacity: 1,
      });
      gsap.to(isText3, {
        display: 'block',
      });
      gsap.to(elemRocket, {
        opacity: 0,
        scale: 2.5,
        duration: 2,
      });
      gsap.to(elemDarkEye, {
        opacity: 1,
        scale: 0.25,
        overwrite: 'auto',
      });
      gsap.to(elemDarkEye, {
        opacity: 1,
        scale: 1,
        duration: 4,
        rotation: 180,
        delay: 1,
        overwrite: 'auto',
      });
      gsap.to(elemDarkEye, {
        rotation: 360,
        duration: 30,
        ease: 'linear',
        repeat: -1,
        overwrite: 'auto',
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
      gsap.to(elemDarkEye, {
        rotation: 360,
        duration: 30,
        ease: 'linear',
        repeat: -1,
        overwrite: 'auto',
      });
    },
    onLeave: () => {
      gsap.to(isText3, {
        opacity: 0,
      });
      gsap.to(elemDarkEye, {
        opacity: 0,
        scale: 1,
        overwrite: 'auto',
      });
    },
    onLeaveBack: () => {
      gsap.to(isText3, {
        opacity: 0,
      });
      gsap.to(elemDarkEye, {
        opacity: 0,
        scale: 0,
        overwrite: 'auto',
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
      }),
        gsap.to(isText4, {
          display: 'block',
        }),
        gsap.to(elemGlossyEye, {
          opacity: 1,
        });
    },
    onEnterBack: () => {
      gsap.to(isText4, {
        opacity: 1,
      }),
        gsap.to(elemGlossyEye, {
          opacity: 1,
          scale: 1,
        });
    },
    onLeave: () => {
      gsap.to(isText4, {
        opacity: 0,
      }),
        gsap.to(elemGlossyEye, {
          opacity: 0,
        });
    },
    onLeaveBack: () => {
      gsap.to(isText4, {
        opacity: 0,
      }),
        gsap.to(elemGlossyEye, {
          opacity: 0,
        });
    },
  });
}
