import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('testing get')
})

router.post('/', (req, res) => {
  const { name, description } = req.body
  res.status(201).json({ name, description })
})

router.put('/:id', (req, res) => {
  const { name, description } = req.body
  res.json({ name, description })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body
  res.json({ name, id })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: 'Deleted', id })
})
export default router
