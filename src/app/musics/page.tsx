export default function ArtistTracks() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <iframe
          className="rounded-xl w-full"
          src="https://open.spotify.com/embed/artist/3prRKGJz16RRMRSIM97nHw?utm_source=generator&theme=0"
          height="700"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
