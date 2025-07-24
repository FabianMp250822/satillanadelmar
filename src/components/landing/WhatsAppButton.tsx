'use client';

const WhatsAppButton = () => {
    const phoneNumber = "573164406333";
    const message = encodeURIComponent("Hola, estoy interesado/a en el proyecto Santillana del Mar y me gustaría recibir más información.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 animate-pulse-subtle"
            aria-label="Contactar por WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
            >
                <path d="M19.2,4.8C17.1,2.7,14.6,1.5,12,1.5C6.2,1.5,1.5,6.2,1.5,12c0,1.9,0.5,3.7,1.5,5.4L1.5,22.5l5.2-1.5 c1.7,1,3.5,1.5,5.3,1.5h0c5.8,0,10.5-4.7,10.5-10.5C22.5,9.4,21.3,6.9,19.2,4.8z M12,20.8c-1.8,0-3.6-0.5-5.1-1.5l-0.4-0.2 l-3.8,1.1l1.1-3.7l-0.3-0.4C3,14.6,2.5,13.3,2.5,12c0-5.2,4.2-9.5,9.5-9.5s9.5,4.2,9.5,9.5C21.5,17.2,17.2,20.8,12,20.8z M17.2,14.4c-0.2-0.1-1.5-0.7-1.7-0.8c-0.2-0.1-0.4-0.1-0.6,0.1c-0.2,0.2-0.7,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1 C12.8,14.4,11.2,13.8,10,12.5c-1-1.1-1.7-2.4-1.9-2.8c-0.2-0.4,0-0.6,0.2-0.8c0.1-0.1,0.3-0.4,0.5-0.5c0.1-0.1,0.2-0.3,0.3-0.4 c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.6-1.5-0.8-2C6.9,5.7,6.7,5.8,6.5,5.8H6c-0.2,0-0.5,0.1-0.7,0.3C5.1,6.3,4.5,6.9,4.5,8 s1.3,3,1.5,3.2c0.2,0.2,1.5,2.3,3.7,4.2c2.2,1.9,3.7,2.5,4.2,2.8c0.5,0.3,1.3,0.2,1.8-0.1c0.5-0.4,1.5-1.7,1.7-2.2 c0.2-0.5,0.4-0.9,0.3-1.1C17.8,14.6,17.5,14.5,17.2,14.4z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
