import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fpPage',
  title: '4 Pines Pages',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'content',
    }),
    // defineField({
    //   name: 'parent',
    //   title: 'Parent',
    //   type: 'reference',
    //   to: [{type: 'page'}],
    //   group: 'content',
    // }),
    defineField({
      name: 'blockBuilder',
      title: 'Block Builder',
      type: 'blockBuilder',
      group: 'content',
    }),

    // defineField({
    //   name: 'mainImage',
    //   title: 'Main image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   group: 'content',
    // }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'content',
    }),
    // defineField({
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // }),
    defineField({
      name: 'seo',
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection, subtitle: '4 Pines'}
    },
  },
})
