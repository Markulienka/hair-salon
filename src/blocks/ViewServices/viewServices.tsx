import { CMSLink } from '@/components/Link';
import { Media as MediaType } from '@/payload-types';
import { Media } from '@/components/Media';

export type ViewServicesLink = {
    link: {
        type?: 'reference' | 'custom' | null;
        newTab?: boolean | null;
        reference?: {
            relationTo: 'pages';
            value: string | number;
        } | null;
        url?: string | null;
        label: string;
    };
    id?: string | null;
};

export type ViewServicesProps = {
    title: string;
    subtitle: string;
    subsubtitle: string;
    image: string | MediaType;
    links?: ViewServicesLink[];
}

export const ViewServices: React.FC<ViewServicesProps> = ({
    title,
    subtitle,
    subsubtitle,
    image,
    links
}) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container px-4 mx-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                {title}
                            </h2>

                            <p className="text-base md:text-lg text-gray-500 mb-4">
                                {subtitle}
                            </p>

                            <p className="text-gray-400 mb-10">
                                {subsubtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                {links?.map(({ link, id }) => (
                                    <CMSLink
                                        key={id || link.url}
                                        type={link.type || 'custom'}
                                        reference={link.reference}
                                        url={link.url}
                                        newTab={link.newTab}
                                        appearance="default"
                                        className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full bg-primary text-white hover:bg-primary/90 transition-colors duration-200"
                                        label={link.label}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Media
                                imgClassName='object-cover w-full h-full'
                                resource={image}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}