export default (req, res) => {
  if (req.method === 'POST') {
    res.status(200).json({ msg: 'woop woop from post' })
  }
  if (req.method === 'GET') {
    res.status(200).json({ msg: 'woop woop from get' })
  }
}
