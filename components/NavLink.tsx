import { useRouter } from 'next/router';

function NavLink({ children, href, clickAction, highlight = false }) {
  const router = useRouter();
  const active = router.pathname === href ? 'active' : '';

  const handleClick = (e: any) => {
    e.preventDefault();
    clickAction(false);
    router.push(href);
  }

  return (
    <a href={href} onClick={handleClick} className={`${active} ${highlight ? 'highlight' : ''}`}>
      {children}
    </a>
  )
}

export default NavLink