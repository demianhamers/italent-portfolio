import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <img
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="text-3xl font-bold text-gray-900">Jane Doe</h1>
          <p className="text-lg text-gray-600 mt-2">Computer Science Student</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-600">
            I am a passionate Computer Science student completing my bachelor's degree. 
            My focus areas include web development and artificial intelligence. 
            I enjoy solving complex problems and creating user-friendly applications.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div>
            <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">University of Technology</p>
            <p className="text-gray-500 text-sm">2020 - 2024</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Key Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "React", "Python", "Node.js", "Git", "SQL"].map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Featured Project</h2>
          <div>
            <h3 className="font-medium">Smart Campus Navigation App</h3>
            <p className="text-gray-600 mb-2">
              A mobile application that helps students navigate around campus efficiently,
              featuring indoor mapping and class schedule integration.
            </p>
            <div className="flex gap-2">
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">React Native</span>
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">Node.js</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://github.com/janedoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/janedoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:jane.doe@example.com"
            className="text-gray-600 hover:text-gray-900"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;