import Image from 'next/image'
import JobHistory from '../components/job-history'

export default function Page() {
  return (
    <div>
      <JobHistory />
      <div className="border-t-1 border-t-cyan-500">
        <div className="grid grid-cols-3">
          <div className="col-start-2 pt-5">
            <Image
              alt="Watercolor painting of King Milo (a dog)"
              height={291}
              priority
              sizes="100vw"
              src="/king-milo.jpg"
              style={{
                height: 'auto',
                width: '100%',
              }}
              title="You found Milo again!"
              width={203}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
