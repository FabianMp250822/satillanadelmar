'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { saveContactMessage, type ContactFormData } from '@/app/actions/contact';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';

export default function ContactForm() {
    const t = useTranslations('ContactSection');
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formSchema = z.object({
        name: z.string().min(2, { message: t('validation.nameRequired') }),
        email: z.string().email({ message: t('validation.emailInvalid') }),
        phone: z.string().min(7, { message: t('validation.phoneInvalid') }),
        message: z.string().min(10, { message: t('validation.messageRequired') }).max(500, { message: t('validation.messageTooLong') }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const result = await saveContactMessage(values as ContactFormData);
            if (result.success) {
                toast({
                    title: t('Toast.successTitle'),
                    description: t('Toast.successDescription'),
                });
                form.reset();
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: t('Toast.errorTitle'),
                description: t('Toast.errorDescription'),
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <Card className="max-w-2xl mx-auto bg-card">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">{t('title')}</CardTitle>
                        <CardDescription>{t('subtitle')}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('Form.name')}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={t('Form.namePlaceholder')} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('Form.email')}</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder={t('Form.emailPlaceholder')} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('Form.phone')}</FormLabel>
                                            <FormControl>
                                                <Input type="tel" placeholder={t('Form.phonePlaceholder')} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('Form.message')}</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder={t('Form.messagePlaceholder')} className="resize-none" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" disabled={isSubmitting} className="w-full">
                                    {isSubmitting ? (
                                        <>{t('Form.loading')}</>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" /> {t('Form.submit')}
                                        </>
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
