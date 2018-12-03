import React from 'react'
import Editor from 'react-monaco-editor'

export default props => {
    const options = {
        selectOnLineNumbers: true,
        fontSize: '20px'
    };

    return (
        <Editor
            width="100%"
            height="900px"
            language="javascript"
            theme="vs-dark"
            value={props.code}
            options={options}
            onChange={val => props.updateFn(val)}
        />
    );
}