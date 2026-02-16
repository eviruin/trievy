import Image from 'next/image';

export default function RadarAvatar() {
  return (
    <div className="avatar-wrap radar-bit">
      <Image
        src="/assets/IMG_3176.jpeg"
        alt="Taofik Hidayat"
        width={240}
        height={240}
        className="avatar"
      />
      <span className="radar" />
      <span className="radar delay" />
    </div>
  );
}
