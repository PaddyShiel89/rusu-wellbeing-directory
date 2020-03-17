// All durations are numbers in milliseconds to make them compatible with react-bootstrap's collapse timeout prop. Units will need to be added
const duration = {
  default: 200,
  collapse: 350,
}

const timingFunction = {
  default: `ease-in-out`,
  collapse: `ease`,
}

const base = `all ${duration.default}ms ${timingFunction.default}`
const collapse = `height ${duration.collapse}ms ${timingFunction.collapse}`

export default {
  base: base,
  collapse: collapse,
  duration: duration,
  timingFunction: timingFunction,
}