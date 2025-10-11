const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,235,220,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,235,220,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
  )
}

export default BackgroundEffect
