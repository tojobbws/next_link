import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <Link href="/detail">
      <a className="card">
        <h3>Go TO Detail</h3>
      </a>
    </Link>
  </div>
)

export default Home
