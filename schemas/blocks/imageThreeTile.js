import {defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'
export default defineType({
  name: 'imageThreeTile',
  title: 'Image Three Tile',
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
        name: 'tiles',
        title: 'Tiles',
        type: 'array',
        description: 'Add tiles to the image three tile',
        of: [{
            type: 'object',
            name: 'tile',
            title: 'Tile',
            fields: [
                {
                    name: 'tallImages',
                    title: 'Tall Images',
                    type: 'boolean',
                    description: 'Enable for taller image display.',
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
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    description: 'Add a title.',
                },                {
                    name: 'content',
                    title: 'Content',
                    type: 'text',
                    description: 'Add content.',
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
        subtitle: 'Image Three Tile'
      }
    }
  }
})
