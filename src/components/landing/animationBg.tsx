import { motion } from 'framer-motion'
export const AnimatedBackground: React.FC = () => {
  // Generate random particles
  const particles = Array.from({
    length: 15,
  }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle radial gradient for center focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.05)_0%,transparent_70%)]" />

      {/* Floating light particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-christlumen-light/20 blur-[2px]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Subtle light rays from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[50vh] bg-gradient-to-b from-christlumen-light/5 to-transparent blur-3xl" />
    </div>
  )
}
