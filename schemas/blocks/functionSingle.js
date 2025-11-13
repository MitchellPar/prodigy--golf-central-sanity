import {defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'
export default defineType({
  name: 'functionSingle',
  title: 'Function Single',
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
        name: 'functionTiles',
        title: 'Function Tiles',
        type: 'array',
        description: 'Add function tiles.',
        of: [{
            type: 'object',
            name: 'functionTile',
            title: 'Function Tile',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    description: 'Add a title.',
                },
                {
                    name: 'content',
                    title: 'Content',
                    type: 'text',
                    description: 'Add content.',
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
                    title: 'Link Text Extra',
                    type: 'string',
                    description: 'Add link text extra.',
                },
                {
                    name: 'buttonLinkExtra',
                    title: 'Button Link Extra',
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
        subtitle: 'Function Single'
      }
    }
  }
})
