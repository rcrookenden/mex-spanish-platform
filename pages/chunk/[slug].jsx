import { useRouter } from "next/router";
import chunkData from "../../data/chunks"; // adjust path if your chunks.js is elsewhere
import TestChunkPage from "../../components/ChunkPage"; // or whatever you named your chunk component

export default function ChunkSlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  const chunk = chunkData.find((c) => c.slug === slug);

  if (!chunk) return <p className="p-10 text-xl">Not found 😢</p>;

  return <TestChunkPage chunkData={chunk} />;
}