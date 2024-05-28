import {device} from './breakpoints'

export const media = Object.keys(device).reduce(
  (acc: {[key: string]: Function}, label) => {
    acc[label] = (...args: TemplateStringsArray) => args.join('')
    return acc
  },
  {}
)
