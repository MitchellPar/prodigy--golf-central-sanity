import {defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'
export default defineType({
  name: 'golf',
  title: 'Golf',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Add a title.',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `${title}`,
        subtitle: 'Golf Animated Block'
      }
    }
  }
})
