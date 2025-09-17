import {defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'
export default defineType({
  name: 'slider',
  title: 'Slider',
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
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    description: 'Add a title.',
                },
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
                {
                    name: 'linkText',
                    title: 'LinkText',
                    type: 'string',
                    description: 'Add link text.',
                },
                {
                    name: 'buttonLink',
                    title: 'Button Link',
                    type: 'link',
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
        subtitle: 'Slider'
      }
    }
  }
})
