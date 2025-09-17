import {defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'
export default defineType({
  name: 'imageTextSplit',
  title: 'Image Text Split',
  type: 'object',
  icon: SplitVerticalIcon,
  fields: [
    {
        name: 'reverse',
        title: 'Reverse',
        type: 'string',
        initialValue: 'standard',
        options: {
            list: [
                {title: 'Standard', value: 'standard'},
                {title: 'Reverse', value: 'reverse'},
                {title: 'Reverse Extra Padding', value: 'reverseExtraPadding'}
            ],
            layout: 'radio'
        },
        description: 'Choose the layout type.',
    },
    {
        name: 'layout',
        title: 'Layout',
        type: 'string',
        initialValue: 'standard',
        options: {
            list: [
                {title: 'Standard Padding', value: 'standard'},
                {title: 'Medium Padding', value: 'medium'}, 
                {title: 'Small Padding', value: 'small'}, 
                {title: 'First Item Padding', value: 'firstItem'},
                {title: 'No Padding', value: 'noPadding'}
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
    // {
    //     name: 'content',
    //     title: 'Content',
    //     type: 'body',
    //     description: 'Add content.',
    // },
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
        subtitle: 'Image Text Split'
      }
    }
  }
})
