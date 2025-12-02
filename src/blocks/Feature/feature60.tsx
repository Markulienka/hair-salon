import type { Media as MediaType } from '@/payload-types'

import { Media } from '@/components/Media'

export type FeatureProps = {
  title: string;
  subtitle: string;
  image: string | MediaType | null;
}

const Feature60: React.FC<FeatureProps> = ({ title, subtitle, image }) => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <div className="mb-6 md:mb-8 lg:mb-0">
              <Media resource={image} />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
            <div>
              <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                {title}
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature60 };