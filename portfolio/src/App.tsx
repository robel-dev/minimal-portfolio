

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Github, Linkedin, Moon, Sun } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'

function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Robel A Gebrewold</h1>
            <p className="text-gray-600 dark:text-gray-300">Software Engineer</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">About</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">Projects</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">Contact</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/robel-gebrewold/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/robel-dev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <button onClick={toggleDarkMode} className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow bg-gray-100 dark:bg-gray-900">
        {children}
      </main>
      <footer className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300">&copy; {new Date().getFullYear()} Robel A Gebrewold. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Home() {
  const [filter, setFilter] = useState('all')

  const projects = [
    { id: 1, title: 'Project 1', description: 'A web application built with React', tech: ['React', 'Node.js'], image: 'https://i.postimg.cc/ZnYnywjf/fet.jpg', link: 'https://github.com'},
    { id: 2, title: 'Project 2', description: 'Mobile app developed using Flutter', tech: ['Flutter', 'Dart'], image: 'https://ibb.co/8Nsgzbj', link: 'https://github.com'},
    { id: 3, title: 'Project 3', description: 'Backend API built with Express', tech: ['Node.js', 'Express','MongoDB'], image: 'https://ibb.co/cXVm8r7', link: 'https://github.com'},
  ]
  
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.tech.includes(filter))

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Welcome to My Portfolio</h1>
            <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">I'm a passionate software engineer with expertise in web and mobile development.</p>
             {/* <Button asChild className="bg-white text-black border border-black hover:bg-gray-100 hover:text-black"> */}
              <Button>
              <a href="#projects">View My Projects</a>
            </Button> 
           
          </div>
          <div className="md:w-1/2">
            <img src="https://i.postimg.cc/ZnYnywjf/fet.jpg" alt="Robel A Gebrewold" className="rounded-full mx-auto w-64 h-64" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">I'm a software engineer with 5 years of experience in developing web and mobile applications. My passion lies in creating efficient, scalable, and user-friendly solutions.</p>
              <p className="text-lg text-gray-600 dark:text-gray-300">I specialize in JavaScript ecosystems, including React, Node.js, and React Native. I'm also proficient in Flutter for cross-platform mobile development.</p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Frontend</h3>
                <p className="text-gray-600 dark:text-gray-300">React, Vue, Angular</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Backend</h3>
                <p className="text-gray-600 dark:text-gray-300">Node.js, Express, Django</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Mobile</h3>
                <p className="text-gray-600 dark:text-gray-300">React Native, Flutter</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Database</h3>
                <p className="text-gray-600 dark:text-gray-300">MongoDB, PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">My Projects</h2>
          <div className="mb-8 flex justify-center space-x-2">
            <Button variant={filter === 'all' ? 'default' : 'outline'} onClick={() => setFilter('all')}>All</Button>
            <Button variant={filter === 'React' ? 'default' : 'outline'} onClick={() => setFilter('React')}>React</Button>
            <Button variant={filter === 'Flutter' ? 'default' : 'outline'} onClick={() => setFilter('Flutter')}>Flutter</Button>
            <Button variant={filter === 'Node.js' ? 'default' : 'outline'} onClick={() => setFilter('Node.js')}>Node.js</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (

              <Card key={project.id} className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <Badge key={tech} variant="secondary" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  {/* <Button asChild className="w-full bg-white dark:bg-gray-700 text-black dark:text-white border border-black dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-black dark:hover:text-white"> */}
                    <Button>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                  </Button>
                </CardFooter>
              </Card>
              
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Contact Me</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </section>
    </>
  )
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App