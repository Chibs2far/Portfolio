export default function ExperienceLogo({ src, alt }) {
  if (!src) return null

  return (
    <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-violet-500/60 bg-[#0f0a1f] p-1 shadow-[0_0_35px_rgba(129,29,214,0.4)]">
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-full object-cover"
        loading="lazy"
      />
    </div>
  )
}
