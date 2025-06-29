'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore";

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export async function saveContactMessage(data: ContactFormData): Promise<{success: boolean; message: string}> {
    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
        console.error("Firebase project ID is not set. Contact form submission will fail.");
        return { success: false, message: "Server configuration error." };
    }

    try {
        await addDoc(collection(db, "contacts"), {
            ...data,
            submittedAt: Timestamp.now()
        });
        return { success: true, message: "Message sent successfully!" };
    } catch (error) {
        console.error("Error saving contact message to Firestore: ", error);
        return { success: false, message: "There was an error sending your message." };
    }
}
