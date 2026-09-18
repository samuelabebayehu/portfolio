import { profile } from "@/data/portfolio"

export default function Footer() {
  return <footer className="site-container footer"><span>© {new Date().getFullYear()} {profile.name}</span><span>{profile.location}</span></footer>
}
