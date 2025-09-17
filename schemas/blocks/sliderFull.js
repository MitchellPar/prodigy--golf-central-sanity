import {defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'
export default defineType({
  name: 'sliderFull',
  title: 'Slider Full',
  type: 'object',
  icon: SplitVerticalIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Add a title.',
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
      description: 'Add a sub title.',
    },
    {
        name: 'slides',
        title: 'Slides',
        type: 'array',
        description: 'Add slides to the slider',
        of: [{
            type: 'object',
            name: 'slide',
            title: 'Slide',
            fields: [
                {
                    name: 'image',
                    title: 'Image', 
                    type: 'image',
                    description: 'Add an image.',
                    options: {
                      hotspot: true
                    },
                    fields: [
                      {
                        name: 'alt',
                        type: 'string', 
                        description: 'Add an alt-tag.',
                        validation: Rule => Rule.required()
                      }
                    ]
                },
            ]
        }]
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `${title}`,
        subtitle: 'Slider Full'
      }
    }
  }
})
