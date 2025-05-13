import { useRouter } from "next/router";
import WordPage from "../../components/WordPage";
import words from "../../data/words";

export default function WordSlug() {
  const router = useRouter();
  const { slug } = router.query;

  const wordData = words.find((word) => word.slug === slug);

  if (!wordData) {
    return <div className="p-10 text-center text-3xl">Loading...</div>; // Can customize 404 later
  }

  return <WordPage wordData={wordData} />;
}

