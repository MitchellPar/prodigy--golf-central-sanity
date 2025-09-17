import {defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'
export default defineType({
  name: 'splitImage',
  title: 'Split Image',
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
        name: 'imageLeft',
        title: 'Image Left', 
        type: 'image',
        description: 'Add an image for the left side.',
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
        name: 'imageRight',
        title: 'Image Right', 
        type: 'image',
        description: 'Add an image for the right side.',
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
        name: 'iconLeft',
        title: 'Icon Left', 
        type: 'image',
        description: 'Add an icon for the left side.',
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
        name: 'iconRight',
        title: 'Icon Right', 
        type: 'image',
        description: 'Add an icon for the right side.',
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
        subtitle: 'Split Image'
      }
    }
  }
})
