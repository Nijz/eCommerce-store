import MaxWithWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Icon, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Get item delivered to your email in seconds "
  },
  {
    name: "Garrented Quality",
    Icon: CheckCircle,
    description: "Every Assests are verified by UI team to get you high quality assests. Not happy? we give 30 days return policy"
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description: "We've have pledged 1% of the preservation and restoration of the natural environment"
  },
]

export default function Home() {
  return (
    <>
      <MaxWithWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          
          {/* Headlines */}
          <h1 className="text-4xl text-gray-900 font-bold tracking-tight sm:text-6xl ">
            Your marketplace for high quality <span className="text-blue-600 "> digital assets</span>. 
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground ">
            Welcome to BeautyUI Store. Every assests in our plateform is verifed by our UI team to ensure the highest quality UI components
          </p>
          
          {/* BUTTONS */}
          <div className=" flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={'/product'} className={buttonVariants({variant: "default"})}>
              Browse Trending
            </Link>
            <Button className={buttonVariants({variant: "secondary"})}>
              Our Quality promise &rarr;
            </Button>
          </div>
        </div>

        {/* LIST TODO */}

      </MaxWithWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWithWrapper classname="py-20">
          <div className=" grid grid-cols-1 gap-y-12 sm:gird-cols-2 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 ">
            {
              perks.map((perk) => (
                <div 
                  key={perk.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0 flex justify-center ">
                    <div className="h-16 w-16 flex items-center justify-center bg-blue-100 rounded-lg text-blue-900">
                      {<perk.Icon className="w-1/3 h-1/3"/>}
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:mt-6 lg:ml-0">
                    <h3 className="text-base text-gray-900 font-medium">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </MaxWithWrapper>
      </section>
    </>
  );
}
