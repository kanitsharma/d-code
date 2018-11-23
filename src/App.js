import React, { useState, useEffect } from 'react'
import IPFS from 'ipfs'
import Editor from './editor'

const CreateNode = setFile => {
  useEffect(_ => {
    const node = new IPFS()

    node.on('ready', async () => {
      const filesAdded = await node.files.add({
        path: 'hello.txt',
        content: Buffer.from('Hello World 101')
      })

      console.log('Added file:', filesAdded[0].path, filesAdded[0].hash)

      const fileBuffer = await node.files.cat(filesAdded[0].hash)

      console.log('Added file contents:', fileBuffer.toString())

      setFile(fileBuffer.toString())
    })
  }, [])
}

const App = props => {
  const [file, setFile] = useState('No File Added')
  CreateNode(setFile)

  return (
    <div className="App">
      <h1>File -</h1>
      <p>
        {file}
      </p>
      <Editor />
    </div>
  )
}

export default App;
