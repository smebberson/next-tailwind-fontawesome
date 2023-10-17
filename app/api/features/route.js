import { NextResponse } from 'next/server';

import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons/faSwatchbook';
import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket';

export const runtime = 'edge';

export const GET = () =>
    NextResponse.json([
        {
            description:
                'Comes pre-installed with Font Awesome, Next.js, Prettier and Tailwind CSS.',
            icon: faCode,
            title: 'Development made-easy',
        },
        {
            description:
                'Combine Font Awesome and Tailwind CSS to create great looking pages.',
            icon: faSwatchbook,
            title: 'Stylish looks',
        },

        {
            description:
                'Take advantage of Next.js for lightning fast pages out of the box.',
            icon: faRocket,
            title: 'Fast performance',
        },
    ]);
