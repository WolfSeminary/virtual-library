import React from "react"
import { useEffect } from "react"

export function APIbook() {
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40`).then(response => response.json()).then(
      data => {
        console.log(data)
      }
    )
  }, [])
  return (
    <></>
  )
}