import type { Footer } from '@/payload-types'

import { getCachedGlobal } from '@/utilities/getGlobals'
import { CMSLink } from '@/components/Link'

import { Facebook, Instagram, Youtube } from 'lucide-react'

const socialIcons = {
  facebook: <Facebook className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  youtube: <Youtube className="w-5 h-5" />,
}

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)() as Footer

  if (!footerData) return null

  return (
    <footer className="mt-auto border-t border-border bg-card text-card-foreground">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            {footerData.contactInfo?.address && (
              <div
                className="text-muted-foreground space-y-1 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: footerData.contactInfo.address.replace(/\n/g, '<br />') }}
              />
            )}
            <div className="text-muted-foreground space-y-1">
              {footerData.contactInfo?.phone && (
                <p>
                  <a
                    href={`tel:${footerData.contactInfo.phone}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {footerData.contactInfo.phone}
                  </a>
                </p>
              )}
              {footerData.contactInfo?.email && (
                <p>
                  <a
                    href={`mailto:${footerData.contactInfo.email}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {footerData.contactInfo.email}
                  </a>
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Rýchle Odkazy</h3>
            <nav className="flex flex-col space-y-2">
              {footerData.navItems?.map(({ link }, i) => (
                <CMSLink
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  key={i}
                  {...link}
                />
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sleduj nás</h3>
            <div className="flex space-x-4">
              {footerData.socialLinks?.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.platform}
                >
                  {socialIcons[social.platform]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {footerData.copyright && (
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>{footerData.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
          </div>
        )}
      </div>
    </footer>
  )
}