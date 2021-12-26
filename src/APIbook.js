import React from "react"
import { useEffect } from "react"
import {callGet} from "./api"
export default function APIbook(){
     useEffect(()=>{
    callGet(`https://www.googleapis.com/books/v1/volumes?q=Android&&maxResults=40`).then(
      data=>{
      console.log(data)}
    )
      },[]) 
      return (
         <></>
      )

}
