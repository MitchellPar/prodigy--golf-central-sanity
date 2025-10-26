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
        defineField({
            name: 'headerNav',
            title: 'Header Navigation',
            type: 'headerNav',
            validation: (Rule) => Rule.required(),
            group: 'navigation',
        }),
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