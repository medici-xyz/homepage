import React from 'react'

const Hero: React.FC<{}> = () => {
  return (
    <section className="text-text-primary flex flex-col align-center justify-center flex-1">
      <h1 className="font-bold text-6xl text-center mb-4 animate-reveal-from-bottom">
        NFTs are here, they're just not usable
      </h1>
      <h6 className="text-text-secondary text-center text-xl animate-reveal-from-bottom-delayed ">
        Let's change that
      </h6>
    </section>
  )
}

export default Hero
