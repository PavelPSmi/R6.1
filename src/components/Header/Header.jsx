import { Outlet, Link, NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'

// import styles from './Header.module.css'
import styles from './Header.css'
import Container from "@mui/material/Container";
export const navigate = [
  {
    id: 1,
    name: 'Main',
    to: '/'
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile'
  },
  {
    id: 3,
    name: 'Chat',
    to: '/chats'
  },
]

export function Header() {

  const name = useSelector((store) => store.name)

  return (
    <Container maxWidth="sm" className='container-style'>
        <nav className={styles.header}>
          <ul  className='header'>
            {navigate.map((link) => (
              <li key={link.id}>
              <NavLink 
                to={link.to}
                style={({ isActive }) => ({
                  color: isActive ? 'green' : 'blue'
                })}
              >
                {link.name}
              </NavLink>
            </li>
            ))}
          </ul>
        <p>{name}</p>
        </nav>
      <main>
        <Outlet/>
      </main>
    </ Container>
  )
}