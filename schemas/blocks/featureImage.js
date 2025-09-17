import {defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'
export default defineType({
  name: 'featureImage',
  title: 'Feature Image',
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
        name: 'icon',
        title: 'Icon', 
        type: 'image',
        description: 'Add an icon.',
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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `${title}`,
        subtitle: 'featureImage'
      }
    }
  }
})
