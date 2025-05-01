import Image from 'next/image'
import JobHistory from './components/job-history'
import Header from './components/header'

export default function Page() {
  return (
    <div className="grid grid-cols-9 gap-6">
      <div className="col-span-1 bg-cyan-200"></div>
      <div className="col-span-7">
        <Header />
        <JobHistory />
        <div className="columns-3">
          <div>WaterColors:</div>
          <div>
            <Image
              alt="Profile"
              height={291}
              priority
              sizes="100vw"
              src="/king-oliver.jpg"
              style={{
                height: 'auto',
                width: '100%',
              }}
              width={203}
            />
          </div>
        </div>
      </div>
      <div className="col-span-1 bg-cyan-200"></div>
    </div>
  )
}
