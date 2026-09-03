import { createFileRoute } from "@tanstack/react-router";
import SiteLayout from '@/components/SiteLayout';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import About from '@/components/About';
import Programs from '@/components/Programs';

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'Tevexxo — Build, Learn, Accelerate' },
    { name: 'description', content: 'Hands-on courses, real-world projects, and next-generation products for future innovators.' },
    { property: 'og:title', content: 'Tevexxo — Build, Learn, Accelerate' },
    { property: 'og:description', content: 'Hands-on courses, real-world projects, and next-generation products for future innovators.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Courses />
      <About />
      <Programs />
    </SiteLayout>
  );
}
