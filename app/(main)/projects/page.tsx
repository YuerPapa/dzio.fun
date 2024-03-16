import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '我的项目'
const description =
  '多年来，我一直在做参与各式各样的项目，在这里，我精心挑选并汇集了那些我认为表现出色的项目，作为我职业旅程中的标记点。'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我过去的冒险之旅。
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          多年来，我一直在做各种各样的项目，有<b> B端</b>的，有<b> C端</b>
          的，有<b>平面设计</b>，也有对于设计的<b>探索</b>
          ，在这里，我精心挑选并汇集了那些我认为表现出色的项目，作为我职业旅程中的标记点。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
