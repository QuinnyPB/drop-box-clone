import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1e1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2b2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to DropbBox-Clone
            <br />
            <br />
            Storing everything for you and your business needs in one place.
          </h1>

          <p className="pb-20">
            Enhance your personal storage with Dropbox-Clone, offering a simple
            and efficient method for uplaoding, organising and accessing your
            files from anywhere.
          </p>

          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Try for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-[#1e1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This project is in no way affiliated with Dropbox.com and is solely for
        the demonstration of my skills and knowledge associated with web
        development, and should not be used seriously. This project should not
        be considered or used as a solution to cloud storage, and no
        responsibility is taken for whatever happens to user content that is
        uploaded to this project's cloud servers.
      </p>
    </main>
  );
}
