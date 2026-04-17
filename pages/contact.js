import { useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
    const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus]   = useState(null); // 'success' | 'error' | null
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch('/api/contact', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify(form),
            });

            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }

        setLoading(false);
    };

    return (
        <Layout title="Contact - Travia">
            <header
                className="page-header"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920')" }}
            >
                <div style={{ textAlign: 'center' }}>
                    <h1>CONTACT US</h1>
                    <p className="lead">let's connect beyond borders</p>
                </div>
            </header>

            <div className="container">
                <div className="col-10">
                    <div className="contact-content">
                        <p className="intro-text">Have a story to share? Questions about a destination? We'd love to hear from you.</p>

                        {status === 'success' && (
                            <div className="alert alert-success">
                                Thank you! Your message has been sent. We'll get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="alert alert-error">
                                Something went wrong. Please try again later.
                            </div>
                        )}

                        <div className="contact-grid">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" placeholder="What's this about?" value={form.subject} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" placeholder="Tell us your story..." value={form.message} onChange={handleChange} required rows={8} />
                                </div>
                                <button type="submit" className="btn" disabled={loading}>
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>

                            <div className="contact-info">
                                <h3>Connect With Us</h3>
                                <p>Join our community of travelers and stay updated with the latest stories from around the world.</p>
                                <div className="contact-detail">
                                    <h4>Email</h4>
                                    <p>hello@travia.com</p>
                                </div>
                                <div className="contact-detail">
                                    <h4>Social</h4>
                                    <p>@traviajournal</p>
                                </div>
                                <div className="contact-detail">
                                    <h4>Newsletter</h4>
                                    <p>Subscribe to receive monthly travel stories and tips directly to your inbox.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}