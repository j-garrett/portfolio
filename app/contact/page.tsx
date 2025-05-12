import MainContainer from '../components/main-container'

export default function Page() {
  return (
    <div>
      <h2 className="text-4xl pl-5">Contact</h2>
      <MainContainer>
        <address>
          <div className="content-center">
            <a href="mailto:jon@j-garrett.com">Email</a>
          </div>
          <div className="content-center">
            <a href="https://www.linkedin.com/in/jon-garrett/">LinkedIn</a>
          </div>
          <div className="content-center">
            <a href="https://github.com/j-garrett">GitHub</a>
          </div>
        </address>
      </MainContainer>
    </div>
  )
}
