import React from "react"
import { Link } from "react-router-dom"
import Container from "../components/Container"

export default function NoPage() {
  return (
    <Container className="my-12 flex flex-col items-center justify-center gap-8">
      <p className="text-center text-black text-9xl font-black">4 0 4</p>
      <Link to="/" className="text-sm text-primary font-bold">Go to Homepage</Link>
    </Container>
  )
}