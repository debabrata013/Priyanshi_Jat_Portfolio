"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Database, Server, Cloud, Layers, GitBranch, Terminal, Cpu
} from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      id: "devops",
      name: "DevOps",
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Jenkins", level: 80 },
        { name: "Ansible", level: 80 },
        { name: "Terraform", level: 85 },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & AWS",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "AWS EC2", level: 90 },
        { name: "AWS S3", level: 85 },
        { name: "AWS Lambda", level: 80 },
        { name: "AWS VPC", level: 85 },
        { name: "CloudFormation", level: 80 },
      ],
    },
    {
      id: "monitoring",
      name: "Monitoring",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "Prometheus", level: 85 },
        { name: "Grafana", level: 85 },
        { name: "CloudWatch", level: 80 },
        { name: "SonarQube", level: 75 },
      ],
    },
    {
      id: "tools",
      name: "Tools & OS",
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        { name: "Linux", level: 90 },
        { name: "Shell Scripting (Bash)", level: 85 },
        { name: "Git/GitHub/GitLab", level: 90 },
        { name: "Groovy", level: 70 },
        { name: "Networking", level: 80 },
      ],
    },
  ]

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

  return (
    <section id="skills" className="section">
      <h2 className="section-heading">My Skills</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Tabs defaultValue="devops" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card className="glass border-none">
                <CardContent className="p-6">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    {category.skills.map((skill) => (
                      <motion.div key={skill.name} variants={item} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: <Layers className="h-8 w-8" />, label: "AWS Certified Solutions Architect" },
          { icon: <GitBranch className="h-8 w-8" />, label: "Red Hat Certified System Admin" },
          { icon: <Terminal className="h-8 w-8" />, label: "DevOps Engineer Certified" },
          { icon: <Cpu className="h-8 w-8" />, label: "4+ Major Projects Deployed" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-none h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="mb-3 text-primary">{item.icon}</div>
                <p className="font-medium">{item.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
