// src/ai/flows/dream-home-visualizer.ts
'use server';

/**
 * @fileOverview Generates an image of a potential property based on user preferences.
 *
 * - dreamHomeVisualizer - A function that generates a personalized property rendering based on user preferences.
 * - DreamHomeVisualizerInput - The input type for the dreamHomeVisualizer function.
 * - DreamHomeVisualizerOutput - The return type for the dreamHomeVisualizer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore";


const DreamHomeVisualizerInputSchema = z.object({
  style: z.string().describe('The architectural style of the home (e.g., modern, traditional, rustic).'),
  size: z.string().describe('The size of the home (e.g., small, medium, large).'),
  location: z.string().describe('The location of the home (e.g., beachfront, mountain, rural).'),
  additionalFeatures: z.string().optional().describe('Any additional features the user desires (e.g., pool, garden, balcony).'),
});

export type DreamHomeVisualizerInput = z.infer<typeof DreamHomeVisualizerInputSchema>;

const DreamHomeVisualizerOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated image.'),
});

export type DreamHomeVisualizerOutput = z.infer<typeof DreamHomeVisualizerOutputSchema>;

export async function dreamHomeVisualizer(input: DreamHomeVisualizerInput): Promise<DreamHomeVisualizerOutput> {
  return dreamHomeVisualizerFlow(input);
}

const dreamHomeVisualizerPrompt = ai.definePrompt({
  name: 'dreamHomeVisualizerPrompt',
  input: {schema: DreamHomeVisualizerInputSchema},
  output: {schema: DreamHomeVisualizerOutputSchema},
  prompt: `Generate an image of a dream home based on the following preferences:

Style: {{{style}}}
Size: {{{size}}}
Location: {{{location}}}
{{#if additionalFeatures}}
Additional Features: {{{additionalFeatures}}}
{{/if}}

The image should be a realistic rendering of the property.`, 
});

const dreamHomeVisualizerFlow = ai.defineFlow(
  {
    name: 'dreamHomeVisualizerFlow',
    inputSchema: DreamHomeVisualizerInputSchema,
    outputSchema: DreamHomeVisualizerOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate an image of a dream home based on the following preferences:\n\nStyle: ${input.style}\nSize: ${input.size}\nLocation: ${input.location}\n${input.additionalFeatures ? `Additional Features: ${input.additionalFeatures}` : ''}`, //simple prompt
      config: {
        responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
      },
    });

    return {
      imageUrl: media!.url,
    };
  }
);

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export async function saveContactMessage(data: ContactFormData): Promise<{success: boolean; message: string}> {
    try {
        await addDoc(collection(db, "contacts"), {
            ...data,
            submittedAt: Timestamp.now()
        });
        return { success: true, message: "Message sent successfully!" };
    } catch (error) {
        console.error("Error saving contact message: ", error);
        return { success: false, message: "There was an error sending your message." };
    }
}