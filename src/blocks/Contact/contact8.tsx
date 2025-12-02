import type { Media as MediaType } from '@/payload-types'

import { Media } from '@/components/Media'

export type ContactProps = {
  title: string;
  subtitle: string;
  email: string;
  place: string;
  address: string;
  image: string | MediaType | null;
}

const Contact8: React.FC<ContactProps> = ({ title, subtitle, email, place, address, image }) => {
  return (
    <section className="pt-12 pb-24">
      <div className="container">
        <div className="text-center">
          <h1 className="mb-3 text-5xl font-bold">{title}</h1>
          <p className="text-muted-foreground text-lg">
            {subtitle}
          </p>
        </div>
        <div className="mx-auto mt-24 grid max-w-7xl gap-4 md:grid-cols-2">
          <Media resource={image} />
          <div className="bg-accent flex flex-col gap-2 rounded-lg p-2">
            <div className="bg-background flex h-full flex-col justify-between gap-6 rounded-lg p-6">
              <p className="text-2xl">Email</p>
              <div className="flex flex-col">
                <a>{email}</a>
              </div>
            </div>
            <div className="bg-background flex h-full flex-col justify-between gap-6 rounded-md p-6">
              <p className="text-2xl">Offices</p>
              <div className="grid gap-8 md:grid-cols-2 md:gap-4">
                <div>
                  <p className="text-muted-foreground mb-2 text-xl md:mb-4">
                    {place}
                  </p>
                  <p>{address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact8 };
