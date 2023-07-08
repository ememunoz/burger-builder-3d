export const Navbar = () => (
  <div className="wrapper">
    <nav className="flex flex-row items-center justify-between h-[72px] py-4 text-white">
      <h1 className="text-2xl font-display">
        <span className="flex sm:hidden items-center justify-center p-1 h-[44px] aspect-square border-[1px] border-solid border-current rounded-lg">
          B
        </span>
        <span className="hidden sm:block">Build·a·Burger</span>
      </h1>
      <ul className="flex flex-row items-center gap-4 font-body text-lg">
        <li className="border-b-[1px] border-transparent hover:border-solid hover:border-b-[1px] hover:border-current">
          <a href="#">Build your own</a>
        </li>
        <li className="border-b-[1px] border-transparent hover:border-solid hover:border-b-[1px] hover:border-current">
          <a href="#">My orders</a>
        </li>
      </ul>
    </nav>
  </div>
)
