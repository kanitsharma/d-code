import React, { useState } from 'react'
import Editor from 'react-monaco-editor'

export default props => {
    const [code, setCode] = useState('')
    const options = {
        selectOnLineNumbers: true
    };

    return (
        <Editor
            width="100%"
            height="800px"
            language="javascript"
            theme="vs-dark"
            value={code}
            options={options}
            onChange={val => setCode(val)}
        />
    );
}