import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        {
          label: 'Hero 8',
          value: 'hero8',
        },
      ],
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        condition: (_, { type } = {}) => type === 'hero8',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact', 'hero8'].includes(type),
      },
      relationTo: 'media',
      required: true,
      label: 'Image 1',
    },
    {
      name: 'media2',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => type === 'hero8',
      },
      relationTo: 'media',
      label: 'Image 2',
    },
    {
      name: 'media3',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => type === 'hero8',
      },
      relationTo: 'media',
      label: 'Image 3',
    },
  ],
  label: false,
}
