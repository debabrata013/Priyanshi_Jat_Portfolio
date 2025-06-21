"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "priyanshijat06@gmail.com",
      link: "mailto:priyanshijat06@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91 9098477714",
      link: "tel:+919098477714",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Indore, Madhya Pradesh",
      link: null,
    },
  ]

  return (
    <section id="contact" className="section">
      <h2 className="section-heading">Contact Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">Let&apos;s Build Something Meaningful</h3>
          <p className="text-muted-foreground">
            Whether you&apos;re hiring for a DevOps role, working on a cloud infrastructure project, or just want to connect —
            I&apos;m open to conversations and collaborations. Every connection starts with a message.
          </p>

          <div className="space-y-4 mt-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="p-3 glass rounded-full mr-4">{item.icon}</div>
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: CTA Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="glass border-none">
            <CardHeader>
              <CardTitle>Collaborate with Me</CardTitle>
              <CardDescription>
                Got an idea or project in mind? Just send a quick message below — I’ll reply soon.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8 space-y-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold">🚀 Let&apos;s Work Together</h3>
                <p className="text-muted-foreground max-w-xl mx-auto mt-4">
                  Have a project in mind, a collaboration offer, or just want to talk tech?
                  Drop me a message and let’s make it happen.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <a href="mailto:priyanshijat06@gmail.com" rel="noopener noreferrer">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Me
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <a href="https://wa.me/919098477714" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-5 w-5" />
                      WhatsApp Me
                    </a>
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
