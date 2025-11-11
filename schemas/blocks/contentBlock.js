import {defineType} from 'sanity'
import {BlockElementIcon} from '@sanity/icons'
export default defineType({
  name: 'contentBlock',
  title: 'Content Block',
  type: 'object',
  icon: BlockElementIcon,
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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `${title}`,
        subtitle: 'Content Block'
      }
    }
  }
})
