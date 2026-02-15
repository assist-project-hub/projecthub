export default function ProjectCard({ name, tech, description, imageUrl, demoUrl }) {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-gray-100 hover:shadow-glow hover:border-primary-100 transition-all duration-300">
      <div className="aspect-video bg-gray-100 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {name}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-lg bg-primary-50 text-primary-700 font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-colors"
        >
          View Demo
        </a>
      </div>
    </div>
  )
}
