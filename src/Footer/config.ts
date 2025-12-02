import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      type: 'group',
      name: 'contactInfo',
      fields: [
        {
          name: 'address',
          type: 'textarea',
          required: true,
          admin: {
            description: 'Address information (supports multiple lines)'
          }
        },
        {
          name: 'phone',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'YouTube', value: 'youtube' },
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'https://example.com/your-profile'
          }
        },
      ],
      maxRows: 3,
    },
    {
      name: 'copyright',
      type: 'text',
      defaultValue: `© {year} All rights reserved.`,
      admin: {
        description: 'Use {year} to automatically insert the current year'
      }
    }
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}