import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeIn = (el, delay = 0, duration = 0.6) => {
  gsap.from(el, { opacity: 0, y: 20, delay, duration, ease: 'power3.out' });
};

export const fadeInStagger = (els, stagger = 0.1, delay = 0, duration = 0.6) => {
  gsap.from(els, { opacity: 0, y: 20, stagger, delay, duration, ease: 'power3.out' });
};

export const fadeInTrigger = (el, trigger = el, duration = 0.6, yOffset = 20) => {
  gsap.from(el, {
    opacity: 0,
    y: yOffset,
    duration,
    ease: 'power3.out',
    scrollTrigger: { trigger, start: 'top 80%' }
  });
};

export const fadeInStaggerTrigger = (els, trigger = els[0], stagger = 0.1, duration = 0.6) => {
  gsap.from(els, {
    opacity: 0,
    y: 20,
    stagger,
    duration,
    ease: 'power3.out',
    scrollTrigger: { trigger, start: 'top 80%' }
  });
};

export const pulseAnimation = (el) => {
  gsap.to(el, { scale: 1.05, duration: 0.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
};

export const floatAnimation = (el, y = 15) => {
  gsap.to(el, { y, duration: 2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
};
