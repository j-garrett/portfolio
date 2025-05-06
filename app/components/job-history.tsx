'use client'
import { forwardRef, useReducer, useState } from 'react'
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
  skills: Skill[]
  startDate: string
  tasks: { description: string; tags: string[] }[]
  title: string
}

const percolateJob: Job = {
  company: 'Percolate (by Seismic)',
  endDate: 'February 2024',
  skills: [
    { key: 'react', label: 'React' },
    { key: 'typescript', label: 'TypeScript' },
    { key: 'jest', label: 'Jest' },
    { key: 'agile', label: 'Agile' },
    { key: 'api', label: 'API Design' },
    { key: 'python', label: 'Python' },
    { key: 'javascript', label: 'JavaScript' },
    { key: 'team-training', label: 'Team Training' },
    { key: 'testing', label: 'Testing' },
    { key: 'performance', label: 'Performance' },
  ],
  startDate: 'August 2021',
  tasks: [
    {
      description:
        'Created custom features and reusable components in React with TypeScript.',
      tags: ['react', 'typescript', 'javascript'],
    },
    {
      description:
        'Maintained test coverage with Jest, snapshots, and React Testing Library.',
      tags: ['jest', 'typescript', 'javascript', 'testing'],
    },
    {
      description:
        'Worked with backend engineers to design/implement APIs, debug business logic, and coordinate timelines.',
      tags: ['api', 'python', 'agile'],
    },
    {
      description:
        'Built timelines within the team using Agile methodologies and sprints with morning standups.',
      tags: ['agile'],
    },
    {
      description:
        'Generated requirements, assigned Jira tickets, and coordinated with multiple teams for end-to-end features.',
      tags: ['agile'],
    },
    {
      description:
        'Coordinated across multiple timezones for QA, release scheduling, requirements, repo management, and more.',
      tags: ['agile'],
    },
  ],
  title: 'Senior Frontend Engineer',
}

const nextHealthJob: Job = {
  company: 'NextHealth Technologies',
  endDate: 'August 2021',
  skills: [
    { key: 'react', label: 'React' },
    { key: 'typescript', label: 'TypeScript' },
    { key: 'react-hook-form', label: 'React Hook Form' },
    { key: 'api', label: 'API Design' },
    { key: 'team-training', label: 'Team Training' },
    { key: 'performance', label: 'Performance' },
    { key: 'agile', label: 'Agile' },
  ],
  startDate: 'October 2020',
  tasks: [
    {
      description:
        'Refactored React components to better leverage component composition while building new features.',
      tags: ['react', 'typescript', 'javascript'],
    },
    {
      description:
        'Trained team in TypeScript and worked to convert existing React code to TypeScript.',
      tags: ['typescript', 'team-training', 'javascript', 'react'],
    },
    {
      description:
        "Resolved input performance issue with form inputs by leveraging React Hook Form's native input model for form state.",
      tags: ['react-hook-form', 'react', 'typescript', 'performance'],
    },
    {
      description:
        'Created interface layer between API and frontend to create more specific API models with TypeScript.',
      tags: ['typescript', 'api'],
    },
    {
      description:
        'Programmed with teammates to teach new libraries, git workflows, implementation details, testing, etc.',
      tags: ['team-training', 'react', 'typescript', 'javascript'],
    },
    {
      description:
        'Coordinated with API team and Product team to map and test complex data models end-to-end.',
      tags: ['api', 'agile'],
    },
  ],
  title: 'Senior Full Stack Engineer',
}

