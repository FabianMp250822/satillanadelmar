'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import { dreamHomeVisualizer, DreamHomeVisualizerInput } from '@/ai/flows/dream-home-visualizer';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Wand2 } from 'lucide-react';

const formSchema = z.object({
  style: z.string().min(1, 'Style is required.'),
  size: z.string().min(1, 'Size is required.'),
  location: z.string().min(1, 'Location is required.'),
  additionalFeatures: z.string().optional(),
});

export default function DreamHomeVisualizer() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      style: '',
      size: '',
      location: '',
      additionalFeatures: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setImageUrl(null);
    try {
      const result = await dreamHomeVisualizer(values as DreamHomeVisualizerInput);
      setImageUrl(result.imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was a problem generating your dream home. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="visualizer" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container grid items-start gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Visualize Your Dream Home
            </h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed">
              Use our AI-powered tool to create a personalized rendering of your potential home. Select your preferences and see your vision come to life.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Design Your Home</CardTitle>
              <CardDescription>Fill out the form below to get started.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Architectural Style</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="e.g., Modern, Traditional" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Modern">Modern</SelectItem>
                            <SelectItem value="Traditional">Traditional</SelectItem>
                            <SelectItem value="Rustic">Rustic</SelectItem>
                            <SelectItem value="Coastal">Coastal</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Home Size</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="e.g., Small, Medium" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Small">Small cozy cottage</SelectItem>
                            <SelectItem value="Medium">Medium family home</SelectItem>
                            <SelectItem value="Large">Large estate</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location Setting</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="e.g., Beachfront, Mountain" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Beachfront">Beachfront</SelectItem>
                            <SelectItem value="Mountain">Mountain Retreat</SelectItem>
                            <SelectItem value="Rural">Rural Countryside</SelectItem>
                            <SelectItem value="Suburban">Lush Suburban</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="additionalFeatures"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Features</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Infinity pool, wrap-around porch, rooftop garden" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? 'Generating...' : <> <Wand2 className="mr-2 h-4 w-4" /> Generate Image</>}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center pt-16">
          <Card className="w-full aspect-square border-2 border-dashed border-border flex items-center justify-center bg-card/50">
            {loading ? (
              <div className="flex flex-col items-center justify-center space-y-4 p-4">
                <Skeleton className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 rounded-xl" />
                <p className="text-foreground/80">Our AI is building your vision...</p>
              </div>
            ) : imageUrl ? (
              <Image
                src={imageUrl}
                alt="Generated dream home"
                width={512}
                height={512}
                className="rounded-lg object-cover w-full h-full"
              />
            ) : (
              <div className="text-center text-foreground/60 p-8">
                <Wand2 className="mx-auto h-12 w-12 mb-4"/>
                <p>Your generated dream home will appear here.</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
