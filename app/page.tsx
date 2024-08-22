import GitHubIcon from "@/components/header/GithubIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="cursor-pointer">
      <div className="mx-auto w-full sm:w-656">
        <div className="mb-8 text-4xl font-semibold">Qi Peng</div>

        <div className="text-neutral-600 dark:text-neutral-300">
          <div>Hi, I am Qi Peng, a passionate front-end engineer.</div>

          <div className="mt-8 space-y-3">
            <div className="flex items-center space-x-2">
              <span>Working at</span>
              <Badge variant="secondary" className="rounded-sm">
                JD
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span>Skilled in</span>
              <Badge variant="secondary" className="rounded-sm">
                Vue
              </Badge>
              <Badge variant="secondary" className="rounded-sm">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="rounded-sm">
                JavaScript
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span>Currently learning</span>
              <Badge variant="secondary" className="rounded-sm">
                React
              </Badge>
              <Badge variant="secondary" className="rounded-sm">
                Next.js
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span>Maintaining</span>
              <Badge variant="secondary" className="rounded-sm">
                Blog
              </Badge>
              <Badge variant="secondary" className="rounded-sm">
                100 Days Demo
              </Badge>
            </div>
          </div>

          <div className="mt-8">
            My aim is to continuously enhance my skills, explore new technologies, and develop exceptional products with
            great user experiences. Let us connect and share ideas!
          </div>

          <div className="mt-10 flex">
            Find me on{" "}
            <div className="mx-2">
              <GitHubIcon />
            </div>{" "}
            Or mail me at
            <Button variant="link" className="h-6 px-2 py-0">
              <Link href="mailto:pengpengq@outlook.com">PengPengQ@outlook.com</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
