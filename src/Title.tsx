interface TitleProps {
  title: string
}

export function Title({ title = 'Title' }: TitleProps) {
  return (
    <h1 className="title">{title}</h1>
  )
}