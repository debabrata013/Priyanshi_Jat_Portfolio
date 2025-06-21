"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Terminal, Workflow } from "lucide-react"
import Image from "next/image"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  }

  const services = [
    {
      icon: <Terminal className="h-10 w-10 text-primary" />,
      title: "DevOps Engineering",
      description: "Automating deployments, containerizing applications, and managing cloud infrastructure using Docker, Kubernetes, Jenkins, and AWS services.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Cloud Infrastructure",
      description: "Designing and implementing scalable AWS infrastructure with services like EC2, S3, IAM, VPC, ECS, Lambda, and CloudFormation.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Automation & Monitoring",
      description: "Building CI/CD pipelines, implementing Infrastructure as Code with Terraform, and monitoring with Prometheus & Grafana.",
    },
    {
      icon: <Workflow className="h-10 w-10 text-primary" />,
      title: "System Administration",
      description: "Linux system administration, shell scripting, networking, and security best practices for production environments.",
    },
  ]

  return (
    <section id="about" className="section">
      <h2 className="section-heading">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="relative"
        >
          
            <div className="relative h-[400px] rounded-xl overflow-hidden glass p-2">
  <Image
    src="https://t4.ftcdn.net/jpg/03/96/98/33/360_F_396983381_AcuGFHQbNn7D9eercXFpOecN7d7B5F66.jpg"
    alt="Developer"
    className="object-cover rounded-lg h-full w-full"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
          
          <div className="absolute -bottom-6 -right-6 h-48 w-48 bg-primary/10 rounded-full blur-3xl z-[-1]"></div>
          <div className="absolute -top-6 -left-6 h-48 w-48 bg-primary/10 rounded-full blur-3xl z-[-1]"></div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">
            DevOps Engineer & Cloud Infrastructure Specialist with a Unique Journey
          </h3>
          <p className="text-muted-foreground">
            I&apos;m Priyanshi Jat, a lawyer-turned-DevOps enthusiast with a strong foundation in automation, CI/CD pipelines, and cloud technologies. My journey from law school to deploying scalable infrastructure has been fueled by curiosity and commitment.
          </p>
          <p className="text-muted-foreground">
            I specialize in building and managing cloud infrastructure using AWS, Docker, Kubernetes, Jenkins, and various automation tools. With hands-on experience in containerization, orchestration, and monitoring solutions.
          </p>
          <p className="text-muted-foreground">
            Currently interning at Fluke Infotech, I collaborate with senior team members in deploying and managing scalable infrastructure on AWS Cloud, working with services like EC2, S3, IAM, VPC, ECS, Lambda, and automation tools. I believe in continuous learning and turning challenges into opportunities for growth.
          </p>
        </motion.div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-center mb-12">What I Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <Card className="h-full glass border-none hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
