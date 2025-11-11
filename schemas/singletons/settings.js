import { defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export default defineField({
    name: 'settings',
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
          name: 'bookNowLink',
          title: 'Book Now Link',
          type: 'string',
          description: 'Add a book now link.',
          group: 'navigation',
      },
        {
          name: 'grabAGiftCardLink',
          title: 'Grab a Gift Card Link',
          type: 'string',
          description: 'Add a grab a gift card link.',
          group: 'navigation',
      },
        defineField({
            name: 'headerNav',
            title: 'Header Navigation',
            type: 'headerNav',
            validation: (Rule) => Rule.required(),
            group: 'navigation',
        }),
        {
          name: 'facebookLink',
          title: 'Facebook Link',
          type: 'string',
          description: 'Add a facebook link.',
          group: 'navigation',
      },
      {
          name: 'instagramLink',
          title: 'Instagram Link',
          type: 'string',
          description: 'Add a instagram link.',
          group: 'navigation',
      },
      {
          name: 'address',
          title: 'Address',
          type: 'text',
          description: 'Add an address.',
          group: 'navigation',
      },
      {
          name: 'phone',
          title: 'Phone',
          type: 'string',
          description: 'Add a phone number.',
          group: 'navigation',
      },
      {
          name: 'emailLink',
          title: 'Email Link',
          type: 'string',
          description: 'Add an email link.',
          group: 'navigation',
      },
        defineField({
            name: 'footerNav',
            title: 'Footer Navigation',
            type: 'footerNav',
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