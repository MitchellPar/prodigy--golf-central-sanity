import {defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'
export default defineType({
  name: 'featureText',
  title: 'Feature Text',
  type: 'object',
  icon: TextIcon,
  fields: [
    {
        name: 'centered',
        title: 'Centered',
        type: 'boolean',
        description: 'Center align the content.',
        initialValue: false,
    },
    {
      name: 'titleLarge',
      title: 'Title Large',
      type: 'string',
      description: 'Add a title.',
    },
    {
      name: 'titleSmall',
      title: 'Title Small',
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
      name: 'scrollButton',
      title: 'Scroll Button',
      type: 'boolean',
      description: 'Add a scroll button.',
      initialValue: false,
    },
  ],




  


  preview: {
    select: {
      titleLarge: 'titleLarge',
      titleSmall: 'titleSmall',
      content: 'content',
    },
    prepare({titleLarge, titleSmall, content}) {
      return {
        title: titleLarge || titleSmall || content,
        subtitle: 'Feature Text'
      }
    }
  }
})
