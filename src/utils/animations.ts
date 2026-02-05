import { Variants } from 'framer-motion'

// Staggered Children Animation - for grid items appearing sequentially
export const staggeredChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggeredItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Floating Animation - for subtle up/down movement
export const floating: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const floatingSlow: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Text Reveal Animation - for paragraph text
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const textRevealStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Scale on Hover - for buttons/cards
export const scaleOnHover = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  whileTap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
}

export const scaleOnHoverLarge = {
  whileHover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  whileTap: {
    scale: 0.9,
    transition: {
      duration: 0.1,
    },
  },
}

// Rotate 3D - for product cards
export const rotate3D = (isFlipped: boolean) => ({
  rotateY: isFlipped ? 180 : 0,
  transition: {
    duration: 0.7,
    ease: 'easeInOut',
  },
})

// Bounce Animation - for cart icon when item added
export const bounce: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.3, 1],
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export const bounceLarge: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.5, 1],
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Page Transitions
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
}

export const pageTransitionFade: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
}

// Image Load Effects
export const imageLoad: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const imageFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Scroll-triggered animations
export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const scrollRevealLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const scrollRevealRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Slide animations
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Pulse animation
export const pulse: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}









