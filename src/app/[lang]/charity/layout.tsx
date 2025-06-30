export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="container mx-auto px-4">
        <div className="flex  flex-col">
          {children}
        </div>
      </div>
    )
  }
