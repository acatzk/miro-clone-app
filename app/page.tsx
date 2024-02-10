import { UserButton } from '@clerk/nextjs'

export default function Home(): JSX.Element {
  return (
    <div className="gapy-4 flex flex-col">
      <p>This is a screen for authenticated users only.</p>
      <div>
        <UserButton />
      </div>
    </div>
  )
}
