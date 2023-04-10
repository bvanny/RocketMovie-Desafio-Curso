import { Container, Form } from './styles'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { FiArrowLeft } from 'react-icons/fi'

import { useState } from 'react'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function NewMovie() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o título da nota')
    }

    if (!rating) {
      return alert('Digite a nota')
    }

    if (rating < 0 || rating > 5) {
      return alert('A classificação do filme deve estar entre 0 e 5')
    }

    if (newTag) {
      return alert('Para criar a nota você deve adicionar a tag ou deixar o campo vazio.')
    }

    await api.post('/notes', {
      title,
      description,
      rating,
      tags
    })

    alert('Nota criada com sucesso!')
    handleBack()
  }

  function handleClear() {
    setTitle('')
    setRating('')
    setDescription('')
    setTags([])

    document.querySelectorAll('input').forEach(input => (input.value = ''))

    document.querySelectorAll('textarea').forEach(textarea => (textarea.value = ''))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  return (
    <Container>
      <Header />
      <Form>
        <div>
          <ButtonText title='Voltar' icon={FiArrowLeft} onClick={handleBack} />
          <h1>Novo filme</h1>
        </div>

        <main>
          <div>
            <Input
              placeholder='Título'
              style={{ marginRight: 40 }}
              onChange={e => setTitle(e.target.value)}
            />
            <Input placeholder='Sua nota (de 0 a 5)' onChange={e => setRating(e.target.value)} />
          </div>

          <TextArea placeholder='Observação' onChange={e => setDescription(e.target.value)} />

          <Section title='Marcadores'>
            <div className='tags'>
              {tags.map((tag, index) => (
                <NoteItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
              ))}
              <NoteItem
                isNew
                placeholder='Novo marcador'
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div className='btns'>
            <Button title='Excluir filme' onClick={handleClear} />
            <Button title='Salvar alterações' onClick={handleNewNote} />
          </div>
        </main>
      </Form>
    </Container>
  )
}
