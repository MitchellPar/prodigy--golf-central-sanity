import { defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export default defineField({
    name: 'fpSettings',
    title: 'Settings',
    type: 'document',
    icon: CogIcon,
    groups: [
        {
          name: 'general',
          title: 'General',
          default: true,
        },
        {
          name: 'navigation',
          title: 'Navigation',
        },
        {
          name: 'seo',
          title: 'SEO',
        },
    ],

    fields: [
        defineField({
            name: 'siteName',
            title: 'Site Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
            group: 'general',
        }),
        {
          name: 'titleLeft',
          title: 'Title Left',
          type: 'text',
          description: 'Add a title left.',
          group: 'navigation',
      },
        {
          name: 'contentLeft',
          title: 'Content Left',
          type: 'text',
          description: 'Add content left.',
          group: 'navigation',
      },
        {
          name: 'titleRight',
          title: 'Title Right',
          type: 'text',
          description: 'Add a title right.',
          group: 'navigation',
      },
        {
          name: 'contentRight',
          title: 'Content Right',
          type: 'text',
          description: 'Add content right.',
          group: 'navigation',
      },
        {
          name: 'grabAGiftCardLink',
          title: 'Grab a Gift Card Link',
          type: 'string',
          description: 'Add a grab a gift card link.',
          group: 'navigation',
      },
        {
          name: 'bookNowLink',
          title: 'Book Now Link',
          type: 'string',
          description: 'Add a book now link.',
          group: 'navigation',
      },
        {
          name: 'facebookLink',
          title: 'Facebook Link ',
          type: 'string',
          description: 'Add a facebook link.',
          group: 'navigation',
      },
      {
          name: 'instagramLink',
          title: 'Instagram Link ',
          type: 'string',
          description: 'Add a instagram link.',
          group: 'navigation',
      },
        defineField({
            name: 'headerNav',
            title: 'Header Navigation',
            type: 'headerNav',
            validation: (Rule) => Rule.required(),
            group: 'navigation',
        }),
        defineField({
            name: 'seo',
            title: "SEO",
            type: "seo",
            group: "seo",
          }),
    ]
})