import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    defineArrayMember({
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'Small', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
        {title: 'Body Small', value: 'body'},
      ],
      marks: {
        decorators: [
          {
            title: 'Italic',
            value: 'em',
          },
          {
            title: 'Strong',
            value: 'strong',
          },
        ],
      },
      type: 'block',
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true}
    }),
    // { type: 'button' }
  ],
})
