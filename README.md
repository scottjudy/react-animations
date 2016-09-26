# react-animations


A collection of animations that can be used with any inline style library that supports using objects to define keyframe animations, such as Radium or Aphrodite. React-animations implements all animations from [animate.css](https://daneden.github.io/animate.css/).

[Check out the interactive demo](http://react-animations.herokuapp.com/).

### Usage

You can import each animation directly from the main package

```js
import { fadeIn } from 'react-animations'
```

or you can import a specific animation directly

```js
import fadeIn from 'react-animations/lib/fadeIn'
```


### Usage with Radium

```js
import { bounce } from 'react-animations';
import Radium from 'radium';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}
```

### Usage with Aphrodite

```js
import { bounce } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: '1s'
  }
})
```

## Animations

Below is a list of all available animations

`bouceOut`

`bounce`

`bounceIn`

`bounceInDown`

`bounceInLeft`

`bounceInRight`

`bounceInUp`

`bounceOutDown`

`bounceOutLeft`

`bounceOutRight`

`bounceOutUp`

`fadeIn`

`fadeInDown`

`fadeInDownBig`

`fadeInLeft`

`fadeInLeftBig`

`fadeInRight`

`fadeInRightBig`

`fadeInUp`

`fadeInUpBig`

`fadeOut`

`fadeOutDown`

`fadeOutDownBig`

`fadeOutLeft`

`fadeOutLeftBig`

`fadeOutRight`

`fadeOutRightBig`

`fadeOutUp`

`fadeOutUpBig`

`flash`

`flip`

`flipInX`

`flipInY`

`flipOutX`

`flipOutY`

`headShake`

`hinge`

`jello`

`lightSpeedIn`

`lightSpeedOut`

`pulse`

`rollIn`

`rollOut`

`rotateIn`

`rotateInDownLeft`

`rotateInDownRight`

`rotateInUpLeft`

`rotateInUpRight`

`rotateOut`

`rotateOutDownLeft`

`rotateOutDownRight`

`rotateOutUpLeft`

`rotateOutUpRight`

`rubberBand`

`shake`

`slideInDown`

`slideInLeft`

`slideInRight`

`slideInUp`

`slideOutDown`

`slideOutLeft`

`slideOutRight`

`slideOutUp`

`swing`

`tada`

`wobble`

`zoomIn`

`zoomInDown`

`zoomInLeft`

`zoomInRight`

`zoomInUp`

`zoomOut`

`zoomOutDown`

`zoomOutLeft`

`zoomOutRight`

`zoomOutUp`


## Merge

react-animations also exports a `merge` function that takes two animations and returns a new animation that combines the transforms from both. This is experimental and wont work (well) with animations that have conflicting transforms, such as `fadeIn` and `fadeOut`. The merged animation can be used just like any of the imported animations.


```js

import { merge, tada, flip } from 'react-animations';
const tadaFlip = merge(tada, flip);
```
