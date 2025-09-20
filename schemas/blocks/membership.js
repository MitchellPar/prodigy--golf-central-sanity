import {defineType} from 'sanity'
import {BinaryDocumentIcon} from '@sanity/icons'
export default defineType({
  name: 'membership',
  title: 'Membership',
  type: 'object',
  icon: BinaryDocumentIcon,
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
        subtitle: 'Membership'
      }
    }
  }
})
