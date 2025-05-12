'use client'
import { useState } from 'react'
import dayjs from 'dayjs'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

interface Skill {
  key: string
  label: string
}

interface Job {
  company: string
  endDate: string
  skills: string[] // Reference skill keys
  startDate: string
  tasks: { description: string; tags: string[] }[]
  title: string
}

// Centralized skills map
const skillsMap: Record<string, Skill> = {
  agile: { key: 'agile', label: 'Agile' },
  algorithms: { key: 'algorithms', label: 'Algorithms' },
  api: { key: 'api', label: 'API Design' },
  // 'data-structures': { key: 'data-structures', label: 'Data Structures' },
  'drag-and-drop': { key: 'drag-and-drop', label: 'Drag and Drop' },
  drupal: { key: 'drupal', label: 'Drupal' },
  javascript: { key: 'javascript', label: 'JavaScript' },
  jest: { key: 'jest', label: 'Jest' },
  jquery: { key: 'jquery', label: 'jQuery' },
  mentorship: { key: 'mentorship', label: 'Mentorship' },
  microservices: { key: 'microservices', label: 'Microservices' },
  nodejs: { key: 'nodejs', label: 'Node.js' },
  performance: { key: 'performance', label: 'Performance' },
  python: { key: 'python', label: 'Python' },
  react: { key: 'react', label: 'React' },
  'react-hook-form': { key: 'react-hook-form', label: 'React Hook Form' },
  'react-testing-library': {
    key: 'react-testing-library',
    label: 'React Testing Library',
  },
  redux: { key: 'redux', label: 'Redux' },
  regex: { key: 'regex', label: 'Regex' },
  'team-training': { key: 'team-training', label: 'Team Training' },
  testing: { key: 'testing', label: 'Testing' },
  typescript: { key: 'typescript', label: 'TypeScript' },
  'web-scraping': { key: 'web-scraping', label: 'Web Scraping' },
}

const hackReactorJob: Job = {
  company: 'Hack Reactor',
  endDate: 'February 2017',
  skills: [
    'algorithms',
    'data-structures',
    'javascript',
    'mentorship',
    'nodejs',
  ],
  startDate: 'November 2016',
  tasks: [
    {
      description:
        'Hosted brief morning lectures on data structures, algorithms, and JS fundamentals.',
      tags: ['algorithms', 'data-structures', 'javascript', 'mentorship'],
    },
    {
      description:
        'Mentored students with code reviews, one-on-one meetings, and various topics.',
      tags: ['mentorship', 'algorithms', 'data-structures', 'javascript'],
    },
  ],
  title: 'Software Engineering Fellow (Contract)',
}

const nextHealthJob: Job = {
  company: 'NextHealth Technologies',
  endDate: 'August 2021',
  skills: [
    'agile',
    'api',
    'javascript',
    'jest',
    'mentorship',
    'performance',
    'react',
    'react-hook-form',
    'react-testing-library',
    'team-training',
    'testing',
    'typescript',
  ],
  startDate: 'October 2020',
  tasks: [
    {
      description:
        'Refactored React components to better leverage component composition while building new features.',
      tags: ['javascript', 'react', 'typescript'],
    },
    {
      description:
        'Trained team in TypeScript and worked to convert existing React code to TypeScript.',
      tags: ['javascript', 'react', 'team-training', 'typescript'],
    },
  ],
  title: 'Senior Full Stack Engineer',
}

const percolateJob: Job = {
  company: 'Percolate (by Seismic)',
  endDate: 'February 2024',
  skills: [
    'agile',
    'api',
    'drag-and-drop',
    'javascript',
    'jest',
    'mentorship',
    'microservices',
    'performance',
    'python',
    'react',
    'react-hook-form',
    'react-testing-library',
    'team-training',
    'testing',
    'typescript',
  ],
  startDate: 'August 2021',
  tasks: [
    {
      description:
        'Created custom features and reusable components in React with TypeScript.',
      tags: ['javascript', 'react', 'typescript'],
    },
    {
      description:
        'Maintained test coverage with Jest, snapshots, and React Testing Library.',
      tags: ['javascript', 'jest', 'testing', 'typescript'],
    },
    {
      description:
        'Worked with backend engineers to design/implement APIs, debug business logic, and coordinate timelines.',
      tags: ['agile', 'api', 'python'],
    },
  ],
  title: 'Senior Frontend Engineer',
}

