import { Container, Profile } from './styles'
import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

import { Link, useNavigate } from 'react-router-dom'

import { Logout } from '../Logout'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({ children }) {
  const { signOut, user } = useAuth()

  const navigation = useNavigate()

  function handleSignOut() {
    navigation('/')
    signOut()
  }

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <Link to='/'>
        <h1>RocketMovies</h1>
      </Link>
      {children}
      <div>
        <Profile>
          <div>
            <Link to='/profile'>{user.name}</Link>
            <Logout onClick={handleSignOut} title='Sair' />
          </div>
          <img to='/profile' src={avatarURL} alt={user.name} />
        </Profile>
      </div>
    </Container>
  )
}
