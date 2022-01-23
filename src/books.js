import React, { useState } from "react"
import { useEffect } from "react"

export function Books(onTopicChange) {  
  const [differentTopic, setDifferentTopic] = useState();
  function onTopicChange(value) {
    setDifferentTopic(value);
  }
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40`).then(response => response.json()).then(
      data => {
        console.log(data)
      })
  }, [])
  return (
    <>
      <input type="text" onChange={(e) => onTopicChange(e.target.value)} />
    </>
  );
}