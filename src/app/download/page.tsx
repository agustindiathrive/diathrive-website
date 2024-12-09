import Image from 'next/image';

export default function DownloadPage() {
  // Render
  return (
    <main className="bg-dark-blue flex flex-row h-screen">
      <section className="flex flex-row items-center justify-center w-1/2">
        <div className="flex flex-col">
          <h4 className="font-normal leading-[40px] text-[32px]" style={{ color: 'white' }}>
            Download the Diathrive
            <br />
            Health App Today.
          </h4>
          <div className="flex flex-row gap-6 mt-6">
            <a aria-label="Download on the App Store" href="https://apps.apple.com/us/app/diathrive-health/id1619849670" target="_blank">
              <Image
                alt="Download on the App Store"
                height={55}
                priority
                src="/images/DownloadAppStore.png"
                width={181}
              />
            </a>
            <a aria-label="Download on Google Play" href="https://play.google.com/store/apps/details?id=com.diathrive.app.android">
              <Image
                alt="Download on Google Play"
                height={55}
                priority
                src="/images/DownloadGooglePlay.webp"
                width={181}
              />
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-row items-end justify-center w-1/2">
        <Image
          alt="Diathrive Mobile App"
          height={642}
          priority
          src="/images/DiathriveMobileApp.webp"
          width={449}
        />
      </section>
    </main>
  );
}