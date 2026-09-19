import Post from '@/components/Post'
import './page.css'

// this replaces the old src/pages/Home.jsx from the Vite version — in the
// App Router, this file *is* the "/" route directly, so its content lives
// here instead of in a separate importable "page" component

export default function Home() {
  return (
    <main className="home">
      <Post />
    </main>
  )
}
