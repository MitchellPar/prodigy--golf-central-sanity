import {defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'
export default defineType({
  name: 'ctaSmall',
  title: 'CTA Small',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      initialValue: 'standard',
      options: {
          list: [
              {title: 'Standard Padding', value: 'standard'},
              {title: 'Negative Padding', value: 'negative'}, 
          ],
          layout: 'radio'
      },
      description: 'Padding layout options.',
    },
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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `${title}`,
        subtitle: 'CTA Small'
      }
    }
  }
})
