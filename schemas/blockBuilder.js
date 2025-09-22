import {defineType} from 'sanity'

export default defineType({
  name: 'blockBuilder',
  title: 'Block Builder',
  type: 'array',
  of: [
    {
        type: 'hero',
    },
    {
        type: 'imageTextSplit',
    },
    {
        type: 'featureText',
    },
    {
        type: 'featureImage',
    },
    {
        type: 'events',
    },
    {
        type: 'slider',
    },
    {
        type: 'banner',
    },
    {
        type: 'cta',
    },
    {
        type: 'sliderFull',
    },
    {
        type: 'imageThreeTile',
    },
    {
        type: 'ctaSmall',
    },
    {
        type: 'sliderSmall',
    },
    {
        type: 'splitImage',
    },
    {
        type: 'sliderEvents',
    },
    {
        type: 'faq',
    },
    {
        type: 'contact',
    },
    {
        type: 'golf',
    },
    {
        type: 'membership',
    },
    {
        type: 'functionEmail',
    },
    {
        type: 'sessions',
    },
  ]
})
