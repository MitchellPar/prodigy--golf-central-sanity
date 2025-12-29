import {defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'
export default defineType({
  name: 'mapCtaGc',
  title: 'Map CTA GC',
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
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'Add content.',
    },
    {
      name: 'hours',
      title: 'Hours',
      type: 'array',
      description: 'Add one or more days and their times.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Day',
              type: 'string',
              description: 'Enter the day (e.g., Monday)',
            },
            {
              name: 'time',
              title: 'Time',
              type: 'string',
              description: 'Enter the time (e.g., 9am - 5pm)',
            }
          ]
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
        subtitle: 'Map CTA GC'
      }
    }
  }
})
