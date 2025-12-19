export const generateWhatsAppLink = (item, quantity, location) => {
    const phoneNumber = "917996284868"; // Customer Care
    const message = `Hello Dumwala,
I would like to order:
- ${item} x ${quantity}

Delivery Location:
${location || ''}

Please let me know the next steps. Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
