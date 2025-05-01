import Image from 'next/image'
import JobHistory from './components/job-history'
import Header from './components/header'

export default function Page() {
  return (
    <div className="columns-1">
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
  )
}
