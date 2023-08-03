export const BurgerCard = ({
  title,
  description,
  imgSrc,
}: {
  title: string
  description: string
  imgSrc: string
}) => {
  return (
    <div className="flex flex-col gap-4 bg-mintDark-700 shadow-lg shadow-mintDark-700 p-6 text-white rounded overflow-hidden">
      <div className="mx-[-1.5rem] mt-[-1.5rem]">
        <img src={imgSrc} />
      </div>
      <h2 className="font-body text-xl text-center font-bold">{title}</h2>
      <p>{description}</p>
      <button className="justify-end font-body text-xl px-4 py-2 rounded bg-mint text-white md:text-black md:shadow-md hover:bg-mintHover active:bg-mintActive">
        Order Now
      </button>
    </div>
  )
}