const spjSolutionsJob: Job = {
  company: 'SPJ Solutions',
  endDate: 'September 2018',
  skills: [
    'api',
    'drag-and-drop',
    'javascript',
    'jest',
    'nodejs',
    'react',
    'redux',
    'testing',
  ],
  startDate: 'December 2017',
  tasks: [
    {
      description:
        'First engineer on Citopus project after initial prototype was done with Django and jQuery. Turned into single page application using React and node.js, deployed it successfully to bare metal, and began growing Citopus team.',
      tags: ['javascript', 'nodejs', 'react'],
    },
    {
      description:
        'Built node server to handle front end requests and store changes for safe resets when an operation failed.',
      tags: ['javascript', 'nodejs'],
    },
    {
      description:
        "Used React with Redux to interface with VMware's SDK and API for automating monitoring and deployment of virtualized networking.",
      tags: ['javascript', 'react', 'redux'],
    },
    {
      description:
        'Created smart forms to generate inputs with values based on previously entered information.',
      tags: ['javascript', 'react', 'redux'],
    },
    {
      description:
        'Implemented drag and drop functionality to load configurations and extrapolate settings from targeted nodes.',
      tags: ['javascript', 'drag-and-drop'],
    },
  ],
  title: 'Lead Full Stack JavaScript Engineer',
}

const ucBerkeleyJob: Job = {
  company: 'UC Berkeley',
  endDate: 'May 2016',
  skills: ['drupal', 'javascript', 'jquery', 'regex', 'web-scraping'],
  startDate: 'March 2014',
  tasks: [
    {
      description:
        'Built custom web scraper with jQuery and regex to turn static HTML bibliographies into Drupal database.',
      tags: ['drupal', 'javascript', 'jquery', 'regex', 'web-scraping'],
    },
  ],
  title: 'Library Operations/Web Assistant',
}

const yelpJob: Job = {
  company: 'Yelp',
  endDate: 'April 2020',
  skills: [
    'agile',
    'algorithms',
    'api',
    'javascript',
    'jest',
    'microservices',
    'performance',
    'python',
    'react',
    'redux',
    'team-training',
    'testing',
  ],
  startDate: 'October 2018',
  tasks: [
    {
      description:
        "Maintained and built front and back end features of Local Services' messaging platform.",
      tags: ['react', 'python', 'javascript'],
    },
    {
      description:
        'Point of contact for troubleshooting when interfacing with messaging platform.',
      tags: ['team-training', 'python', 'javascript'],
    },
    {
      description:
        'Maintained 100% code coverage and improved tests when issues with test pollution or flakey tests occurred.',
      tags: ['testing', 'javascript', 'python', 'jest'],
    },
    {
      description:
        'Created an algorithm to account for business hours when calculating business response time.',
      tags: ['algorithms', 'python'],
    },
    {
      description:
        'Created reusable React context component to manage complex visibility rules for After Hours experiment on web.',
      tags: ['react', 'javascript', 'jest', 'testing'],
    },
    {
      description:
        'Monitored traffic load impact with a phantom release using logging and dashboards.',
      tags: ['microservices', 'python', 'api'],
    },
    {
      description:
        'Coordinated with Notifications Infrastructure team to develop and deploy a new microservice.',
      tags: ['microservices', 'python', 'api'],
    },
    {
      description:
        "Calculated expected traffic for intended microservice and database using messaging platform's statistics.",
      tags: ['microservices', 'api'],
    },
    {
      description:
        'Extended and designed APIs for multiple microservices managed by different teams.',
      tags: ['api', 'microservices', 'python'],
    },
  ],
  title: 'Full Stack Engineer',
}

