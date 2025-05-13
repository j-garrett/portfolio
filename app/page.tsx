import { Grid } from '@mui/material'
import MainContainer from './components/main-container'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="max-w-200 m-auto">
      <MainContainer>
        <Grid
          className="pt-5"
          columnSpacing={{ md: 3, sm: 2, xs: 1 }}
          container
          spacing={3}
        >
          <Grid size={6}>
            <Image
              alt="Picture of Jon standing in front of Casa Bonita"
              className="rounded-full"
              height={291}
              priority
              sizes="100vw"
              src="/casa-bonita-profile.jpg"
              width={300}
            />
          </Grid>
          <Grid size={6}>
            <p>Hi, I&apos;m Jon!</p>
            <p>
              I&apos;m a software engineer with a focus on web development. Most
              recently I&apos;ve been focused on front end with React and
              TypeScript, but further back I was full stack with both Python and
              Node.js. You can check out details on{' '}
              <Link href="/resume">my resume</Link>
            </p>
            <p>
              I was laid of in February 2024 and decided to give myself a year
              of PTO so I don&apos;t need any more PTO ever again.
            </p>
            <p>
              Now that it&apos;s been a year I&apos;d like to start working
              again and that&apos;s where you come in!
            </p>
          </Grid>
          <Grid size={12}>
            <h3>Still reading...?</h3>
            <p>
              Take a quick look at some of my recent{' '}
              <Link href="/projects">projects</Link> to see what I&apos;ve been
              up to recently. I also have a <Link href="/blog">blog</Link> with
              some project specific ramblings.
            </p>
            <p>
              This site continues to be a work in progress. I know how to
              implement a design, but I&apos;m a bit slower at creating one from
              scratch. So here is a list of things I want to do:
            </p>
            <ul className="list-disc pl-10 pt-5">
              <li>Make site responsive.</li>
              <ul className="list-disc pl-5">
                <li>Sidebar nav especially.</li>
              </ul>
              <li>Improve Blog landing page</li>
              <li>Blog component mapping.</li>
              <li>Add blog posts.</li>
              <li>Better project explanation/examples.</li>
              <li>Hosting for example projects.</li>
            </ul>

            <h3 className="pt-10">STILL reading...?</h3>
            <p>Here&apos;s a watercolor I did of my brother&apos;s dog Milo.</p>
            <Image
              alt="Watercolor painting of King Milo (a dog)"
              height={291}
              priority
              sizes="100vw"
              src="/king-milo.jpg"
              title="Bark! Bark!"
              width={400}
            />
            <p>The end.</p>
          </Grid>
        </Grid>
      </MainContainer>
    </div>
  )
}
