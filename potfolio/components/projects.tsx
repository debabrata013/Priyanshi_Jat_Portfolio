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
        title: "Serverless Deployment ",
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
      }
      {
        id: 5,
        title: "online-shopping appication",
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
