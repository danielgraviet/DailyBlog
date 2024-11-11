import React from 'react'
import Image from 'next/image'

export default function MyProfilePic() {
  return (
    <section className="w-full flex justify-center items-center mx-auto py-8">
      <Image 
        src="/images/vietnamesevird.png"
        width={300}
        height={300}
        alt="bird"
        priority={true}
        className="rounded-full"
      />
    </section>
  );
}
