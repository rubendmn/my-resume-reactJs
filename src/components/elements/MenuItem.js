export default function MenuItem({href,text}) {
  return (
    <a href={href} className="navbar-item is-unselectable">
      {text}
    </a>
  );
}


