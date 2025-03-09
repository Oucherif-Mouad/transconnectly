
import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 mb-4">
              Contact Us
            </Badge>
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have questions or need assistance? We're here to help. Reach out to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-muted-foreground">info@transconnect.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Address</h3>
                      <p className="text-muted-foreground">
                        Rungis International Market<br />
                        94550 Chevilly-Larue<br />
                        France
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Monday - Friday</h3>
                    <p className="text-muted-foreground">8:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Saturday</h3>
                    <p className="text-muted-foreground">9:00 AM - 3:00 PM</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Sunday</h3>
                    <p className="text-muted-foreground">Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-elevation p-8 border border-border"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="booking">Booking Issue</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message here..." rows={5} required />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="h-5 w-5 mr-2" /> Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
