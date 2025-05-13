import Link from 'next/link'
import MainContainer from '../components/main-container'
import PageHeader from '../components/page-header'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="max-w-200 m-auto">
      <PageHeader header="Projects" />
      <MainContainer>
        <h3 className="pt-5 underline">
          <Link href="https://j-garrett.com/">This Portfolio Site</Link>
        </h3>
        <p>
          Welcome to <Link href="https://j-garrett.com/">j-garrett.com</Link>!
          You can check out the code for this site on{' '}
          <Link href="https://github.com/j-garrett/portfolio">GitHub</Link>. I
          wanted to work with libraries I hadn&apos;t used before, so I decided
          to use Next.js and Tailwind CSS. In the past I&apos;ve used{' '}
          <Link href="https://styled-components.com/">styled-components</Link>,
          but those have fallen out of favor and the library was put on
          maintenance mode earlier this year.
        </p>
        <p>
          Since my past work projects can&apos;t show off their code I wanted to
          prove that I exist, am human, and can in fact build websites. Consider
          this site my professional CAPTCHA.
        </p>
        <p>
          I have been using GitHub Copilot to build some portions of this site
          and my other projects. I&apos;ve found it very helpful, but also
          limited at solving more complex problems. That&apos;s where I come in!
        </p>
        <h3 className="pt-5 underline">
          <Link href="https://github.com/j-garrett/scavenger-hunt-server">
            Scavenger Hunt
          </Link>
        </h3>
        <p>
          This started as a front end to play with Google&apos;s Maps API and
          spinning up a project with Vite so there is a separate{' '}
          <Link href="https://github.com/j-garrett/scavenger-hunt-front">
            front end repo
          </Link>{' '}
          and{' '}
          <Link href="https://github.com/j-garrett/scavenger-hunt-server">
            back end repo
          </Link>
          .
        </p>
        <p>
          I used Nest.js on the server and was pretty impressed with it&apos;s
          setup. Sometimes verbose, but the CLI tools and Copilot&apos;s
          autocomplete helped with those pain points.
        </p>
        <p>
          I got a little carried away with the authentication side of this, but
          it was a fun experiment.
        </p>
        <p>
          The front end still needs to be set up to interact with the server to
          build Hunts, but the API is complete. In fact the API was also used to
          generate OpenAPI specifications and generate TypeScript types to use
          on the front end.
        </p>
        <h3 className="pt-5 underline">
          <Link href="https://github.com/j-garrett/squarevania">
            Squarevania
          </Link>
        </h3>
        <Image
          alt="Squarevania: accurate hitboxes are hard"
          height={300}
          src="/squarevania-hitboxes.png"
          width={400}
        />
        <p>
          I had some time recently to play one of my favorite video game genres:
          Metroidvanias. I decided to try to build on with Phaser.js and see if
          ChatGPT could create some spritesheets for me to load into and use
          with Tiled to create maps. The code is public on{' '}
          <Link href="https://github.com/j-garrett/squarevania">GitHub</Link> so
          you can always download it to play it locally.
        </p>
        <p>Accurate hitboxes are hard!</p>
      </MainContainer>
    </div>
  )
}
