import { FiPlus } from 'react-icons/fi'
import { Container, Content, NewMovie } from './styles'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MovieNote } from '../../components/MovieNote'

export function Home() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  function handlePreview(id) {
    navigate(`moviepreview/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header>
        <div className='search'>
          <Input
            placeholder='Pesquisar pelo título'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </Header>
      <Content>
        <div className='title'>
          <h1>Meus filmes</h1>
          <NewMovie to='/newmovie'>
            <Button title='Adicionar filme' icon={FiPlus} />
          </NewMovie>
        </div>
        <main>
          <div className='notes'>
            {notes.map(note => (
              <MovieNote key={String(note.id)} data={note} onClick={() => handlePreview(note.id)} />
            ))}
          </div>
        </main>
      </Content>
    </Container>
  )
}
