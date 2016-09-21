import { compose, translate3d, skewX } from '../utils.js';
import type { Keyframe, Animation } from '../types';


const translateAndSkew = compose(
  translate3d,
  skewX
);

const easeIn: Keyframe = {
  animationTimingFunction: 'ease-out',
};

const lightSpeedOut = {
  from: {
    ...easeIn,
    opacity: 1,
  },
  to: {
    ...easeIn,
    transform: translateAndSkew(['100%', 0, 0], 30),
    opacity: 0,
  },
};

export default lightSpeedOut;
