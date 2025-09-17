import {defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'
export default defineType({
  name: 'events',
  title: 'Events',
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
      name: 'altTitle',
      title: 'Alt Title',
      type: 'string',
      description: 'Add a alt title.',
    },
    {
        name: 'events',
        title: 'Events',
        type: 'array',
        description: 'Add events to the events',
        of: [{
            type: 'object',
            name: 'event',
            title: 'Event',
            fields: [
                {
                    name: 'month',
                    title: 'Month',
                    type: 'string',
                    description: 'Add a month.',
                },
                {
                    name: 'day',
                    title: 'Day',
                    type: 'string',
                    description: 'Add a day.',
                },
                {
                    name: 'time',
                    title: 'Time',
                    type: 'string',
                    description: 'Add a time.',
                },
                {
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                    description: 'Add a name.',
                },
                {
                    name: 'category',
                    title: 'Category',
                    type: 'string',
                    description: 'Add a category.',
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
                //     name: 'linkText',
                //     title: 'LinkText',
                //     type: 'string',
                //     description: 'Add link text.',
                // },
                // {
                //     name: 'buttonLink',
                //     title: 'Button Link',
                //     type: 'link',
                // },
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
        subtitle: 'Events'
      }
    }
  }
})
