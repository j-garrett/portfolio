export default function Page() {
  return (
    <div>
      {' '}
      <h1>Contact</h1>
      <hr />
      <address className="grid grid-row-3 gap-2">
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
    </div>
  )
}
