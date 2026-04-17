export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // For now just log it (you can add email service like Resend or Nodemailer later)
    console.log('New contact form submission:', { name, email, subject, message });

    return res.status(200).json({ message: 'Message received!' });
}