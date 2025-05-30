import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h1>
        <p className="mt-4 text-lg text-foreground/80">Have questions or feedback? We'd love to hear from you.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Contact Information */}
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:dennisopoola@gmail.com" className="text-foreground/80 hover:text-primary">
                      dennisopoola@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+3700000000" className="text-foreground/80 hover:text-primary">
                      +370 0 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-foreground/80">
                      Gedimino pr. 28, <br />
                      LT-01104 Vilnius, <br />
                      Lithuania
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-foreground/80">
                      Monday - Friday: 9:00 - 18:00 <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Live Chat</h2>
              <p className="text-foreground/80 mb-4">
                Need immediate assistance? Chat with our support team during business hours.
              </p>
              <Button className="w-full gap-2">
                <MessageSquare className="h-4 w-4" />
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone (Optional)
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry-type" className="text-sm font-medium">
                    Inquiry Type
                  </label>
                  <Select>
                    <SelectTrigger id="inquiry-type">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="employer">Employer Support</SelectItem>
                      <SelectItem value="jobseeker">Job Seeker Support</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing & Payments</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Please describe your inquiry in detail" rows={6} />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="privacy-policy" className="text-sm text-foreground/80">
                    I agree to the processing of my personal data in accordance with the{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Find Us</h2>
        <div className="h-[400px] w-full overflow-hidden rounded-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.2995081927384!2d25.279034776892714!3d54.68761647417288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9417621fb72d%3A0x9f881e6eb5ad5dc5!2sGedimino%20pr.%2028%2C%20Vilnius%2001104!5e0!3m2!1sen!2slt!4v1684932288548!5m2!1sen!2slt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="WORKLYNX Office Location"
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              question: "How quickly will I receive a response?",
              answer:
                "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend using our live chat feature for immediate assistance.",
            },
            {
              question: "I'm having technical issues with the website. What should I do?",
              answer:
                "Please contact our technical support team with details about the issue you're experiencing, including the device and browser you're using. Screenshots of the problem are also helpful.",
            },
            {
              question: "How can I report a job posting that seems suspicious?",
              answer:
                "If you come across a job posting that appears to be fraudulent or violates our terms of service, please report it immediately using the 'Report Job' feature or contact us directly.",
            },
            {
              question: "Do you offer phone support for employers?",
              answer:
                "Yes, we offer dedicated phone support for employers on our Standard and Premium plans. Please call our employer hotline at +370 5 212 3457 during business hours.",
            },
          ].map((faq, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="font-medium">{faq.question}</h3>
                <p className="mt-2 text-sm text-foreground/80">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
