import { useState } from 'react'
import ControlPanel from './controls'
import NameBadge from './name-badge'

const Application = () => {
  const [name, setName] = useState('')

  return (
    <main className="application">
      <ControlPanel {...{ name }} onChange={(e) => setName(e.target.value)} />
      <NameBadge name={name} />
    </main>
  )
}

export default Application
