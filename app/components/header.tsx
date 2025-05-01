const Header = () => {
  return (
    <div className="bg-blue-500 grid grid-flow-col grid-rows-3 gap-4">
      <div className="bg-pink-500 row-span-3">
        <h1 className="text-6xl">Jon Garrett</h1>
      </div>
      <div className="bg-teal-500 col-span-2">Test right side1</div>
      <div className="bg-teal-500 col-span-2">Test right side2</div>
    </div>
  )
}

export default Header
