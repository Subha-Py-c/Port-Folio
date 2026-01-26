import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({
    default: mod.Dithering,
  })),
);

export default function CTASection({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-12 w-full flex justify-center items-center px-4 md:px-6 inset-0">
      <div
        className="w-full max-w-[1536px] relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[16px] md:rounded-[48px] border border-border bg-card shadow-sm min-h-[600px] h-[90vh] md:h-fit flex flex-col items-center justify-center duration-500">
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen">
              <Dithering
                colorBack="#00000000"
                colorFront="#EC4E02"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          {/* Render children here with z-index to sit on top of pattern */}
          <div className="relative z-10 w-full h-full p-6 md:p-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
