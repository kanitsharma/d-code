import React, { useState, useEffect } from 'react'
import IPFS from 'ipfs'
import Editor from './editor'

const getCodeFromNode = setFile => {
  useEffect(_ => {
    const hash = localStorage.getItem('hash')
    if (hash) {
      fetch('https://ipfs.io/ipfs/' + hash)
        .then(res => res.text())
        .then(code => {
          setFile(code)
        })
    } else {
      setFile('Enter your code here')
    }
  }, [])
}

const CreateNode = file => {
  useEffect(_ => {
    const node = new IPFS()
    node.on('ready', async () => {
      const filesAdded = await node.files.add({
        path: 'hello.txt',
        content: Buffer.from(file)
      })
      localStorage.setItem('hash', filesAdded[0].hash)
    })
  }, [file])
}

const App = props => {
  const [file, setFile] = useState('')
  getCodeFromNode(setFile)
  CreateNode(file)

  return (
    <div className="App">
      <Editor code={file} updateFn={setFile} />
    </div>
  )
}

export default App;
