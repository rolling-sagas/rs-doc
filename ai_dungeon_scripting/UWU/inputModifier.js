const modifier = (text) => {
  let modifiedText = text
  const lowered = text.toLowerCase()
  
  modifiedText = uwufy(text)
  
  return { text: modifiedText }
}

// Don't modify this part
modifier(text)
