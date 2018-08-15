import Link from 'next/link'
let i = 0

export default props => {

  const compare = (a,b) => {
    if (a.category < b.category)
      return -1;
    if (a.category > b.category)
      return 1;
    return 0;
  }

  return (
    <div className="split-lists">
      {props.links.sort(compare).map(link => (
        <div className="split-list">
        <h3>{link.category}</h3>
          <ul>
            <li key={link._id}>
              <Link href={link.url}>
                <a>{link.title}</a>
              </Link>
            </li>

          </ul>
        </div>
      ))}
    </div>
  )
}
