import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trees, ShieldCheck, AreaChart } from 'lucide-react';

const features = [
  {
    icon: <Trees className="h-10 w-10 text-primary" />,
    title: 'Lush Amenities',
    description: 'Enjoy access to private parks, walking trails, and community gardens, all within a secure, gated community.',
  },
  {
    icon: <AreaChart className="h-10 w-10 text-primary" />,
    title: 'Spacious Lot Sizes',
    description: 'Choose from a variety of lot sizes to build your custom home, with ample space for gardens, pools, and more.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Flexible Payment Options',
    description: 'We offer tailored financing plans to make your dream of owning a home in Santillana a reality.',
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            An Unparalleled Living Experience
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto mt-4">
            Santillana Living is more than just a place to live, it's a lifestyle.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                {feature.icon}
                <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
