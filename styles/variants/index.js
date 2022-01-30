
export const varsForm = {
  initial: {
    x: -30,
    opacity: 0,
    transition: {
      duration: 0.320
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.320
    }
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: {
      duration: 0.320
    }
  }
}

export const varsLanding = {
  initial: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.320
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.320
    }
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: {
      duration: 0.320
    }
  }
}

export const varsCardList = {
  initial: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  animate: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  }
}

export const varsCard = {
  initial: i => ({ y: 50, opacity: 0, transition: { delay: i * 0.075 } }),
  animate: i => ({ y: 0, opacity: 1, transition: { delay: i * 0.075 } }),
  exit: i => ({ y: -50, opacity: 0, transition: { delay: i * 0.075 } })
}

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}
