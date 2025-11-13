import { defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export default defineField({
    name: 'lpSettings',
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
          name: 'bookGolfLink',
          title: 'Book Golf Link',
          type: 'string',
          description: 'Add a book golf link.',
          group: 'navigation',
      },
        {
          name: 'bookBreweryLink',
          title: 'Book Brewery Link',
          type: 'string',
          description: 'Add a book brewery link.',
          group: 'navigation',
      },
        {
          name: 'facebookLinkOne',
          title: 'Facebook Link One',
          type: 'string',
          description: 'Add a facebook link.',
          group: 'navigation',
      },
      {
          name: 'instagramLinkOne',
          title: 'Instagram Link One',
          type: 'string',
          description: 'Add a instagram link.',
          group: 'navigation',
      },
        {
          name: 'facebookLinkTwo',
          title: 'Facebook Link Two',
          type: 'string',
          description: 'Add a facebook link.',
          group: 'navigation',
      },
      {
          name: 'instagramLinkTwo',
          title: 'Instagram Link Two',
          type: 'string',
          description: 'Add a instagram link.',
          group: 'navigation',
      },
        defineField({
            name: 'seo',
            title: "SEO",
            type: "seo",
            group: "seo",
          }),
    ]
})