import Link from 'next/link'

export default props => {

  return (
    <div className="split-lists">
      <div className="split-list">
        <h3>Network</h3>
        <ul>
        { Object.keys(props.links).map((item, i) => (
          <li key={item, i}>
            <Link href={props.links[item]}>
              <a>{item}</a>
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}
