import React, { useCallback } from 'react'
import {useDropzone} from 'react-dropzone'
import styled from 'styled-components'

const getOpacity = ({ isDragActive }) => {
  return isDragActive ? 0.8 : 1
}

const getBorderColor = (props) => {
  if (props.isDragAccept) {
    return 'var(--color-secondary)'
  }
  if (props.isDragReject) {
    return '#ca2627'
  }
  if (props.isDragActive) {
    return 'var(--color-secondary)'
  }
  return 'var(--color-gray_200)'
}

const getBackgroundColor = (props) => {
  if (props.isDragActive && props.isDragAccept) {
    return 'var(--color-tertiary__100)';
  }
  return 'var(--color-gray_100)';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.2rem;
  border-color: ${props => getBorderColor(props)};
  background-color: ${props => getBackgroundColor(props)};
  opacity: ${props => getOpacity(props)};
  color: var(--gray__500);
  outline: none;
  transition: all .24s ease-in-out;
  width: 100%;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    padding-top: 100%;
  }
`
const ContainerInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`

const FileDropper = (props) => {
  const handleDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length) props.onChange(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: 'image/*',
    multiple: props.multiple,
    onDrop: handleDrop
  })

  return (
    <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
      <input name={ props.name } {...getInputProps()} />
      <ContainerInner>
        { props.children }
      </ContainerInner>
    </Container>
  )
}

export default FileDropper
