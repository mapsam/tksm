import { useRouter } from 'next/router';

function NavLink({ children, href, clickAction }) {
  const router = useRouter();
  const active = router.asPath === href ? 'active' : '';

  const handleClick = (e: any) => {
    e.preventDefault();
    clickAction(false);
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={active}>
      {children}
    </a>
  )
}

export default NavLink