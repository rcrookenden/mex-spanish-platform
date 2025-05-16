import WordPage from "../../components/WordPage";
import words from "../../data/words";

export default function WordSlug({ wordData }) {
  if (!wordData) {
    return <div className="p-10 text-center text-3xl">Not found</div>;
  }

  return <WordPage wordData={wordData} />;
}

export async function getStaticPaths() {
  const paths = words.map((word) => ({
    params: { slug: word.slug },
  }));

  return {
    paths,
    fallback: false, // or true if you want to lazy-load new slugs
  };
}

export async function getStaticProps({ params }) {
  const wordData = words.find((word) => word.slug === params.slug);

  return {
    props: {
      wordData: wordData || null,
    },
  };
}
