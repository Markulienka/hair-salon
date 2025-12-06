'use client'

import { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

const Hero8: React.FC<Page['hero']> = ({ title, richText, links, media, media2, media3 }) => {
  return (
    <section className="py-6">
      <div className="border-muted overflow-hidden border-b w-full">
        <div className="container">
          <div className="mx-auto flex max-w-7xl flex-col">
            <div className="z-10 w-full text-center max-w-4xl mx-auto pb-16">
              {title && (
                <h1 className="text-pretty text-6xl font-bold lg:text-9xl mb-8">{title}</h1>
              )}
              {richText && (
                <div className="text-muted-foreground text-xl lg:text-2xl">
                  <RichText data={richText} enableGutter={false} />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
              {media && typeof media === 'object' && (
                <Media
                  imgClassName="w-full h-[500px] rounded-lg object-cover shadow-lg"
                  priority
                  resource={media}
                />
              )}
              {media2 && typeof media2 === 'object' && (
                <Media
                  imgClassName="w-full h-[500px] rounded-lg object-cover shadow-lg"
                  priority
                  resource={media2}
                />
              )}
              {media3 && typeof media3 === 'object' && (
                <Media
                  imgClassName="w-full h-[500px] rounded-lg object-cover shadow-lg"
                  priority
                  resource={media3}
                />
              )}
            </div>

            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row pb-16">
              {Array.isArray(links) && links.length > 0 && (
                <ul className="flex justify-center gap-4">
                  {links.map(({ link }, i) => {
                    return (
                      <li key={i}>
                        <CMSLink {...link} />
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero8 }
