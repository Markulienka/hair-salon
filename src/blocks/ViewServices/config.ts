import { Block } from 'payload';
import { linkGroup } from '@/fields/linkGroup';

export const ViewServices: Block = {
    slug: 'viewServices',
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

export default ViewServices;