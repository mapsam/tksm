import { useRouter } from 'next/router';

function NavLink({ children, href }) {
  const router = useRouter();
  const active = router.asPath === href ? 'active' : '';

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={active}>
      {children}
    </a>
  )
}

export default NavLink