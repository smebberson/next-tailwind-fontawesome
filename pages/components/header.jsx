import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons/faSwatchbook';
import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket';

const features = [
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
];

export default function Header() {
    return (
        <div className="bg-white">
            <div className="relative pb-32 bg-emerald-500">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-emerald-900 tracking-wide uppercase">
                            Start strong
                        </h2>
                        <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Start with a strong foundation.
                        </p>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-emerald-50">
                            Use this as a starting point for building websites
                            with Next.js, Tailwind CSS and Font Awesome. Build
                            whatever you like.
                        </p>
                    </div>
                </div>
            </div>
            <section className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8">
                <h2 className="sr-only" id="features-heading">
                    Features
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                    {features.map((feature, index) => (
                        <div
                            className="flex flex-col bg-white rounded-2xl shadow-xl"
                            key={index}
                        >
                            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                                <div className="absolute top-0 p-5 inline-block bg-emerald-900 rounded-xl shadow-lg transform -translate-y-1/2">
                                    <FontAwesomeIcon
                                        icon={feature.icon}
                                        className="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="mt-4 text-base text-gray-500">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="flex align-center justify-center">
                <a
                    className="bg-emerald-500 rounded-md p-4 text-xl text-white font-bold shadow-xl"
                    href="https://github.com/smebberson/next-tailwind-fontawesome"
                    rel="noreferrer"
                    target="_blank"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
}
