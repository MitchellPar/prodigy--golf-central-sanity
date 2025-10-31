import {defineType} from 'sanity'
import {BlockElementIcon} from '@sanity/icons'
export default defineType({
  name: 'banner',
  title: 'Banner',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    {
        name: 'layout',
        title: 'Layout',
        type: 'string',
        initialValue: 'standard',
        options: {
            list: [
                {title: 'Standard Padding', value: 'standard'},
                {title: 'Small Padding', value: 'small'}, 
                {title: 'First Item Padding', value: 'firstItem'}
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
      type: 'text',
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
        name: 'content',
        title: 'Content',
        type: 'text',
        description: 'Add content.',
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
      subTitle: 'subTitle',
      content: 'content',
    },
    prepare({title, subTitle, content}) {
      const previewTitle = title || subTitle || content
      return {
        title: previewTitle || 'Banner',
        subtitle: 'Banner'
      }
    }
  }
})
