import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeIn = (element, delay = 0, duration = 0.6) => {
  gsap.from(element, {
    opacity: 0,
    y: 20,
    duration,
    delay,
    ease: 'power3.out',
  });
};

export const fadeInStagger = (elements, staggerTime = 0.1, delay = 0, duration = 0.6) => {
  gsap.from(elements, {
    opacity: 0,
    y: 20,
    stagger: staggerTime,
    duration,
    delay,
    ease: 'power3.out',
  });
};

export const fadeInTrigger = (element, triggerEl = null, duration = 0.6, yOffset = 20) => {
  gsap.from(element, {
    opacity: 0,
    y: yOffset,
    duration,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: triggerEl || element,
      start: 'top 80%',
    },
  });
};

export const fadeInStaggerTrigger = (elements, triggerEl = null, staggerTime = 0.1, duration = 0.6) => {
  gsap.from(elements, {
    opacity: 0,
    y: 20,
    stagger: staggerTime,
    duration,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: triggerEl || elements[0],
      start: 'top 80%',
    },
  });
};

export const pulseAnimation = (element) => {
  gsap.to(element, {
    scale: 1.05,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

export const floatAnimation = (element, yAmount = 15) => {
  gsap.to(element, {
    y: yAmount,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};
