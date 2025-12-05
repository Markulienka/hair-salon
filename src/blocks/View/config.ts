import { Block } from 'payload';
import { linkGroup } from '@/fields/linkGroup';

export const View: Block = {
    slug: 'view',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'subtitle',
            type: 'textarea',
            required: true,
        },
        {
            name: 'subsubtitle',
            type: 'textarea',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        linkGroup({
            overrides: {
                maxRows: 1,
            },
        }),
    ],
};

