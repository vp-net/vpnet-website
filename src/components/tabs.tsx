import {cn} from "../lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconCloudStorm,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Low Latency Gaming",
      description: "Experience seamless, low latency gaming with VPNet, ensuring you stay at the top of your game no matter where you play.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Bypass Restrictions",
      description:
        "Bypass network restrictions effortlessly and access the online world without limitations with VPNet.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Blazing Speeds",
      description: "Experience blazing fast speeds with VPNet, ensuring you never have to wait for anything online.",
      icon: <IconCloudStorm />,
    },
    {
        title: "24/7 Support",
        description:
          "We are available a 100% of the time. We are always there to help you out with any issues you might face. We are just a click away",
        icon: <IconHelp />,
      },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature bg-black dark:border-neutral-900",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-900",
        index < 4 && "lg:border-b dark:border-neutral-900"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800  dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className=" mb-5 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-900 dark:bg-neutral-900 group-hover/feature:bg-green-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200  inline-block text-green-400 dark:text-green-400">
          {title}
        </span>
      </div>
      <p className="text-sm bg-clip-text text-neutral-300 font-sans font-normal relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
