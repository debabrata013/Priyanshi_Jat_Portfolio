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
        title: "appointment-booking application",
        description:
          "Deployed a containerized appointment booking application by cloning the source code from GitHub. Built a custom Docker image and pushed it to Docker Hub. Designed and executed a CI/CD pipeline using Jenkins and a Jenkinsfile to automate the build and deployment process. Utilized Kubernetes for container orchestration, enabling auto-scaling and self-healing of application pods. This project demonstrates hands-on experience with Docker, Jenkins, and Kubernetes in a production-like environment.",
        image: "https://portfolio-bucket-azc.s3.ap-south-1.amazonaws.com/sample-of-doctor-booking-app.jpg",
        tags: ["Docker", "Jenkins", "GitHub", "CI/CD", "Docker Compose", "kubernetes"],
        github: "https://github.com/priyanshijat/appointment-booking.git",
        demo: "",
        stars: 5,
        forks: 8,
        category: "devops",
        achievements: ["99% application uptime", "80% faster time to market"]
      },
      {
        id: 2,
        title: "Node.js Todo App with Kubernetes",
        description:
          "Containerized Node.js Todo application using Docker and orchestrated it with Kubernetes YAML files. Integrated SonarQube for static code analysis and Grafana with Prometheus for monitoring.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
        tags: ["Node.js", "Docker", "Kubernetes", "SonarQube", "Grafana", "Prometheus"],
        github: "https://github.com/priyanshijat/Node-todo-application.git",
        demo: "",
        stars: 32,
        forks: 12,
        category: "devops",
        achievements: ["70% reduced setup time", "Improved deployment reliability"]
      },
      {
        id: 3,
        title: "Serverless Deployment with AWS",
        description:
          "Developed and deployed a Python-based AWS Lambda function to perform insert/delete operations on a DynamoDB table. Configured IAM roles for secure access and used CloudWatch for monitoring.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
        tags: ["AWS Lambda", "DynamoDB", "Python", "IAM", "CloudWatch"],
        github: "https://github.com/priyanshijat",
        demo: "",
        stars: 18,
        forks: 5,
        category: "cloud",
        achievements: ["100% automation", "95% reduced manual errors", "80% optimized execution efficiency"]
      },
      {
        id: 4,
        title: "AWS Two-Tier Web Application",
        description:
          "Designed and implemented an AWS-based two-tier web application with NGINX managed through CloudFormation templates. Implemented traffic-aware scaling through AWS Auto Scaling Groups.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
        tags: ["AWS", "NGINX", "CloudFormation", "Auto Scaling", "WAF", "Linux"],
        github: "https://github.com/priyanshijat/two-tier-flask-app.git",
        demo: "",
        stars: 28,
        forks: 9,
        category: "cloud",
        achievements: ["40% improved resource utilization", "30% lower latency", "50% reduced security incidents"]
      },
      {
        id: 5,
        title: "Appointment Booking Website",
        description:
          "Developed a comprehensive doctor appointment booking system with complete CI/CD pipeline implementation. Containerized the application using Docker, orchestrated with Kubernetes, and deployed using Jenkins with NodePort service for external access.",
        image: "https://portfolio-bucket-azc.s3.ap-south-1.amazonaws.com/sample-of-doctor-booking-app.jpg",
        tags: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "NodePort", "React", "Node.js"],
        github: "https://github.com/priyanshijat",
        demo: "",
        stars: 35,
        forks: 14,
        category: "devops",
        achievements: ["Complete CI/CD automation", "Kubernetes orchestration", "High availability deployment", "Scalable microservices architecture"]
      },
      {
        id: 6,
        title: "Comedy API Server",
        description:
          "Built a RESTful Comedy API with comprehensive DevOps implementation featuring automated CI/CD pipelines, Docker containerization, and Kubernetes orchestration. Implemented automated testing, code quality checks, and seamless deployment workflows.",
        image: "data:image/png;base64,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",
        tags: ["API", "Docker", "Kubernetes", "Jenkins", "CI/CD", "DevOps", "REST", "Microservices"],
        github: "https://github.com/priyanshijat",
        demo: "",
        stars: 42,
        forks: 18,
        category: "devops",
        achievements: ["Automated deployment pipeline", "Zero-downtime deployments", "Container orchestration", "API performance optimization", "Comprehensive monitoring setup"]
      },
      {
        id: 7,
        title: "online-shopping application",
        description:
          "Cloned an online shopping application from GitHub and containerized it using Docker. Implemented a Jenkins pipeline using a Jenkinsfile to automate the build and deployment process. The pipeline was configured to trigger on every code push, ensuring continuous integration and delivery. This project showcases practical knowledge of source control (GitHub), containerization (Docker), and CI/CD automation (Jenkins).",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
        tags: ["AWS", "GitHub", "Docker", "jenkins"],
        github: "https://github.com/priyanshijat/online_shop.git",
        demo: "",
        stars: 5,
        forks: 4,
        category: "devops",
        achievements: ["achieving 100% deployment automation and 90% faster release cycles"]
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
