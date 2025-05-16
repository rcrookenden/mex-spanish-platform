import ChunkPage from "../../components/ChunkPage";
import chunks from "../../data/chunks";

export async function getStaticPaths() {
  const paths = chunks.map((chunk) => ({
    params: { slug: chunk.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const chunkData = chunks.find((chunk) => chunk.slug === params.slug);

  return {
    props: {
      chunkData
    }
  };
}

export default ChunkPage;
