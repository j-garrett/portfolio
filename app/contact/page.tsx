import MainContainer from '../components/main-container'
import PageHeader from '../components/page-header'

export default function Page() {
  return (
    <div>
      <PageHeader header="Contact" />
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
