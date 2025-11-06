export default function ShinyText({ text, disabled = false, speed = 5, className = '' }) {
  const animationDuration = `${speed}s`

  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(196,181,253,1) 30%, rgba(255,255,255,0.95) 45%, rgba(129,140,248,0.9) 60%, rgba(196,181,253,1) 75%)',
        backgroundSize: '250% 100%',
        WebkitBackgroundClip: 'text',
        color: 'rgb(196 181 253)',
        animationDuration,
      }}
    >
      {text}
    </span>
  )
}
