import Image from 'next/image'
import JobHistory from './components/job-history'
// import Header from './components/header'

export default function Page() {
  return (
    // <div className="grid grid-cols-9 gap-6">
    //   <div className="col-span-1 bg-cyan-200"></div>
    //   <div className="col-span-7">
    //     <div className="pl-10">
    //       <Header />
    //     </div>
    <div>
      <JobHistory />
      <div className="border-t-1 border-t-cyan-500">
        <div className="grid grid-cols-3">
          <div className="col-start-2 pt-5">
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
    </div>
    //   </div>
    //   <div className="col-span-1 bg-cyan-200"></div>
    // </div>
  )
}
