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
                {title: 'No Padding', value: 'noPadding'},
                {title: 'No Padding Last', value: 'noPaddingLast'}
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
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
      description: 'Add a content title.',
    },
    {
      name: 'contentAltTitle',
      title: 'Content Alt Title',
      type: 'string',
      description: 'Add a content alt title.',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'Add content.',
    },
    {
      name: 'bucketPriceTable',
      title: 'Bucket Price Table',
      type: 'boolean',
      description: 'Add a bucket price table.',
      initialValue: false,
    },
    {
      name: 'lists',
      title: 'Lists',
      type: 'array',
      description: 'Add lists to the lists',
      of: [{
          type: 'object',
          name: 'list',
          title: 'List',
          fields: [
              {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  description: 'Add a title.',
              },
              {
                  name: 'listItems',
                  title: 'List Items',
                  type: 'array',
                  description: 'Add items to the list',
                  of: [{
                      type: 'object',
                      name: 'listItem',
                      title: 'List Item',
                      fields: [
                          {
                              name: 'text',
                              title: 'Text',
                              type: 'string',
                              description: 'Add list item text.',
                          },
                      ]
                  }]
              },
          ]
      }]
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
    {
        name: 'linkTextExtra',
        title: 'LinkText Extra',
        type: 'string',
        description: 'Add link text.',
    },
    {
        name: 'buttonLinkExtra',
        title: 'Button Link Extra',
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