// Combine all jobs into a list
const jobList: Job[] = [
  percolateJob,
  nextHealthJob,
  yelpJob,
  spjSolutionsJob,
  hackReactorJob,
  ucBerkeleyJob,
]

const calculateSkillExperience = (() => {
  const cache: Record<string, number> = {}

  return (skillKey: string): number => {
    if (cache[skillKey] !== undefined) {
      return cache[skillKey]
    }

    let totalMonths = 0

    jobList.forEach((job) => {
      if (job.skills.includes(skillKey)) {
        const startDate = dayjs(job.startDate, 'MMMM YYYY').startOf('month')
        const endDate = job.endDate
          ? dayjs(job.endDate, 'MMMM YYYY').endOf('month')
          : dayjs().endOf('month') // Use current date if no end date
        totalMonths += endDate.diff(startDate, 'months') + 1 // Add 1 to include the starting month
      }
    })

    const yearsOfExperience = parseFloat((totalMonths / 12).toFixed(1))
    cache[skillKey] = yearsOfExperience
    return yearsOfExperience
  }
})()

const SkillButton = ({ skill, isSelected, onClick }) => {
  return (
    <Tippy
      content={`${calculateSkillExperience(skill.key)} years of experience`}
    >
      <button
        className={`px-2 py-1 m-1 rounded ${
          isSelected
            ? 'bg-cyan-500 text-white'
            : 'bg-cyan-200 text-cyan-900 hover:bg-cyan-300'
        }`}
        onClick={onClick}
      >
        {skill.label}
      </button>
    </Tippy>
  )
}

const JobContainer = ({
  job,
  selectedSkills,
}: {
  job: Job
  selectedSkills: string[]
}) => {
  // Filter tasks based on selected skills
  const filteredTasks = selectedSkills.length
    ? job.tasks.filter((task) =>
        task.tags.some((tag) => selectedSkills.includes(tag))
      )
    : job.tasks

  return (
    <div className="border-t-1 border-t-cyan-200">
      <div className="grid grid-cols-6">
        <div className="col-span-2 place-content-center text-2xl">
          <p>{job.company}</p>
        </div>
        <div className="col-span-3 place-content-center">
          <h3 className="text-2xl">{job.title}</h3>
        </div>
        <div className="col-span-1 col-start-6 place-content-center italic text-right">
          <p>{job.startDate} -</p>
          <p>{job.endDate}</p>
        </div>
      </div>
      <div className="border-t-1 border-t-cyan-100 pl-10">
        <ul>
          {filteredTasks.map((task, index) => (
            <li className="list-disc list-inside" key={index}>
              {task.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const JobHistory = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const handleSkillClick = (skill: string) => {
    setSelectedSkills(
      (prevSkills) =>
        prevSkills.includes(skill)
          ? prevSkills.filter((s) => s !== skill) // Remove skill if already selected
          : [...prevSkills, skill] // Add skill if not selected
    )
  }

  const resetTasks = () => {
    setSelectedSkills([])
  }

  const filteredJobs = selectedSkills.length
    ? jobList.filter((job) =>
        job.skills.some((skill) => selectedSkills.includes(skill))
      )
    : jobList

  return (
    <div className="grid border-t-1 border-t-cyan-500">
      <h2 className="text-4xl pl-5">Job History</h2>
      <div className="border-t-1 border-t-cyan-300 pl-5">
        <h3 className="text-2xl">Skills</h3>
        <div className="flex flex-wrap justify-between">
          {Object.values(skillsMap).map((skill) => (
            <SkillButton
              isSelected={selectedSkills.includes(skill.key)}
              key={skill.key}
              onClick={() => handleSkillClick(skill.key)}
              skill={skill}
            />
          ))}
          <Tippy content="Reset all filters">
            <button
              className="bg-red-100 text-red-900 px-2 py-1 m-1 rounded hover:bg-red-300"
              onClick={resetTasks}
            >
              Reset
            </button>
          </Tippy>
        </div>
      </div>
      {filteredJobs.map((job, index) => (
        <JobContainer job={job} key={index} selectedSkills={selectedSkills} />
      ))}
    </div>
  )
}

export default JobHistory
