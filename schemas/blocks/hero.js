import {defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'
export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Add a title.',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `${title}`,
        subtitle: 'Hero'
      }
    }
  }
})
