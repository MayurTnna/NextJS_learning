import { useRouter } from 'next/router'
import React from 'react'

function Index() {
    const router = useRouter()
    const {productid, reviewid} = router.query
  return (
    
   <h1>Review {reviewid} about product :-{productid}</h1>
  )
}

export default Index