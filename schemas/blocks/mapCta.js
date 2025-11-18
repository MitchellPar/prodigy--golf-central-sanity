import {defineType} from 'sanity'
import {SplitVerticalIcon} from '@sanity/icons'
export default defineType({
  name: 'mapCta',
  title: 'Map CTA',
  type: 'object',
  icon: SplitVerticalIcon,
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
        subtitle: 'Map CTA'
      }
    }
  }
})
