import { CMSLink } from '@/components/Link';

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
    links?: ViewServicesLink[];
}

export const ViewServices: React.FC<ViewServicesProps> = ({ title, subtitle, subsubtitle, links }) => {
    return (
        <section className="py-12 bg-white">
            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {title}
                    </h2>

                    <p className="text-base md:text-lg text-gray-500 mb-4 max-w-3xl mx-auto">
                        {subtitle}
                    </p>

                    <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                        {subsubtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
        </section>
    );
}