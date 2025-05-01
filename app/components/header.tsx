const Header = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-3 self-center">
        <h1 className="text-6xl">Jon Garrett</h1>
      </div>
      <address className="grid grid-row-3 gap-2 col-span-1 justify-items-end">
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
      <hr className="col-span-4" />
    </div>
  )
}

export default Header
