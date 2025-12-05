"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export type ServicesProps = {
  title: string;
  subtitle: string;
  whatsIncluded: {
    id: string;
    title: string;
    services: {
      title: string;
      price: string;
    }[];
  }[];
  button: {
    label: string;
    link: string;
  };
};

const Services9: React.FC<ServicesProps> = ({ title, subtitle, whatsIncluded, button }) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whatsIncluded.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col h-full bg-card rounded-2xl border border-border p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30"
            >
              <div className="flex-1 pt-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-6 text-center">
                  {item.title}
                </h3>

                <div className="space-y-4">
                  {item.services?.map((service, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-card-foreground p-3 rounded-lg transition-colors"
                    >
                      <div className="bg-primary/10 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="bg-primary h-2 w-2 rounded-full" />
                      </div>
                      <span className="font-medium">{service.title}</span>
                      {service.price && (
                        <span className="ml-auto bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
                          {service.price}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 h-12 font-medium"
                >
                  <Link href={button.link} className="flex items-center justify-center gap-2">
                    {button.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services9 };