const yelpJob: Job = {
  company: 'Yelp',
  endDate: 'April 2020',
  skills: [
    { key: 'algorithms', label: 'Algorithms' },
    { key: 'api', label: 'API Design' },
    { key: 'javascript', label: 'JavaScript' },
    { key: 'microservices', label: 'Microservices' },
    { key: 'python', label: 'Python' },
    { key: 'react', label: 'React' },
    { key: 'team-training', label: 'Team Training' },
    { key: 'testing', label: 'Testing' },
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

const spjSolutionsJob: Job = {
  company: 'SPJ Solutions',
  endDate: 'September 2018',
  skills: [
    { key: 'react', label: 'React' },
    { key: 'redux', label: 'Redux' },
    { key: 'nodejs', label: 'Node.js' },
    { key: 'drag-and-drop', label: 'Drag and Drop' },
  ],
  startDate: 'December 2017',
  tasks: [
    {
      description:
        'First engineer on Citopus project after initial prototype was done with Django and jQuery. Turned into single page application using React and node.js, deployed it successfully to bare metal, and began growing Citopus team.',
      tags: ['react', 'nodejs'],
    },
    {
      description:
        'Built node server to handle front end requests and store changes for safe resets when an operation failed.',
      tags: ['nodejs'],
    },
    {
      description:
        "Used React with Redux to interface with VMware's SDK and API for automating monitoring and deployment of virtualized networking.",
      tags: ['react', 'redux'],
    },
    {
      description:
        'Created smart forms to generate inputs with values based on previously entered information.',
      tags: ['react', 'redux'],
    },
    {
      description:
        'Implemented drag and drop functionality to load configurations and extrapolate settings from targeted nodes.',
      tags: ['drag-and-drop'],
    },
  ],
  title: 'Lead Full Stack JavaScript Engineer',
}

const hackReactorJob: Job = {
  company: 'Hack Reactor',
  endDate: 'February 2017',
  skills: [
    { key: 'algorithms', label: 'Algorithms' },
    { key: 'data-structures', label: 'Data Structures' },
    { key: 'javascript', label: 'JavaScript' },
    { key: 'mentorship', label: 'Mentorship' },
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

const ucBerkeleyJob: Job = {
  company: 'UC Berkeley',
  endDate: 'May 2016',
  skills: [
    { key: 'javascript', label: 'JavaScript' },
    { key: 'jquery', label: 'jQuery' },
    { key: 'regex', label: 'Regex' },
    { key: 'drupal', label: 'Drupal' },
    { key: 'web-scraping', label: 'Web Scraping' },
  ],
  startDate: 'March 2014',
  tasks: [
    {
      description:
        'Built custom web scraper with jQuery and regex to turn static HTML bibliographies into Drupal database.',
      tags: ['web-scraping', 'jquery', 'regex', 'drupal', 'javascript'],
    },
  ],
  title: 'Library Operations/Web Assistant',
}

const jobList: Job[] = [
  percolateJob,
  nextHealthJob,
  yelpJob,
  spjSolutionsJob,
  hackReactorJob,
  ucBerkeleyJob,
]

type Action =
  | { type: 'FILTER_TASKS'; payload: string[] }
  | { type: 'RESET_TASKS' }

const tasksReducer = (
  state: {
    allTasks: { description: string; tags: string[] }[]
    filteredTasks: { description: string; tags: string[] }[] | null
  },
  action: Action
): {
  allTasks: { description: string; tags: string[] }[]
  filteredTasks: { description: string; tags: string[] }[] | null
} => {
  switch (action.type) {
    case 'FILTER_TASKS':
      return {
        ...state,
        filteredTasks: action.payload.length
          ? state.allTasks.filter((task) =>
              task.tags.some((tag) => action.payload.includes(tag))
            )
          : state.allTasks,
      }
    case 'RESET_TASKS':
      return {
        ...state,
        filteredTasks: state.allTasks,
      }
    default:
      return state
  }
}

const calculateSkillExperience = (() => {
  const cache: Record<string, number> = {}

  return (skillKey: string): number => {
    if (cache[skillKey] !== undefined) {
      return cache[skillKey]
    }

    let totalMonths = 0

    jobList.forEach((job) => {
      const hasSkill = job.skills.some((skill) => skill.key === skillKey)
      if (hasSkill) {
        const startDate = dayjs(job.startDate, 'MMMM YYYY').startOf('month')
        const endDate = job.endDate
          ? dayjs(job.endDate, 'MMMM YYYY').endOf('month')
          : dayjs().endOf('month') // Use current date if no end date
        totalMonths += endDate.diff(startDate, 'months') + 1 // Add 1 to include the starting month
        console.log('calculated diff for job', job.company, totalMonths)
      }
    })

    // Convert months to years and round to 1 decimal place
    const yearsOfExperience = parseFloat((totalMonths / 12).toFixed(1))
    cache[skillKey] = yearsOfExperience
    return yearsOfExperience
  }
})()

// Example usage
const reactExperience = calculateSkillExperience('react')
console.log(`Years of experience with React: ${reactExperience}`)

const JobContainer = ({
  job,
  filteredTasks,
}: // handleSkillClick,
// selectedSkills,
{
  job: Job
  filteredTasks: { description: string; tags: string[] }[] | null
  // handleSkillClick: (skill: string) => void
  // selectedSkills: string[]
}) => {
  return (
    <div className="border-t-1 border-t-cyan-200">
      <div className="grid grid-cols-6">
        <div className="col-span-2 place-content-center text-2xl">
          <p>{job.title}</p>
        </div>
        <div className="col-span-3 place-content-center">
          <h3 className="text-2xl">{job.company}</h3>
        </div>
        <div className="col-span-1 col-start-6 place-content-center italic">
          <p>
            {job.startDate} - {job.endDate}
          </p>
        </div>
      </div>
      <div className="border-t-1 border-t-cyan-100 pl-10">
        <ul>
          {(filteredTasks || job.tasks)
            .filter((task) => job.tasks.includes(task)) // Ensure tasks belong to this job
            .map((task, index) => (
              <li className="list-disc list-inside" key={index}>
                {task.description}
              </li>
            ))}
        </ul>
      </div>
      {/* <div className="border-t-1 border-t-cyan-100 pl-5">
        <h4 className="text-xl">Job Skills:</h4>
        <div className="flex flex-wrap">
          {job.skills.map((skill, index) => (
            <button
              className={`px-2 py-1 m-1 rounded ${
                selectedSkills.includes(skill.key)
                  ? 'bg-cyan-500 text-white'
                  : 'bg-cyan-100 text-cyan-900 hover:bg-cyan-300'
              }`}
              key={index}
              onClick={() => handleSkillClick(skill.key)}
            >
              {skill.label}
            </button>
          ))}
        </div>
      </div> */}
    </div>
  )
}

const SkillButton = forwardRef<
  HTMLButtonElement,
  { skill: Skill; isSelected: boolean; onClick: () => void }
>(({ skill, isSelected, onClick }, ref) => (
  <Tippy content={`${calculateSkillExperience(skill.key)} years of experience`}>
    <button
      className={`px-2 py-1 m-1 rounded ${
        isSelected
          ? 'bg-cyan-500 text-white'
          : 'bg-cyan-200 text-cyan-900 hover:bg-cyan-300'
      }`}
      onClick={onClick}
      ref={ref}
    >
      {skill.label}
    </button>
  </Tippy>
))

SkillButton.displayName = 'SkillButton'

const JobHistory = () => {
  const [state, dispatch] = useReducer(tasksReducer, {
    allTasks: jobList.flatMap((job) => job.tasks), // Combine all tasks from all jobs
    filteredTasks: jobList.flatMap((job) => job.tasks),
  })
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const handleSkillClick = (skill: string) => {
    setSelectedSkills((prevSkills) => {
      const updatedSkills = prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill) // Remove skill if already selected
        : [...prevSkills, skill] // Add skill if not selected

      dispatch({
        payload: updatedSkills,
        type: 'FILTER_TASKS',
      })

      return updatedSkills
    })
  }

  const resetTasks = () => {
    setSelectedSkills([])
    dispatch({ type: 'RESET_TASKS' })
  }

  // Filter jobs based on selected skills
  const filteredJobs = selectedSkills.length
    ? jobList.filter((job) =>
        job.skills.some((skill) => selectedSkills.includes(skill.key))
      )
    : jobList

  return (
    <div className="grid border-t-1 border-t-cyan-500">
      <h2 className="text-4xl pl-5">Job History</h2>
      <div className="border-t-1 border-t-cyan-300 pl-5">
        <h3 className="text-2xl">Skills</h3>
        <div className="flex flex-wrap justify-between">
          {[
            ...new Map(
              jobList.flatMap((job) =>
                job.skills.map((skill) => [skill.key, skill])
              )
            ).values(),
          ].map((skill, index) => (
            <SkillButton
              isSelected={selectedSkills.includes(skill.key)}
              key={index}
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
      <div className="border-t-1 border-t-cyan-300 pl-5">
        <h3 className="text-2xl">Experience</h3>
      </div>
      {filteredJobs.map((job, index) => (
        <JobContainer
          filteredTasks={state.filteredTasks}
          // handleSkillClick={handleSkillClick}
          job={job}
          key={index}
          // selectedSkills={selectedSkills}
        />
      ))}
    </div>
  )
}

export default JobHistory
