
const logos = [
  {
    name: 'React',
    url: '/react.svg',
  },
  {
    name: 'NextJS',
    url: '/nextjs.svg',
  },
  {
    name: 'Typescript',
    url: '/typescript.svg',
  },
  {
    name: 'Javascript',
    url: '/javascript.svg',
  },
  {
    name: 'HTML',
    url: '/html5.svg',
  },
  {
    name: "CSS",
    url: "/css.svg",
  },
  {
    name: 'Git',
    url: '/git.svg',
  },
  {
    name: 'MySQL',
    url: '/mysql.svg',
  },
  {
    name: "PostgreSQL",
    url: "/postgres.svg",
  },
  {
    name: "Supabase",
    url: "/supabase.svg"
  },
  {
    name: "Java",
    url: "/java.svg",
  },
  {
    name: "PHP",
    url: "/php.svg",
  },
  {
    name: "C",
    url: "/c.svg",
  },
  {
    name: "Python",
    url: "/python.svg",
  },
]

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full pb-12 pr-16">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <div key={key} className="px-10">
                    <img
                      src={logo.url}
                      className="h-20 w-20 drop-shadow-md"
                      alt={`${logo.name}`}
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AnimatedLogoCloud;