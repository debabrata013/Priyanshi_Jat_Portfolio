"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, ExternalLink } from "lucide-react"
import Image from "next/image"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo?: string
  stars: number
  forks: number
  category: string
  achievements?: string[]
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [activeFilter, setActiveFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const mockProjects: Project[] = [
      {
        id: 1,
        title: "Retail-Store Application Deployment",
        description:
          "Developed and deployed a Retail-Store Application using modern DevOps practices with full automation. Provisioned cloud infrastructure on AWS using Terraform (IaC), set up Kubernetes clusters with EKS, and managed deployments using ArgoCD and Helm. Implemented a CI/CD pipeline with GitHub Actions for automated builds, testing, and deployments, ensuring faster release cycles and reliability.",",
        image: "https://portfolio-bucket-6a.s3.eu-west-1.amazonaws.com/Retail-store-image.jpg",
        tags: ["Terraform", "AWS (EKS, EC2, ECR, VPC)","Kubernetes","ArgoCD","Helm","GitHub Actions","CI/CD","Automation","Cloud Infrastructure"],
        github: "https://github.com/priyanshijat/retail-store-sample-app.git",
        demo: "",
        stars: 5,
        forks: 8,
        category: "Devops and AWS",
        achievements: [
          "Successfully deployed the application with a fully automated end-to-end CI/CD pipeline",
          "Improved deployment efficiency and reduced manual intervention by 80%",
          "Provisioned scalable and secure infrastructure using Terraform and AWS EKS",
          "Implemented GitOps workflow with ArgoCD and Helm for seamless deployments"
        ]
      },

      {
        id: 2,
        title: "Comedy API Server Deployment",
        description:
          "Designed and deployed a Comedy API Server application using Kubernetes and Docker with a fully automated CI/CD pipeline in GitLab. Implemented container orchestration, monitoring with Prometheus & Grafana, and GitOps workflows for reliable deployments. The system is designed for scalability, high availability, and real-time observability.",
        image: "https://portfolio-bucket-6a.s3.eu-west-1.amazonaws.com/comedy-image.jpg",
        tags: ["Docker","Kubernetes","GitLab CI/CD","GitHub","Prometheus","Grafana","GitOps","Automation","Cloud Native"],
        github: "https://github.com/priyanshijat/Comedy-API-server.git",
        demo: "",
        stars: 3,
        forks: 2,
        category: "DevOps",
        achievements: [
          "Achieved 90% application uptime with Kubernetes orchestration",
          "Reduced deployment time by 80% through automated CI/CD pipelines",
          "Integrated Prometheus & Grafana dashboards for proactive monitoring and alerts",
          "Enabled auto-scaling to handle variable workloads efficiently",
          "Followed GitOps principles for seamless and reliable delivery"
        ]
      },

      {
        id: 3,
        title: "Appointment Booking Application Deployment",
        description:
          "Containerized and deployed an Appointment Booking Application using Docker and Kubernetes. Managed infrastructure with AWS CloudFront for global content delivery, integrated SonarQube for static code analysis to maintain code quality, and implemented real-time monitoring with Prometheus and Grafana. Automated builds and deployments with GitHub Actions to ensure faster and more reliable delivery.",
        image: "https://portfolio-bucket-6a.s3.eu-west-1.amazonaws.com/appointment-booking.jpg",
        tags: ["AWS CloudFront","Docker","Kubernetes","GitHub Actions","SonarQube","Prometheus","Grafana", "CI/CD","Automation"],
        github: "https://github.com/priyanshijat/Node-todo-application.git",
        demo: "",
        stars: 32,
        forks: 12,
        category: "DevOps",
        achievements: [
          "Accelerated setup and deployment by 70% through efficient containerization",
          "Achieved highly reliable and scalable deployments via Kubernetes orchestration",
          "Improved code quality and security with integrated SonarQube static analysis",
          "Implemented proactive monitoring and alerting using Prometheus and Grafana"
        ]
      },
      {
        id: 4,
        title: "Node.js Todo Application Deployment",
        description:
          "Containerized a Node.js Todo application using Docker and deployed it with Kubernetes for scalable and reliable orchestration. Integrated SonarQube for static code analysis to maintain code quality, and implemented monitoring solutions with Prometheus and Grafana to ensure observability and performance insights.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
        tags: ["Node.js","Docker","Kubernetes","SonarQube","Prometheus","Grafana","CI/CD","Automation"],
        github: "https://github.com/priyanshijat/Node-todo-application.git",
        demo: "",
        stars: 32,
        forks: 12,
        category: "DevOps",
        achievements: [
          "Reduced setup and deployment time by 70% through containerization",
          "Improved deployment reliability and scalability with Kubernetes orchestration",
          "Enhanced code quality and security using SonarQube static code analysis",
          "Enabled proactive monitoring with Prometheus and Grafana dashboards"
        ]
      },
      {
        id: 5,
        title: "Serverless Deployment with AWS Lambda & DynamoDB",
        description:
          "Developed and deployed a Python-based AWS Lambda function to handle insert and delete operations on a DynamoDB table. Configured IAM roles and policies for secure access control, and integrated Amazon CloudWatch for monitoring, logging, and performance insights. This project showcases event-driven, serverless architecture for scalable and cost-efficient solutions.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
        tags: ["AWS Lambda","DynamoDB","Python","IAM","CloudWatch","Serverless","Event-Driven"],
        github: "https://github.com/priyanshijat",
        demo: "",
        stars: 18,
        forks: 5,
        category: "Cloud",
        achievements: [
          "Implemented a cost-efficient serverless architecture using AWS Lambda",
          "Secured application access with fine-grained IAM roles and policies",
          "Achieved real-time logging and monitoring via Amazon CloudWatch",
          "Reduced operational overhead by eliminating the need for server management"
        ]
      },
      {
        id: 6,
        title: "AWS Two-Tier Web Application Deployment",
        description:
          "Designed and deployed a highly available two-tier web application architecture on AWS. Used CloudFormation templates to provision infrastructure as code, deployed NGINX as a web server, and implemented traffic-aware scaling with AWS Auto Scaling Groups. Enhanced application security with AWS WAF and Linux-based hardening practices, ensuring performance, scalability, and resilience.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
        tags: ["AWS","NGINX","CloudFormation","Auto Scaling","WAF","Linux","Infrastructure as Code","Scalability"],
        github: "https://github.com/priyanshijat/two-tier-flask-app.git",
        demo: "",
        stars: 28,
        forks: 9,
        category: "Cloud",
        achievements: [
          "Improved resource utilization by 40% with traffic-aware scaling",
          "Reduced application latency by 30% using optimized load balancing",
          "Minimized security incidents by 50% through AWS WAF and server hardening",
          "Enabled repeatable and automated deployments using CloudFormation"
        ]
      },
      {

        id: 7,
        title: "Online Shopping Application with CI/CD Automation",
        description:
          "Containerized an e-commerce application using Docker and automated its deployment pipeline with Jenkins. Created a Jenkinsfile-based CI/CD pipeline integrated with GitHub webhooks to ensure automated builds and deployments on every code push. This project highlights hands-on experience in source control, containerization, and continuous integration/delivery practices on AWS infrastructure.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
        tags: ["AWS", "GitHub", "Docker", "Jenkins", "CI/CD", "Automation"],
        github: "https://github.com/priyanshijat/online_shop.git",
        demo: "",
        stars: 5,
        forks: 4,
        category: "DevOps",
        achievements: [
          "Achieved 100% deployment automation with Jenkins pipelines",
          "Reduced release cycles by 90% through CI/CD adoption",
          "Improved code quality and consistency with automated build validations"
        ]
      }

      

    ]

    setProjects(mockProjects)
    setFilteredProjects(mockProjects)
    setIsLoading(false)
  }, [])

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "devops", name: "DevOps" },
    { id: "cloud", name: "Cloud" },
  ]

  const filterProjects = (category: string) => {
    setActiveFilter(category)
    if (category === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === category))
    }
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  if (isLoading) {
    return (<>
      <section id="projects" className="section">
        <h2 className="section-heading">My Projects</h2>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </section>
    </>)
  }

  return (
    <section id="projects" className="section">
      <h2 className="section-heading">My Projects</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeFilter === category.id ? "default" : "outline"}
            onClick={() => filterProjects(category.id)}
            className="transition-all duration-300"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full glass border-none hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <Button size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        {project.demo && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.achievements && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-primary">Key Achievements:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      {project.forks}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found for this category.</p>
        </div>
      )}
    </section>
  )
}
