interface HeadingProps {
    title: string,
}

const Headings = ({title}:HeadingProps) => {
  return (
    <div className="text-4xl font-bold bg-purple-900 text-white px-5 py-3 rounded-tl-4xl rounded-br-4xl">{title}</div>
  )
}

export default Headings