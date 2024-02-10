import Image from 'next/image'

export const Loading = (): JSX.Element => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  )
}
